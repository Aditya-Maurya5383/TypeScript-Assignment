import "antd/dist/antd.css"
import { Card, Row, Col } from 'antd';

import data from '../data/data';
import "./card.css";

export default function DisplayCard() {
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
                                        <button>View Details</button>
                                    </div>
                                </Col>
                            </Row>
                        </Card>
                    ))
                }

            </div>
        </>
    )
}
