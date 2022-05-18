import React from 'react';
import DayListItem from './DayListItem';

const DayList = ({ days, day, setDay }) => {
  return (
    <ul>
      {days.map((item) => (
        <DayListItem key={item.id} name={item.name} spots={item.spots} selected={item.name === day} setDay={setDay} />
      ))}
    </ul>
  );
};

export default DayList;
