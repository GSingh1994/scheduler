export function getAppointmentsForDay(state, day) {
  const currentDay = state.days.find((d) => d.name === day);
  if (!currentDay) return [];
  return currentDay.appointments.map((appointment) => state.appointments[appointment]);
}

export function getInterviewersForDay(state, day) {
  const currentDay = state.days.find((d) => d.name === day);
  if (!currentDay) return [];
  return currentDay.interviewers.map((interviewer) => state.interviewers[interviewer]);
}

export function getInterview(state, interview) {
  if (!interview) return null;
  return { student: interview.student, interviewer: state.interviewers[interview.interviewer] };
}
