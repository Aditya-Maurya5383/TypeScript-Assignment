import React, { useState, useEffect } from 'react';
import '../Components/Dashboard'
import { Layout } from 'antd';
import 'antd/dist/antd.css';
import Cards from './Card';
import SideBar from './SideBar';
import Header from '../Components/Header';
const { Content } = Layout;

const Dashboard = () => {
    const [cardData, setCardData] = useState([])
    const [loading, setLoading] = useState(true)
    const [searchh, setNewsearch] = useState('')
    useEffect(() => {
        console.log("SS")
        let employeeDetail = JSON.parse(`${localStorage.getItem('employeeDetail')}`);
        setCardData(employeeDetail)
        setLoading(false)
    }, [loading])

    const refresh = () => {
        setLoading(true)
    }
    let employeeDetail = JSON.parse(`${localStorage.getItem('employeeDetail') || '[]'}`);
    let filtered = !searchh
        ? employeeDetail
        : employeeDetail.filter((card: any) =>
            card.name.toLowerCase().includes(searchh.toLowerCase())

        )
    return (
        <div className='sidenav-sec'>
            <Layout>

                <SideBar />

                <Content
                    className="site-layout-background"
                    style={{
                        padding: 24,
                        minHeight: 280,
                    }}
                >

                    <Header refresh={refresh} value={searchh} onChange={setNewsearch} />

                    <div className='Cards' >
                        {filtered.map((card: any, index: any) => {
                            return (
                                <div className='parentContainer' key={index} >
                                    <Cards
                                        index={index}
                                        name={card.name}
                                        designation={card.designation}
                                        Employee_details={card.Employee_details}
                                        refresh={refresh}
                                        id={card.id}
                                        img={card.img}
                                    />
                                </div>
                            )
                        })}
                    </div>
                </Content>
            </Layout>
        </div>
    )
}

export default Dashboard;