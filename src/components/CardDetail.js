import React from "react";
import { Modal, Button } from "antd";

const CardDetail = ({ idea, visible, onClose }) => {
  return (
    <Modal
      title={idea.title}
      visible={visible}
      onCancel={onClose}
      footer={[
        <Button key="back" onClick={onClose}>
          Close
        </Button>,
      ]}
    >
      <div dangerouslySetInnerHTML={{ __html: idea.content }} />
    </Modal>
  );
};

export default CardDetail;
