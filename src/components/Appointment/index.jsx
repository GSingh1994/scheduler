import React from 'react';
import './styles.scss';
import Header from './Header';
import Show from './Show';
import Empty from './Empty';
import Form from './Form';
import Status from './Status';
import useVisualMode from 'hooks/useVisualMode';

const Appointment = ({ time, id, interview, interviewers, bookInterview }) => {
  const EMPTY = 'EMPTY';
  const SHOW = 'SHOW';
  const CREATE = 'CREATE';
  const SAVING = 'SAVING';

  const { mode, transition, back } = useVisualMode(interview ? SHOW : EMPTY);

  const save = (name, interviewer) => {
    const interview = {
      student: name,
      interviewer,
    };
    transition(SAVING);
    bookInterview(id, interview).then(() => transition(SHOW));
  };
  return (
    <article className="appointment">
      <Header time={time} id={id} />
      {mode === SHOW && <Show student={interview.student} interviewer={interview.interviewer} />}
      {mode === EMPTY && <Empty onAdd={() => transition(CREATE)} />}
      {mode === CREATE && <Form interviewers={interviewers} onCancel={back} onSave={save} />}
      {mode === SAVING && <Status message={'Saving'} />}
    </article>
  );
};

export default Appointment;
