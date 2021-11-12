import React from "react";
import Rectangle from "../../assets/images/Rectangle3.png";
import "./card.css";
export default function Card(props) {

const {CardData}=props;
console.log(CardData);
  return (
    <>
      <div className="container2">
        {CardData.map((curItem) => {
          return (
            
          
              <div className="container3 mb-5">
               
                <img src={curItem.image} alt="card-image" />
                <h4 className="heading">{curItem.title}</h4>
                <p className="paragraph">{curItem.description}</p>
                <a href={curItem.href}>click me</a>
               
              </div>
             
      
          );
        })}
      </div>
    </>
  );
}
