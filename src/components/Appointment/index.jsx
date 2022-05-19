import React from 'react';
import './styles.scss';
import Header from './Header';
import Show from './Show';
import Empty from './Empty';

const Appointment = ({ time, id, interview }) => {
  return (
    <article className="appointment">
      <Header time={time} id={id} />
      {interview ? <Show student={interview.student} interviewer={interview.interviewer} /> : <Empty />}
    </article>
  );
};

export default Appointment;
