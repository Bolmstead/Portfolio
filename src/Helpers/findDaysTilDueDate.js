export function findDaysTilDueDate(dueDate) {
  if (!dueDate) {
    return undefined;
  }

  let dueDateObj = new Date(dueDate)
  let currentDate = new Date();


  let difference =  dueDateObj.getTime() - currentDate.getTime()
  let differenceInDays = difference / (1000 * 3600 * 24)

  return Math.floor(differenceInDays)
}

