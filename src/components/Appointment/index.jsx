import React from 'react';
import './styles.scss';
import Header from './Header';
import Show from './Show';
import Empty from './Empty';
import Form from './Form';
import useVisualMode from 'hooks/useVisualMode';

const Appointment = ({ time, id, interview, interviewers }) => {
  const EMPTY = 'EMPTY';
  const SHOW = 'SHOW';
  const CREATE = 'CREATE';

  const { mode, transition, back } = useVisualMode(interview ? SHOW : EMPTY);

  return (
    <article className="appointment">
      <Header time={time} id={id} />
      {mode === SHOW && <Show student={interview.student} interviewer={interview.interviewer} />}
      {mode === EMPTY && <Empty onAdd={() => transition(CREATE)} />}
      {mode === CREATE && <Form interviewers={interviewers} onCancel={back} />}
    </article>
  );
};

export default Appointment;
