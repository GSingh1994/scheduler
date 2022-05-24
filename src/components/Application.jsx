import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'components/Application.scss';
import DayList from './DayList';
import Appointment from './Appointment';
import { getAppointmentsForDay, getInterview, getInterviewersForDay } from '../helpers/selectors';

const Application = () => {
  const [state, setState] = useState({
    day: 'Monday',
    days: [],
    appointments: {},
    interviewers: {},
  });

  //update state after user books an interview
  const bookInterview = (id, interview) => {
    const appointment = {
      ...state.appointments[id],
      interview: { ...interview },
    };

    const appointments = {
      ...state.appointments,
      [id]: appointment,
    };

    // making put request to update our database and our state
    return axios
      .put(`/api/appointments/${id}`, { interview }) // prettier-ignore
      .then(() => setState((prev) => ({ ...prev, appointments })));
  };

  const cancelInterview = (id, interview) => {
    const appointment = {
      ...state.appointments[id],
      interview: null,
    };

    const appointments = {
      ...state.appointments,
      [id]: appointment,
    };

    //removing interview from our database and state
    return axios
      .delete(`/api/appointments/${id}`, { interview }) // prettier-ignore
      .then(() => setState((prev) => ({ ...prev, appointments })));
  };

  const dailyAppointments = getAppointmentsForDay(state, state.day);

  //get data from state and make list of all appointments for selected day
  const schedule = dailyAppointments.map((appointment) => {
    const interview = getInterview(state, appointment.interview);
    const interviewers = getInterviewersForDay(state, state.day);
    return (
      <Appointment
        key={appointment.id}
        id={appointment.id}
        time={appointment.time}
        interview={interview}
        interviewers={interviewers}
        bookInterview={bookInterview}
        cancelInterview={cancelInterview}
      />
    );
  });

  //change day on the sidebar
  const setDay = (day) => setState((prev) => ({ ...prev, day }));

  //set initial state at first load
  useEffect(() => {
    Promise.all([
      axios.get('/api/days'), // prettier-ignore
      axios.get('/api/appointments'),
      axios.get('/api/interviewers'),
    ]).then((all) => {
      setState((prev) => ({
        ...prev, // prettier-ignore
        days: all[0].data,
        appointments: all[1].data,
        interviewers: all[2].data,
      }));
    });
  }, []);

  return (
    <main className="layout">
      <section className="sidebar">
        <img className="sidebar--centered" src="images/logo.png" alt="Interview Scheduler" />
        <hr className="sidebar__separator sidebar--centered" />
        <nav className="sidebar__menu">
          <DayList days={state.days} value={state.day} onChange={setDay} />
        </nav>
        <img className="sidebar__lhl sidebar--centered" src="images/lhl.png" alt="Lighthouse Labs" />
      </section>
      <section className="schedule">
        {schedule}
        {/* last appointment of the day */}
        <Appointment key={dailyAppointments.length + 1} time="5pm" />
      </section>
    </main>
  );
};

export default Application;
