import {Offer, PropsType} from '../../types/types';
import {Fragment, useState} from 'react';
import Card from '../card/card';

function Cards({offers}: PropsType) {
  const offersList: Offer[] = offers.concat(offers);
  const [activeCard, setActiveCard] = useState(0);

  const handleOnMouseOver = (id:number):void=>{
    setActiveCard(id);
  };

  return(
    <Fragment>
      {offersList.map((details)=>(<Card key={details.id} offer ={details} handleOnMouseOver={handleOnMouseOver}/>))}
    </Fragment>);
}

export default Cards;
