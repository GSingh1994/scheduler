import React from 'react';
import PropTypes from 'prop-types';
import './InterviewerList.scss';
import InterviewerListItem from './InterviewerListItem';

const InterviewerList = ({ interviewers, value, onChange }) => {
  const displayListItems = interviewers.map((interviewer) => (
    <InterviewerListItem
      key={interviewer.id}
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

//checking proptypes
InterviewerList.prototype = {
  interviewers: PropTypes.array.isRequired,
};

export default InterviewerList;
