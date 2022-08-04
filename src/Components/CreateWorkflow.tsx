import React, { useState } from 'react';
import { Input, Button, Modal, Form } from 'antd';
import { message, Upload, Row, Col } from 'antd';
import type { UploadChangeParam } from 'antd/es/upload';
import type { RcFile, UploadFile, UploadProps } from 'antd/es/upload/interface';
import 'antd/dist/antd.css';
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';


const { TextArea } = Input;
const CreateWorkflow = ({ refresh }: any) => {
  const [form] = Form.useForm()

  const [modal2Visible, setModal2Visible] = useState(false);
  const [employeeName, setEmployeeName] = useState('');
  const [designationVal, setDesignationVal] = useState('');
  const [employeeDetails, setEmployeeDetails] = useState('');
  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState<string>();


  const submitButton = () => {

    refresh();
    let employeeDetail = JSON.parse(`${localStorage.getItem('employeeDetail') || '[]'}`);

    const date = new Date()
    const time = date.getTime()
    let payload: any = {
      id: time,
      name: employeeName,
      designation: designationVal,
      Employee_details: employeeDetails,
      img: imageUrl
    }
    console.log("img", imageUrl)
    employeeDetail.push(payload)
    console.log(employeeDetail)
    localStorage.setItem('employeeDetail', JSON.stringify(employeeDetail));
    setModal2Visible(false)
    form.resetFields()
  }

  const handleCancel = () => {
    setModal2Visible(false);
  };

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



  const handleChange: UploadProps['onChange'] = (info: UploadChangeParam<UploadFile>) => {
    if (info.file.status === 'uploading') {
      setLoading(true);
      console.log(info.file.status)
      return;
    }
    if (info.file.status === 'done') {
      console.log(info.file.status)
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
      <div style={{ marginTop: 8 }}></div>
    </div>
  );


  return (
    <>

      <Col xs={24} sm={8} md={8} lg={8} xl={9}
        className='button'
        style={{
          textAlign: 'center', display: 'flex', alignItems: 'center', justifyContent: 'flex-end'
        }}>

        <Button type="primary" onClick={() => setModal2Visible(true)}>
          Create worflow
        </Button>

        <Modal
          title="Setup Employee"
          centered
          width={560}
          visible={modal2Visible}
          onOk={() => setModal2Visible(false)}
          onCancel={() => setModal2Visible(false)}
          footer={null}
        >
          <Row>
            <Col xs={24} sm={24} md={6} lg={6} xl={6}>

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
            <Col xs={24} sm={24} md={18} lg={18} xl={18}>

              <Form
                form={form}
                name="basic"
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 16 }}
                initialValues={{ remember: true }}
                autoComplete="off" >
                <div className='workflow-model'>
                  <div className='model-img'>

                  </div>
                  <div className='model-content'
                    style={{ display: 'flex', justifyContent: 'space-around' }}>
                    <div className='employee-details'>
                      <p style={{ marginTop: '-17px' }} >Employee Name</p>
                      <p style={{ marginTop: '25px' }} >Designation</p>
                      <p style={{ marginTop: '30px' }} >Employee Details </p>
                    </div>
                    <div>
                      <Form.Item
                        name="Employee_name"
                        rules={[{ required: true, message: 'The field required!' }]}
                      >
                        <Input
                          className='input'
                          name="Employee_name"
                          value={employeeName}
                          onChange={(value) => setEmployeeName(value.target.value)}
                        />
                      </Form.Item>

                      <Form.Item
                        name="designation"
                        rules={[{ required: true, message: 'The field required!' }]}
                      >
                        <Input
                          className='input'
                          size='large'
                          style={{ marginTop: '0px' }}
                          name="designation"
                          value={designationVal}
                          onChange={(value) => setDesignationVal(value.target.value)}
                        />
                      </Form.Item>
                      <Form.Item
                        name="Employee_details"
                        rules={[{ required: true, message: 'The field required!' }]}
                      >
                        <TextArea rows={4}
                          className="textareaa"
                          name="Employee_details"
                          value={employeeDetails}
                          onChange={(value) => setEmployeeDetails(value.target.value)}
                        />
                      </Form.Item>
                    </div>
                  </div>
                </div>

                <Button
                  style={{ border: '1px solid #2B78D4' }}
                  className='cancelBtn'
                  onClick={handleCancel}
                >Cancel</Button>
                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                  <Button
                    type="primary"
                    htmlType="submit"
                    className='saveBtn'
                    onClick={submitButton}>
                    Save
                  </Button>
                </Form.Item>
              </Form>
            </Col>
          </Row>
        </Modal>
      </Col>


    </>
  )
};

export default CreateWorkflow;