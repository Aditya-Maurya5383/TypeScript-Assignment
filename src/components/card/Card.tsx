import Header from "../header/Header";

import "./card.css"

import DisplayCard from "./displayCard";
export default function Cards() {
  return (

    <div className="cards">
      <Header />
      <DisplayCard/>



    </div>

  )
}

/*
<div className="cards-box">
{data.map((item)=>(
<div>
 <h3>{item.id}</h3> 
  </div>
 ))
 }
</div>*/