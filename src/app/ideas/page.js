"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Pagination, Card } from "antd";
import NavbarComponent from "../../../component/NavbarComponent";

const fetchData = async (pageNumber = 1) => {
  const pageSize = 10;
  const url = `https://suitmedia-backend.suitdev.com/api/ideas?page[number]=${pageNumber}&page[size]=${pageSize}&append[]=small_image&append[]=medium_image&sort=-published_at`;

  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(`Request failed with status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error.message);
    return null;
  }
};

export default function IdeasPage() {
  const router = useRouter();
  const [data, setData] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const fetchDataAsync = async () => {
      const result = await fetchData(currentPage);
      console.log(result);
      setData(result);
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

  return (
    <>
      <NavbarComponent />
      {data && data.data ? (
        <div>
          <div style={{ display: "flex", flexWrap: "wrap" }}>
            {data.data.map((idea) => (
              <Card key={idea.id} title={idea.title} style={{ width: 300, margin: "16px" }}>
                <Image alt={idea.title} src={idea.medium_image[0].url} width={100} height={100} style={{ objectFit: "cover" }} />
                <div dangerouslySetInnerHTML={{ __html: idea.content }} />
              </Card>
            ))}
          </div>
          <Pagination current={currentPage} total={data.meta.last_page * 10} pageSize={10} onChange={handlePageChange} />
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
}
