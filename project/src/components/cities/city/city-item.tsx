import {useSelector} from 'react-redux';
import {getCity} from '../../../store/selectors';
import {useAppDispatch} from '../../../hooks';
import {Link} from 'react-router-dom';
import {changeCity} from '../../../store/action';

type Props = {
  city:string
}

function CityItem ({city}:Props):JSX.Element {
  const currentCity = useSelector(getCity);
  const dispatch = useAppDispatch();
  const setActive = currentCity === city ? 'tabs__item--active' : '';
  const changeStoreCity = () => dispatch(changeCity({city}));

  return (
    <li className="locations__item" key={city}>
      <Link className={`locations__item-link tabs__item ${setActive}`} to="/" onClick={() => {changeStoreCity();}}>
        <span>{city}</span>
      </Link>
    </li>
  );
}
export default CityItem;
