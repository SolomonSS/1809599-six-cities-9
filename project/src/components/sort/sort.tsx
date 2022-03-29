import {SortTypes} from '../../utils/const';
import SortItem from './sort-item/sort-item';
import {useState} from 'react';

type SortProps = {
  activeSortType: string,
  setSortType: (sortType: string)=>void;
};

function Sort({activeSortType, setSortType}: SortProps): JSX.Element {
  const [isShowMenu, setIsShowMenu] = useState(false);
  const handleSortMenuShow = () => setIsShowMenu(!isShowMenu);
  const sortMenuShowClass = isShowMenu ? 'places__options--opened' : '';
  return (
    <form className="places__sorting" action="#" method="get" data-testid={'Sort-component-hear'}>
      <span className="places__sorting-caption">Sort by</span>
      <span className="places__sorting-type" tabIndex={0} onClick={handleSortMenuShow}>{activeSortType}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul className={`places__options places__options--custom ${sortMenuShowClass}`}>
        {Object.values(SortTypes).map((sortType)=><SortItem key={sortType} activeSort={sortType} currentSort={sortType} handleClick={setSortType} handleSortMenuClick={handleSortMenuShow}/>)}
      </ul>
    </form>

  );
}

export default Sort;
