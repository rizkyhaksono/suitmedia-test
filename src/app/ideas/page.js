"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Pagination, Card, Skeleton, Result, Button } from "antd";
import NavbarComponent from "../../components/NavbarComponent";
import CardComponent from "../../components/CardComponent";
import CardDetail from "../../components/CardDetail";
import fetchData from "@/utils/fetchData";

export default function IdeasPage() {
  const router = useRouter();
  const [data, setData] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [selectedIdea, setSelectedIdea] = useState(null);

  useEffect(() => {
    const fetchDataAsync = async () => {
      try {
        const result = await fetchData(currentPage);
        console.log(result);
        setData(result);
      } catch (error) {
        console.error("Error fetching data:", error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchDataAsync();
  }, [currentPage]);

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

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleCardClick = (idea) => {
    setSelectedIdea(idea);
  };

  const handleCloseDetail = () => {
    setSelectedIdea(null);
  };

  return (
    <>
      <NavbarComponent />
      {data && data.data ? (
        <div className="container mx-auto my-20">
          <div style={{ display: "flex", flexWrap: "wrap" }}>
            {data.data.map((idea) => (
              <CardComponent key={idea.id} idea={idea} onClick={handleCardClick} />
            ))}
          </div>
          <Pagination className="mt-5" current={currentPage} total={data.meta.last_page * 10} pageSize={10} onChange={handlePageChange} />
        </div>
      ) : (
        <Skeleton active className="flex justify-center h-screen mt-20 pt-20" />
      )}

      {selectedIdea && <CardDetail idea={selectedIdea} visible={!!selectedIdea} onClose={handleCloseDetail} />}
    </>
  );
}
