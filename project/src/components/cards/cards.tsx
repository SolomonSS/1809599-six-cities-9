import {Offer} from '../../types/types';
import {Fragment} from 'react';
import Card from '../card/card';

type CardsProps = {
  offers: Offer[],
  selectedOffer: number|null,
  handleOnMouseOver: (arg0: number) => void
};

function Cards({offers, selectedOffer, handleOnMouseOver}: CardsProps) {


  return(
    <Fragment>
      {offers.map((details)=>(<Card key={details.id} selectedOffer={selectedOffer} offer ={details} handleOnMouseOver={handleOnMouseOver}/>))}
    </Fragment>);
}

export default Cards;
