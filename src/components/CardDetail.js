import { useEffect, useState } from "react";
import { Modal, Button, Skeleton } from "antd";

const CardDetail = ({ idea, visible, onClose }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, [visible]);

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
      {loading ? <Skeleton active /> : <div dangerouslySetInnerHTML={{ __html: idea.content }} />}
    </Modal>
  );
};

export default CardDetail;
