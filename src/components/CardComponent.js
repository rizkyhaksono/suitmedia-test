/* eslint-disable @next/next/no-img-element */
"use client";

import { useEffect, useState } from "react";
import { Card, Skeleton } from "antd";
import "./style/cardcomponent.css";

const CardComponent = ({ idea, onClick }) => {
  const [loading, setLoading] = useState(true);

  const formatPublishedDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString("en-US", options);
  };

  useEffect(() => {
    const delay = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(delay);
  }, []);

  return (
    <Card className="hover:bg-slate-100 hover:shadow-xl transition duration-300" key={idea.id} style={{ width: 300, margin: "20px" }} onClick={() => onClick(idea)}>
      {loading ? (
        <Skeleton active />
      ) : (
        <>
          <img alt={idea.title} src={idea.medium_image[0].url} style={{ objectFit: "cover", width: "100%", height: "200px", borderRadius: "10px" }} />
          <p className="font-normal text-lg mt-5">{formatPublishedDate(idea.published_at)}</p>
          <p className="font-bold text-2xl title">{idea.title}</p>
        </>
      )}
    </Card>
  );
};

export default CardComponent;
