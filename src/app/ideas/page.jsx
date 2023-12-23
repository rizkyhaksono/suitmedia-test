/* eslint-disable @next/next/no-img-element */
"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Pagination, Card, Skeleton, Result, Button, Select } from "antd";
import NavbarComponent from "../../components/NavbarComponent";
import FooterComponent from "@/components/FooterComponent";
import CardComponent from "../../components/CardComponent";
import CardDetail from "../../components/CardDetail";
import fetchData from "@/utils/fetchData";
import "./page.css";
const { Option } = Select;

export default function IdeasPage() {
  const router = useRouter();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedIdea, setSelectedIdea] = useState(null);

  const [currentPage, setCurrentPage] = useState(() => {
    if (typeof window !== "undefined") {
      const storedPage = localStorage.getItem("currentPage");
      return storedPage ? parseInt(storedPage, 10) : 1;
    }
    return 1;
  });

  const [sortKey, setSortKey] = useState(() => {
    if (typeof window !== "undefined") {
      const storedSortKey = localStorage.getItem("sortKey");
      return storedSortKey || "default";
    }
    return "default";
  });

  const [itemsPerPage, setItemsPerPage] = useState(() => {
    if (typeof window !== "undefined") {
      const storedItemsPerPage = localStorage.getItem("itemsPerPage");
      return storedItemsPerPage ? parseInt(storedItemsPerPage, 10) : 10;
    }
    return 10;
  });

  useEffect(() => {
    const fetchDataAsync = async () => {
      try {
        const result = await fetchData({ pageNumber: currentPage, pageSize: itemsPerPage });
        console.log(result);
        setData(result);
      } catch (error) {
        console.error("Error fetching data:", error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchDataAsync();
  }, [currentPage, itemsPerPage]);

  useEffect(() => {
    if (typeof router.pathname === "string") {
      router.replace({
        pathname: router.pathname,
        query: { page: currentPage },
      });
    }
  }, [currentPage, router]);

  useEffect(() => {
    const pageQueryParam = router.query?.page;
    const newPage = pageQueryParam ? parseInt(pageQueryParam, 10) : 1;
    setCurrentPage(newPage);
  }, [router.query]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedPage = localStorage.getItem("currentPage");
      setCurrentPage(storedPage ? parseInt(storedPage, 10) : 1);

      const storedSortKey = localStorage.getItem("sortKey");
      setSortKey(storedSortKey || "default");

      const storedItemsPerPage = localStorage.getItem("itemsPerPage");
      setItemsPerPage(storedItemsPerPage ? parseInt(storedItemsPerPage, 10) : 10);
    }
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("currentPage", currentPage.toString());
      localStorage.setItem("sortKey", sortKey);
      localStorage.setItem("itemsPerPage", itemsPerPage.toString());
    }
  }, [currentPage, sortKey, itemsPerPage]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleCardClick = (idea) => {
    setSelectedIdea(idea);
  };

  const handleCloseDetail = () => {
    setSelectedIdea(null);
  };

  const handleSortChange = (value) => {
    setSortKey(value);
  };

  const getSortedData = () => {
    if (!data || !data.data) {
      return [];
    }

    switch (sortKey) {
      case "latest":
        return [...data.data].sort((a, b) => new Date(b.published_at) - new Date(a.published_at));
      case "oldest":
        return [...data.data].sort((a, b) => new Date(a.published_at) - new Date(b.published_at));
      default:
        return data.data;
    }
  };

  const sortedData = getSortedData();

  const handleItemsPerPageChange = (value) => {
    setItemsPerPage(value);
    setCurrentPage(1);
  };

  return (
    <>
      <NavbarComponent />
      <div className="relative mx-auto max-w-full">
        <div className="image-container relative">
          <img src="https://suitmedia.static-assets.id/storage/files/601/6.jpg" alt="Hero" className="w-full h-auto" />
        </div>
        <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center text-center text-white">
          <h1 className="text-7xl font-medium mb-4 hover:text-primary transition duration-300 ease-in-out">Ideas</h1>
          <p className="text-lg hover:text-primary transition duration-300 ease-in-out">Where all our great thing begin</p>
        </div>
      </div>
      {data && data.data ? (
        <div className="container mx-auto my-20">
          <div className="mx-32 flex justify-between">
            <div className="font-semibold">{`Showing ${data.meta.from} - ${data.meta.to} of ${data.meta.total}`}</div>
            <div className="gap-3 flex">
              <p className="text-base font-semibold">Show per page:</p>
              <Select value={itemsPerPage} onChange={handleItemsPerPageChange} style={{ width: 120, marginBottom: 16 }}>
                <Option value={10}>10</Option>
                <Option value={20}>20</Option>
                <Option value={50}>50</Option>
              </Select>
              <p className="text-base font-semibold">Sort by:</p>
              <Select value={sortKey} onChange={handleSortChange} style={{ width: 120, marginBottom: 16 }}>
                <Option value="default">Default</Option>
                <Option value="latest">Latest</Option>
                <Option value="oldest">Oldest</Option>
              </Select>
            </div>
          </div>

          <div className="flex flex-wrap justify-center">
            {sortedData.map((idea) => (
              <CardComponent key={idea.id} idea={idea} onClick={handleCardClick} />
            ))}
          </div>
          <div className="flex justify-center mt-5">
            <Pagination current={currentPage} total={data.meta.total} pageSize={10} onChange={handlePageChange} showSizeChanger={false} />
          </div>
        </div>
      ) : (
        <Skeleton active className="flex justify-center h-screen mt-20 pt-20 container mx-auto" />
      )}

      {selectedIdea && <CardDetail idea={selectedIdea} visible={!!selectedIdea} onClose={handleCloseDetail} />}
      <FooterComponent />
    </>
  );
}
