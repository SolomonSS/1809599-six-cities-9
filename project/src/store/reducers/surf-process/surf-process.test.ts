import {CitiesList, DEFAULT_CITY} from '../../../utils/const';
import {changeCity, setEmail, surfProcess} from './surf-process';
import {makeFakeReviews} from '../../../utils/mocks';

const review = makeFakeReviews(1);

describe('Surf process tests:',()=>{
  const state = {activeCity: DEFAULT_CITY, email:null, isSubmiting: false};
  it('Should change city:',  ()=> {
    const city = CitiesList[Math.random()*CitiesList.length];
    expect(surfProcess.reducer(state, changeCity(city)))
      .toEqual({activeCity: city, email:null, isSubmiting: false});
  });

  it('Should set email:', ()=>{
    expect(surfProcess.reducer(state, setEmail(review[0].user.name)))
      .toEqual({activeCity: DEFAULT_CITY, email:review[0].user.name, isSubmiting: false});
  });
});
