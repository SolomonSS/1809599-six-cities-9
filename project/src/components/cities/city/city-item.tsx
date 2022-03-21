import {Link} from 'react-router-dom';

type Props = {
  city:string,
  activeCity: string,
  handleChangeCity: (cityName:string)=>void;
}

function CityItem ({city, activeCity, handleChangeCity}:Props):JSX.Element {
  const activeClass = activeCity === city ? 'tabs__item--active' : '';
  const onChangeCity = ()=>handleChangeCity(city);
  return (
    <li className="locations__item" key={city}>
      <Link className={`locations__item-link tabs__item ${activeClass}`} to="/" onClick={onChangeCity}>
        <span>{city}</span>
      </Link>
    </li>
  );
}
export default CityItem;