import React from "react";
import { Card } from "antd";
import Image from "next/image";

const CardComponent = ({ idea, onClick }) => {
  return (
    <Card key={idea.id} title={idea.title} style={{ width: 300, margin: "16px" }} onClick={() => onClick(idea)}>
      <Image alt={idea.title} src={idea.medium_image[0].url} width={500} height={500} style={{ objectFit: "cover" }} />
    </Card>
  );
};

export default CardComponent;
