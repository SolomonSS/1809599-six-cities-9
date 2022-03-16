import {CitiesList} from '../../utils/const';
import CityItem from './city/city-item';

function Cities() {
  return (
    <section className="locations container">
      <ul className="locations__list tabs__list">
        {CitiesList.map((city) =>
          (<CityItem city={city} key={city}/>))}
      </ul>
    </section>);
}

export default Cities;
