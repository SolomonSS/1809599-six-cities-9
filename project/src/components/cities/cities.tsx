import {CitiesList} from '../../utils/const';
import CityItem from './city/city-item';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {changeCity} from '../../store/reducers/surf-process/surf-process';

function Cities() {
  const {activeCity} = useAppSelector((({SURF}) => SURF));
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
