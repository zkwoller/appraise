import files from '@/assets';
import { Button, ImageViewer } from "antd-mobile";
import { useState } from "react";
const DocsPage = () => {
  const [visible, setVisible] = useState(false)
  return (
    <>
      <Button
        onClick={() => {
          setVisible(true)
        }}
      >
        显示图片
      </Button>
      <ImageViewer.Multi
        images={files}
        visible={visible}
        onClose={() => {
          setVisible(false)
        }}
      />
    </>
  );
};

export default DocsPage;
