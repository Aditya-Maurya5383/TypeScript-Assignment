import { Modal, Row, Col, Input, Card } from 'antd';
import "./card.css";
import "antd/dist/antd.css";
import { useEffect, useState } from 'react';
import img2 from '../data/img/i.png';
import data from '../data/data'; 
// import Item from 'antd/lib/list/Item';
const { TextArea } = Input;


export default function DisplayCard() {
    const [isModal, setIsModalVisible] = useState(false);
    const [selectedItem, setSelectedItem] = useState<any>({});
    const showModal = (data: any) => {
        setIsModalVisible(true);
        setSelectedItem(data)
    };
    const handleOk = () => {
        setIsModalVisible(false);
    };
    const handleCancel = () => {
        setIsModalVisible(false);
    };

    const[objdata, setObjdata] = useState([]);

    useEffect(() =>{
        let empdetails= JSON.parse(`${localStorage.getItem('empdetails') || '[]'}`);
        setObjdata(empdetails);
        

    },[])
    
    
   const deleteTodo = (id:any) =>{
    let items = JSON.parse(`${localStorage.getItem('empdetails') || '[]'}`);
    items.splice(id,1);
    localStorage.setItem("empdetails", JSON.stringify(items))
    window.location.reload(); 
   }
    return (
        <>
            <div className="site-card-border-less-wrapper">
                {
                    objdata.map((item:any) => (
                        <Card className='box'>
                            <Row>
                                <Col span={4}>
                                    <img src={img2} alt="" />
                                </Col>
                                <Col span={20}>
                                    <div className='content'>
                                        <h3>{item.title}</h3>
                                        <p>{item.description}</p>
                                        <p>{item.content1}</p>
                                    </div>
                                    <div className="content2">
                                        <span>{data[4].content2}</span>
                                        <button onClick={() => showModal(item)}>View Details</button>
                                        <button onClick={()=> deleteTodo(item.id)}>Delete</button>
                                    </div>

                                </Col>
                            </Row>

                        </Card>



                    ))


                }

                <Modal className="modal" visible={isModal} onOk={handleOk} footer={null} onCancel={handleCancel} >
                    <Row>
                        <Col span={4}>
                            <img src={selectedItem.icon} alt="" />

                        </Col>

                        <Col span={20}>

                            <h3>{selectedItem.title}</h3>
                            <span>
                                <p>{selectedItem.description}</p>
                                <p>{selectedItem.content1}</p>
                            </span>
                            <Row>
                                <Col span={8}>
                                    <p>Employee Name</p>
                                    <p>Designation</p>
                                    <p>Employee Details</p>
                                </Col>
                                <Col span={16}>
                                    <Input placeholder="" value={selectedItem.title}/>
                                    <Input placeholder="" value={selectedItem.description} />
                                    <TextArea rows={4} value={selectedItem.content1} />
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





