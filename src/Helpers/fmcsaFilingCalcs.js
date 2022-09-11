import moment from 'moment';

export function calculateNextFmcsaFiling(num) {
  if (!num) {
    return undefined;
  }

  let currentDate = new Date();
  currentDate.setHours(0, 0, 0, 0);

  const currentYear = currentDate.getFullYear();
  const monthDigit = parseInt(num[num.length - 1]);
  const yearDigit = parseInt(num[num.length - 2]);

  let filingMonth;
  if (monthDigit === 0) {
    filingMonth = 9;
  } else {
    filingMonth = monthDigit - 1;
  }

  let nextFilingYear;
  if (currentYear % 2 == yearDigit % 2) {
    let tempDate = new Date(currentYear, filingMonth);
    if (tempDate < currentDate) {
      nextFilingYear = currentYear + 2;
    } else {
      nextFilingYear = currentYear;
    }
  } else {
    nextFilingYear = currentYear + 1;
  }

  return new Date(nextFilingYear, filingMonth);
}

export function calculateLastFilingYear(date) {
  if (!date) {
    return undefined;
  }
  return date.getFullYear() - 2;
}
