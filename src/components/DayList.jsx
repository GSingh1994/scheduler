import React from 'react';
import DayListItem from './DayListItem';

const DayList = ({ days, day }) => {
  return (
    <ul>
      {days.map((item) => (
        <DayListItem key={item.id} name={item.name} spots={item.spots} selected={item.name === day} />
      ))}
    </ul>
  );
};

export default DayList;
