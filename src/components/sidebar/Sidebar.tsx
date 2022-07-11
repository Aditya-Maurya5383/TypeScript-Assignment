import './sidebar.css';
import img1 from "./img/1.png"
import img2 from "./img/2.png"
import img3 from "./img/3.png"
import img4 from "./img/4.png"
import img5 from "./img/5.png"
import img6 from "./img/6.png"
import img7 from "./img/7.png"
import img8 from "./img/8.png"
import img9 from "./img/9.png"

export default function Sidebar() {
  return (
    <div className="sidebar">

      <div className="header">
        <img src={img1} alt="" />
      </div>

      <div className="middle">
        <img src={img2} alt="" />
        <img src={img3} alt="" />
        <img src={img4} alt="" />
        <img src={img5} alt="" />
        <img src={img6} alt="" />
      </div>

      <div className="lower">
      <img src={img7} alt="" />
      <img src={img8} alt="" />
      <img src={img9} alt="" />
      </div>
    </div>
  )
}
