import React from "react";
import Rectangle from "../../assets/images/Rectangle3.png";
import "./card.css";
export default function Card(props) {

const {CardData}=props;
console.log(CardData);
  return (
    <>
      {/* <h6 className='heading'>{props.title}</h6> */}
      <div className="container2 py-3">
        {/*   <img src={Rectangle} alt="card-image" />
            <h4 className='heading'>{props.heading}</h4>
            <p className='paragraph'>{props.description}</p>
            <a href="">{props.link}</a> */}
        {CardData.map((curItem) => {
          return (
            <>
          
              <div className="container3 mb-5">
                 
                <img src={curItem.image} alt="card-image" />
                <h4 className="heading">{curItem.title}</h4>
                <p className="paragraph">{curItem.description}</p>
                <a href={curItem.href}>click me</a>
               
              </div>
             
            </>
          );
        })}
      </div>
    </>
  );
}
