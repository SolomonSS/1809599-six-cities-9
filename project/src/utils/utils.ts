import {useAppSelector} from '../hooks';

function useFilter (currentCity:string){
  const offers = useAppSelector((state) => state.offers);
  return offers.filter((offer)=>offer.city.name === currentCity);
}

export default useFilter;
