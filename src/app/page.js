"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const fetchData = async () => {
  const url = "https://suitmedia-backend.suitdev.com/api/ideas?page[number]=1&page[size]=10&append[]=small_image&append[]=medium_image&sort=-published_at";

  try {
    const response = await fetch(url, {
      method: "GET", // or 'POST' if it's a POST request
      headers: {
        Accept: "application/json",
        // Add any other headers if required, e.g., authentication headers
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

export default function Home() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchDataAsync = async () => {
      const result = await fetchData();
      setData(result);
    };

    fetchDataAsync();
  }, []);

  return (
    <div>
      <h1>Next.js Page</h1>
      {data ? <pre>{JSON.stringify(data, null, 2)}</pre> : <p>Loading...</p>}
    </div>
  );
}
