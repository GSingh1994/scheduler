import React from 'react';
import './InterviewerList.scss';
import InterviewerListItem from './InterviewerListItem';

const InterviewerList = ({ interviewers, value, onChange }) => {
  const displayListItems = interviewers.map((interviewer) => (
    <InterviewerListItem
      name={interviewer.name}
      avatar={interviewer.avatar}
      setInterviewer={() => onChange(interviewer.id)}
      selected={interviewer.id === value}
    />
  ));

  return (
    <section className="interviewers">
      <h4 className="interviewers__header text--light">Interviewer</h4>
      <ul className="interviewers__list">{displayListItems}</ul>
    </section>
  );
};

export default InterviewerList;
