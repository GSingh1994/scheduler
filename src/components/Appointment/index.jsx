import React, { useState } from 'react';
import './styles.scss';
import Header from './Header';
import Show from './Show';
import Empty from './Empty';
import Form from './Form';
import Status from './Status';
import Confirm from './Confirm';
import Error from './Error';
import useVisualMode from 'hooks/useVisualMode';

const Appointment = ({ time, id, interview, interviewers, bookInterview, cancelInterview }) => {
  const EMPTY = 'EMPTY';
  const SHOW = 'SHOW';
  const CREATE = 'CREATE';
  const SAVING = 'SAVING';
  const DELETING = 'DELETING';
  const CONFIRM = 'CONFIRM';
  const EDIT = 'EDIT';
  const ERROR_SAVE = 'ERROR_SAVE';
  const ERROR_DELETE = 'ERROR_DELETE';

  const { mode, transition, back } = useVisualMode(interview ? SHOW : EMPTY);

  const save = (name, interviewer) => {
    const interview = {
      student: name,
      interviewer,
    };
    transition(SAVING);
    bookInterview(id, interview)
      .then(() => transition(SHOW))
      .catch(() => transition(ERROR_SAVE, true));
  };

  const destroy = () => {
    transition(DELETING, true);
    cancelInterview(id, interview)
      .then(() => transition(EMPTY))
      .catch(() => transition(ERROR_DELETE, true));
  };

  const [currentInterview, setCurrentInterview] = useState({});
  const edit = (student, interviewer) => {
    setCurrentInterview({ student, interviewer: interviewer.id });
    transition(EDIT);
  };

  return (
    <article className="appointment">
      <Header time={time} id={id} />
      {mode === SHOW && <Show student={interview.student} interviewer={interview.interviewer} onDelete={() => transition(CONFIRM)} onEdit={edit} />}
      {mode === EMPTY && <Empty onAdd={() => transition(CREATE)} />}
      {mode === CREATE && <Form interviewers={interviewers} onCancel={back} onSave={save} />}
      {mode === EDIT && <Form interviewers={interviewers} {...currentInterview} onCancel={back} onSave={save} />}
      {mode === SAVING && <Status message={'Saving'} />}
      {mode === DELETING && <Status message={'Deleting'} />}
      {mode === CONFIRM && <Confirm message={'Deleting'} onConfirm={destroy} onCancel={back} />}
      {mode === ERROR_SAVE && <Error message={'Error occured'} onClose={back} />}
      {mode === ERROR_DELETE && <Error message={'Error occured'} onClose={back} />}
    </article>
  );
};

export default Appointment;
