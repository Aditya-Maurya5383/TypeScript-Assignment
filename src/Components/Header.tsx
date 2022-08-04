import '../Components/Dashboard.css'
import { Input, Row, Col } from 'antd';
import 'antd/dist/antd.css';
import { SearchOutlined } from '@ant-design/icons';
import CreateWorkflow from './CreateWorkflow';
const { TextArea } = Input;


const Header = ({ value, onChange, refresh }: any) => {

  return (
    <>
      <Row>
        <Col xs={24} sm={8} md={8} lg={8} xl={9}>
          <h2 >Workflows</h2>
        </Col>
        <Col xs={24} sm={8} md={8} lg={8} xl={6} style={{ textAlign: 'center' }}>
          <Input placeholder="Search" prefix={<SearchOutlined />} value={value} onChange={(e) => onChange(e.target.value)}></Input>
        </Col>
        <CreateWorkflow refresh={refresh} />
      </Row>

    </>
  )
};

export default Header;