import React, { useState } from 'react';
import { Col, Row,  Button, Input, Modal, Form } from 'antd';
import 'antd/dist/antd.css';
import '../Components/Dashboard.css'


const { TextArea } = Input;
type cardDetailstype = {
    name: any
    designation: any
    Employee_details: any
    refresh:any
    id:any
    img:any
    
  }
const ViewDetails = (props: cardDetailstype) => {
        
     
         const [modal2Visible, setModal2Visible] = useState(false);
         const [employeeName, setEmployeeName] = useState(props.name);
         const [designationVal, setDesignationVal] = useState(props.designation);
         const [employeeDetails, setEmployeeDetails] = useState(props.Employee_details);
          
      
      const   handleDeletee =()=>{
        let employeeDetail = JSON.parse(`${localStorage.getItem('employeeDetail') || '[]'}`);

          for (let index = 0; index < employeeDetail.length; index++) {
              if(props.name === employeeDetail[index].name &&
                props.designation=== employeeDetail[index].designation){
  
                  employeeDetail = [
                    ...employeeDetail.slice(0, index),
                    ...employeeDetail.slice(index + 1)
                  ];
  
              }
          }

          localStorage.setItem('employeeDetail', JSON.stringify(employeeDetail));
          props.refresh()
      }

    
      const handleEditSubmit=()=>{
          
       let employeeDetail = JSON.parse(`${localStorage.getItem('employeeDetail') || '[]'}`);
     console.log("employeeDetail",employeeDetail)
       employeeDetail = employeeDetail.map((value:any)=>{
        if(value.name===props.name && 
          value. designation===props.designation 
          &&value.Employee_details===props.Employee_details){

          console.log("value.name",value.name)
          console.log("name",props.name )
          return{
            ...value,
            name:employeeName,  
            designation:designationVal,
            Employee_details:employeeDetails
          }
          
        }
        return value
       })
      
      localStorage.setItem('employeeDetail', JSON.stringify(employeeDetail));
      props.refresh()
      setModal2Visible(false);
    }
      
     
      const handleCancel = () => {
        setModal2Visible(false);
      };
  return (
    <>
     <Button type="primary" className='viewDetails' onClick={() => setModal2Visible(true)}>
                  View Details
                </Button>
                <Button onClick={ handleDeletee}>Delete</Button>
                <Modal
                  centered
                  visible={modal2Visible}
                  onOk={() => setModal2Visible(false)}
                  onCancel={() => setModal2Visible(false)}
                  footer={null}
                >
                  <div style={{ display: 'flex', paddingTop: '20px' }} className='card-one'>
                      <div style={{ marginRight: '30px' }}>
                         <img src={props.img} width={40} className='avatar'></img>
                      </div>
                      <div className='beforeHover'>
                         <span className='title'>{props.name}</span><br></br>
                         <span className='description'> {props.designation}</span><br></br>
                          <br></br>
                           <p className='content1' style={{ marginRight: '20px', marginTop: '-9px', color: '#5C83B1' }}>{props.Employee_details}</p>
                       </div>
                  </div>

                  <Row>
                    <Col xs={24} sm={24} md={18} lg={18} xl={18}>
                      <Form
                        name="basic"
                      
                        labelCol={{ span: 8 }}
                        wrapperCol={{ span: 16 }}
                        initialValues={{ remember: true }}
                        autoComplete="off" >
                        <div className='workflow-model'>
                           <div className='model-img'>
 
                          </div>
                          <div className='model-content'
                            style={{ display: 'flex', justifyContent: 'flex-end' }}>
                            <div className='employee-details'>
                              <p style={{ marginTop: '-17px' }}>Employee Name</p>
                              <p style={{ marginTop: '25px' }}>Designation</p>
                              <p style={{ marginTop: '30px' }}>Employee Details </p>
                            </div>
                            <div>

                            <Form.Item
                              
                              >
                              <Input
                                className='input'
                                name="Employee_name"
                                value={employeeName}
                                onChange={(e)=>setEmployeeName(e.target.value)}
                                />
                              </Form.Item>

                              <Form.Item
                      
                               >
                              <Input
                                className='input'
                                size='large'
                                style={{ marginTop: '0px' }}
                                name="designation"
                                value={designationVal}
                                onChange={(e)=>setDesignationVal(e.target.value)}
                                />
                              </Form.Item>


                              <TextArea rows={4}
                                className="textarea"
                                name="Employee_details"
                                value={employeeDetails}
                                onChange={(e)=>setEmployeeDetails(e.target.value)}
                              />
                            </div>
                          </div>
                        </div>
                        <Button
                          style={{ border: '1px solid #2B78D4' }}
                          className='cancelBtn'
                          onClick={handleCancel}
                          >
                          Cancel</Button>

                        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                          <Button
                           type="primary"
                           htmlType="submit"
                           className='saveBtn'
                           onClick={handleEditSubmit}
                          >
                            Edit
                          </Button>
                        </Form.Item>
                      </Form>
                    </Col>
                  </Row>
                </Modal>
    </>
  );

}

export default ViewDetails;