import {CitiesList} from '../../utils/const';
import CityItem from './city/city-item';
import {useSelector} from 'react-redux';
import {getCity} from '../../store/selectors';
import {useAppDispatch} from '../../hooks';
import {changeCity} from '../../store/action';

function Cities() {
  const activeCity = useSelector(getCity);
  const dispatch = useAppDispatch();
  const handleChangeCity = (city:string) => dispatch(changeCity({city}));
  return (
    <section className="locations container">
      <ul className="locations__list tabs__list">
        {CitiesList.map((city) =>
          (<CityItem city={city} activeCity={activeCity} handleChangeCity={handleChangeCity} key={city}/>))}
      </ul>
    </section>);
}

export default Cities;
