import {ActiveSortClass} from '../../../utils/const';
import React from 'react';

type SortItemProps = {
  activeSort: string,
  currentSort: string,
  handleClick: (sortType: string)=>void,
  handleSortMenuClick: ()=>void;
}

function SortItem({activeSort, currentSort, handleClick, handleSortMenuClick}:SortItemProps):JSX.Element{
  const classActive = activeSort === currentSort? ActiveSortClass : '';
  return (
    <li className={`places__option ${classActive}`} onClick={()=>handleClick(currentSort)} onClickCapture={handleSortMenuClick} tabIndex={0}>{currentSort}</li>
  );
}

export default React.memo(SortItem);
