import {Offer, PropsType} from "../../types/types";
import {Fragment, useState} from "react";
import Card from "../card/card";

const Cards = ({offers}: PropsType) =>{
  const offersList:Offer[] = offers.concat(offers);
  const [activeCard, setActiveCard] = useState(0);
  const onMouseOverHandler = (id:number):void=>{
    setActiveCard(id);
  }

  return(
    <Fragment>
      {offersList.map((details)=>(<Card offer ={details} onMouseOverHandler={onMouseOverHandler}/>))}
    </Fragment>);
}

export default Cards;
