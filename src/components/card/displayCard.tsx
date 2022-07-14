import { Modal, Row, Col, Input, Card } from 'antd';
import "./card.css";
import "antd/dist/antd.css";
import { useState } from 'react';
import data from '../data/data';
const { TextArea } = Input;


export default function DisplayCard() {
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




    return (
        <>
            <div className="site-card-border-less-wrapper">
                {
                    data.map((item) => (
                        <Card className='box'>
                            <Row>
                                <Col span={4}>
                                    <img src={item.icon} alt="" />
                                </Col>
                                <Col span={20}>
                                    <div className='content'>
                                        <h3>{item.title}</h3>
                                        <p>{item.description}</p>
                                        <p>{item.content1}</p>
                                    </div>
                                    <div className="content2">
                                        <span>{item.content2}</span>

                                        <button onClick={showModal}>View Details</button>
                                        <button>Delete</button>

                                    </div>
                                </Col>
                            </Row>

                        </Card>



                    ))


                }
               
                
                        <Modal className="modal" visible={isModal} onOk={handleOk} footer={null} onCancel={handleCancel} >
                            <Row>
                                <Col span={4}>
                                    <img src={data[1].icon} alt="" />

                                </Col>

                                <Col span={20}>

                                    <h3>{data[1].title}</h3>
                                    <span>
                                        <p>{data[1].description}</p>
                                        <p>{data[1].content1}</p>
                                    </span>
                                    <Row>
                                        <Col span={8}>
                                            <p>Employee Name</p>
                                            <p>Designation</p>
                                            <p>Employee Details</p>
                                        </Col>
                                        <Col span={16}>
                                            <Input placeholder="" />
                                            <Input placeholder="" />
                                            <TextArea rows={4} />
                                        </Col>

                                    </Row>


                                </Col>
                            </Row>
                            <Row>
                                <span className='btnn'>
                                    <button>Edit</button>
                                    <button onClick={handleCancel}> Cancel</button>
                                </span>
                            </Row>
                        </Modal>
                
                
            </div>
        </>
    )
}





