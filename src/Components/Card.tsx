import React from 'react';
import { Col, Row, Card, Input} from 'antd';
import 'antd/dist/antd.css';
import ViewDetails from './ViewDetails';
import '../Components/Dashboard.css'


const { TextArea } = Input;
type cardDetailstype = {
  index: any
  name: any
  designation: any
  Employee_details: any
  refresh: any
  id: any
  img: any

}
const Cards = (props: cardDetailstype) => {


  return (
    <>
      <Row>

        <Col xs={24} sm={24} md={24} lg={12} xl={8} >
          <div className="site-card-border-less-wrapper " style={{ borderRadius: '10px' }}
            key={props.index}
          >
            <Card style={{ width: 320 }} bodyStyle={{ borderRadius: '10px' }} className='card-widt'>
              <div style={{ display: 'flex' }} className='card-one'>

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
              <div className='hover-content' >
                <span className='hover-para'>This workflow is to enable an employee raise his leave request and to get it approved from his reporting manager</span><br></br>

                <ViewDetails
                  name={props.name}
                  designation={props.designation}
                  Employee_details={props.Employee_details}
                  refresh={props.refresh}
                  id={props.id}
                  img={props.img}
                />
              </div>
            </Card>
          </div>
        </Col>
      </Row>
    </>
  );

}

export default Cards;