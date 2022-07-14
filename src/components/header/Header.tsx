import './header.css';
import "antd/dist/antd.css";
import { Button, Modal, Row, Col,Input, } from 'antd';
import { SearchOutlined } from '@ant-design/icons'
import { useState } from 'react';
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import { message, Upload } from 'antd';
import type { UploadChangeParam } from 'antd/es/upload';
import type { RcFile, UploadFile, UploadProps } from 'antd/es/upload/interface';
const { TextArea } = Input;

const getBase64 = (img: RcFile, callback: (url: string) => void) => {
  const reader = new FileReader();
  reader.addEventListener('load', () => callback(reader.result as string));
  reader.readAsDataURL(img);
};

const beforeUpload = (file: RcFile) => {
  const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
  if (!isJpgOrPng) {
    message.error('You can only upload JPG/PNG file!');
  }
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    message.error('Image must smaller than 2MB!');
  }
  return isJpgOrPng && isLt2M;
};
export default function Header() {
  const [isModal, setIsModalVisible] = useState(false);
  const showModal = () => {
    setIsModalVisible(true);
  };
  const handleOk = () => {
    setIsModalVisible(false);
  };
  const handleCancel = () => {
    setIsModalVisible(false);
  };
  
  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState<string>();

  const handleChange: UploadProps['onChange'] = (info: UploadChangeParam<UploadFile>) => {
    if (info.file.status === 'uploading') {
      setLoading(true);
      return;
    }
    if (info.file.status === 'done') {
      // Get this url from response in real world.
      getBase64(info.file.originFileObj as RcFile, url => {
        setLoading(false);
        setImageUrl(url);
      });
    }
  };

  const uploadButton = (
    <div>
      {loading ? <LoadingOutlined /> : <PlusOutlined />}
      <div style={{ marginTop: 8 }}>Upload</div>
    </div>
  );
  

  return (
    <div className="header">
      <div className='content'>
        <h1>Workflows</h1>

        <div className='btn'>
          <SearchOutlined />
          <input type="search" placeholder="Search a Workflows" />
        </div>
      
        <Button type="primary" onClick={showModal}>Create a Workflow </Button>
        <Modal   className="modal" title="Setup Employee" visible={isModal} onOk={handleOk} footer={null} onCancel={handleCancel} >
          <Row>
            <Col span={8}>
              <Upload
                name="avatar"
                listType="picture-card"
                className="avatar-uploader"
                showUploadList={false}
                action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                beforeUpload={beforeUpload}
                onChange={handleChange}
              >
                {imageUrl ? <img src={imageUrl} alt="avatar" style={{ width: '100%' }} /> : uploadButton}
              </Upload>
            </Col>
            <Col span={6}>
              <p>Employee Name</p>
              <p>Designation</p>
              <p>Employee Details</p>
            </Col >
            <Col span={10}>
            {/* value={this.state.name}  */}
              <Input placeholder="" />
              <Input placeholder="" />
              
              <TextArea rows={4} />

            </Col>
          </Row>
          <Row>
            <span className='btn'>
               <button>Save</button>
               <button onClick={handleCancel}> Cancel</button>
            </span>
          </Row>
        </Modal>
      </div>
    </div>
  )
}
