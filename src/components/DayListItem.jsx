import React from 'react';

export default function DayListItem({ name, spots, setDay, selected }) {
  return (
    <li onClick={() => setDay(name)} selected={selected}>
      <h2 className="text--regular">{name}</h2>
      <h3 className="text--light">{spots} spots remaining</h3>
    </li>
  );
}
