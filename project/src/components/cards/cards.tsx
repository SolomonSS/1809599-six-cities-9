import {Offer} from '../../types/types';
import {Fragment} from 'react';
import Card from '../card/card';

type CardsProps = {
  offers: Offer[],
  handleOnMouseOver?: (id: number| null) => void,
  mode: string
};

function Cards({offers, handleOnMouseOver, mode}: CardsProps) {


  return(
    <Fragment>
      {offers.map((details)=>(<Card key={details.id} offer ={details} handleOnMouseOver={handleOnMouseOver} mode={mode}/>))}
    </Fragment>);
}

export default Cards;
