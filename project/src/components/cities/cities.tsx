import {CitiesList} from '../../utils/const';
import CityItem from './city-item/city-item';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {changeCity} from '../../store/reducers/surf-process/surf-process';
import {useCallback} from 'react';

function Cities() {
  const {activeCity} = useAppSelector((({SURF}) => SURF));
  const dispatch = useAppDispatch();
  const handleChange = useCallback((city: string)=> {
    dispatch(changeCity({city}));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);
  return (
    <section className="locations container">
      <ul className="locations__list tabs__list">
        {CitiesList.map((city) =>
          (<CityItem city={city} activeCity={activeCity} handleChangeCity={handleChange} key={city}/>))}
      </ul>
    </section>);
}

export default Cities;
