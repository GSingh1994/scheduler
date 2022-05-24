import React from 'react';
import DayListItem from './DayListItem';

const DayList = ({ days, value, setDay }) => {
  return (
    <ul>
      {days.map((day) => (
        <DayListItem key={day.id} name={day.name} spots={day.spots} selected={day.name === value} setDay={setDay} />
      ))}
    </ul>
  );
};

export default DayList;
