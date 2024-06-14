import { DateTime } from 'luxon';

export const fullDateUtil = (date: string): DateTime | string => {
  return date ? DateTime.fromISO(date).toFormat('LLL dd, yyyy') : '';
};

export const fullDateWithDayUtil = (date: string): DateTime | string => {
  return date ? DateTime.fromISO(date).toFormat('ccc - LLL dd, yyyy') : '';
};

export const isoDateFormatUtil = (date: string): DateTime | string => {
  return date ? DateTime.fromISO(date) : '';
};
