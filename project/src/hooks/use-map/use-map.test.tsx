import {renderHook} from "@testing-library/react-hooks";
import useMap from "./use-map";

const rootElement = document.createElement('div');

const fakeRef = {
  all: [],
  current: rootElement,
};

const fakeCity = {
  location: {
    latitude: 10,
    longitude: 20,
    zoom: 10,
  },
  name: 'Name',
};

describe('Hook: useMap ',()=>{
  it('should return map:',()=>{
    const {result} = renderHook(()=>
      useMap(fakeRef, fakeCity));

    expect(result.current).toBeInstanceOf(Map);
    expect(result.current?.options).toEqual(fakeCity);
  });
});
