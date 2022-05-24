import { useState, useEffect } from 'react';
import axios from 'axios';

const useApplicationData = () => {
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

  return { state, setDay, bookInterview, cancelInterview };
};

export default useApplicationData;
