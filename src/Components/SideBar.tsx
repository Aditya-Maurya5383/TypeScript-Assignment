import { Layout, Menu} from 'antd';
import 'antd/dist/antd.css';
import images from './Image';
const { Sider } = Layout;


const SideBar=()=> {

  return (
    <div className='sidenav-sec'>
 
        <Sider className="NavBar"
          width={70}
          breakpoint="sm"
          collapsedWidth="0"
        >
          <div className="Logo">
            <img src={images.img1} />
          </div>
          <Menu

            theme="light"
            mode="inline"
            defaultSelectedKeys={["2"]}
            className="middleIcon"
            style={{ marginTop: "120px" }}
          >
            <Menu.Item>
              <img src={images.img2} />
            </Menu.Item>
            <Menu.Item>
              <img src={images.img3} />
            </Menu.Item>
            <Menu.Item>
              <img src={images.img4} className="one" />
            </Menu.Item>
            <Menu.Item>
              <img src={images.img5} />
            </Menu.Item>
            <Menu.Item>
              <img src={images.img6} />
            </Menu.Item>
          </Menu>

          <div className="bottomIcon">
            <img src={images.img7} width={25} />
            <img src={images.img8} width={50} style={{ marginLeft: '-12px' }} />
            <img src={images.img9} width={25} />
          </div>
        </Sider>
        
    </div>
  )
}

export default SideBar;