import {Offer} from '../../types/types';
import {Fragment} from 'react';
import Card from '../card/card';

type CardsProps = {
  offers: Offer[],
  selectedOffer: number|null,
  handleOnMouseOver: (arg0: number) => void,
  mode: string
};

function Cards({offers, selectedOffer, handleOnMouseOver, mode}: CardsProps) {


  return(
    <Fragment>
      {offers.map((details)=>(<Card key={details.id} selectedOffer={selectedOffer} offer ={details} handleOnMouseOver={handleOnMouseOver} mode={mode}/>))}
    </Fragment>);
}

export default Cards;
