export function getAppointmentsForDay(state, day) {
  const getTodaysAppointments = () => {
    const currentDay = state.days.filter((d) => d.name === day);
    //edge case
    if (!currentDay[0]) {
      return [];
    }
    return currentDay[0].appointments;
  };

  return getTodaysAppointments().map((appointment) => state.appointments[appointment]);
}
