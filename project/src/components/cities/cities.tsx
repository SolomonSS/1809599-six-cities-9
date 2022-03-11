import {Link} from 'react-router-dom';
import {CitiesList} from '../../utils/const';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {changeCity} from '../../store/action';

function Cities() {
  const currentCity = useAppSelector((state)=>state.city);
  const dispatch = useAppDispatch();
  return (
    <section className="locations container">
      <ul className="locations__list tabs__list">
        {CitiesList.map((city) =>
          <li className="locations__item" key={city}>
            <Link className={`locations__item-link tabs__item ${currentCity === city ? 'tabs__item--active' : ''}`} to="#" onClick= {()=>
              dispatch(changeCity({city: city}))}
            >
              <span>{city}</span>
            </Link>
          </li>)}
      </ul>
    </section>);
}

export default Cities;
