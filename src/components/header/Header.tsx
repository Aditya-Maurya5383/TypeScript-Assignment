import './header.css';
import "antd/dist/antd.css";
import { Button } from 'antd';
import {SearchOutlined} from '@ant-design/icons'

export default function Header() {
  return (
    <div className="header">
      <div className='content'>
        <h1>Workflows</h1>

        <div className='btn'>
        <SearchOutlined />  
            <input type="search" placeholder="Search a Workflows" />
        </div>
        
        <Button type="primary">Create a Workflow </Button>
      </div>
    </div>
  )
}
