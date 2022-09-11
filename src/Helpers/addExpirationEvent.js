import { calculateNextFmcsaFiling } from "./fmcsaFilingCalcs";
import moment from "moment";
import { v4 as uuidv4 } from "uuid";

export function addFMCSADeadlineEvent(dotNumber) {
  if (!dotNumber) {
    return undefined;
  }
  let calendarEvents = [];
  const nextFmcsaFilingDate = calculateNextFmcsaFiling(dotNumber);
  const fmcsaFilingDateEndOfDay = new Date(nextFmcsaFilingDate.toISOString());
  fmcsaFilingDateEndOfDay.setHours(23);
  fmcsaFilingDateEndOfDay.setMinutes(59);

  const newEvent = {
    id: uuidv4(),
    title: "FMCSA Filing Date",
    backgroundColor: "#DD4B39",
    start: nextFmcsaFilingDate.toISOString(),
    end: fmcsaFilingDateEndOfDay.toISOString(),
  };

  calendarEvents.push(newEvent);

  return calendarEvents;
}

// Returns user object with updated Calendar events to include the expiration event.
// expireDateObject parameter should be moment date object.
export function addExpirationEvent(
  user,
  title,
  backgroundColor,
  expireDateObject
) {
  let updatedUser = { ...user };
  let eventId = new Date().getTime();
  let eventEndDateTime = moment(expireDateObject._d.toISOString());

  expireDateObject._d.setHours(0);
  expireDateObject._d.setMinutes(0);
  eventEndDateTime.set({ hour: 23, minute: 59 });

  updatedUser.calendarEvents.push({
    id: eventId,
    title: title,
    backgroundColor: backgroundColor,
    start: expireDateObject._d.toISOString(),
    end: eventEndDateTime.toISOString(),
  });

  return updatedUser;
}
