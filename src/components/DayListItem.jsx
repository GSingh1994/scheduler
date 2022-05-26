import React from 'react';
import classNames from 'classnames';
import './styles/DayListItem.scss';

const DayListItem = ({ name, spots, setDay, selected }) => {
  const dayClass = classNames('day-list__item', { 'day-list__item--selected': selected }, { 'day-list__item--full': !spots });
  const formatSpots = () => {
    if (spots === 0) {
      return `no spots remaining`;
    } else if (spots === 1) {
      return `${spots} spot remaining`;
    } else {
      return `${spots} spots remaining`;
    }
  };

  return (
    <li data-testid="day" onClick={() => setDay(name)} className={dayClass}>
      <h2 className="text--regular">{name}</h2>
      <h3 className="text--light">{formatSpots()}</h3>
    </li>
  );
};

export default DayListItem;
