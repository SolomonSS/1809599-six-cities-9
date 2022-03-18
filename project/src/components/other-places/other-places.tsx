import Cards from '../cards/cards';
import {Offer} from '../../types/types';

type Props = {
  offers: Offer[],
  handleOnMouseOver: (id: number| null) => void,
  mode: string
};

function OtherPlaces({offers, handleOnMouseOver, mode}:Props):JSX.Element{
  return(
    <div className="container">
      <section className="near-places places">
        <h2 className="near-places__title">Other places in the neighbourhood</h2>
        <div className="near-places__list places__list">
          <Cards offers={offers} handleOnMouseOver={handleOnMouseOver} mode={mode}/>
        </div>
      </section>
    </div>
  );
}

export default OtherPlaces;
