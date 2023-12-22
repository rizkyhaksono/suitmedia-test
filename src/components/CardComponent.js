"use client";

import { useEffect, useState } from "react";
import { Card, Skeleton } from "antd";
import Image from "next/image";

const CardComponent = ({ idea, onClick }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const delay = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(delay);
  }, []);

  return (
    <Card key={idea.id} title={idea.title} style={{ width: 300, margin: "16px" }} onClick={() => onClick(idea)}>
      {loading ? <Skeleton active /> : <Image alt={idea.title} src={idea.medium_image[0].url} width={500} height={500} style={{ objectFit: "cover" }} />}
    </Card>
  );
};

export default CardComponent;
