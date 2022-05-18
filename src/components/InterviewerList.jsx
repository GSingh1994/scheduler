import React, { useState } from 'react';
import './InterviewerList.scss';
import InterviewerListItem from './InterviewerListItem';

const InterviewerList = ({ interviewers, interviewer, setInterviewer }) => {
  // const [interviewer, setInterviewer] = useState(); //use id as state value

  const displayListItems = interviewers.map((item) => (
    <InterviewerListItem id={item.id} name={item.name} avatar={item.avatar} setInterviewer={setInterviewer} selected={item.id === interviewer} />
  ));

  return (
    <section className="interviewers">
      <h4 className="interviewers__header text--light">Interviewer</h4>
      <ul className="interviewers__list">{displayListItems}</ul>
    </section>
  );
};

export default InterviewerList;
