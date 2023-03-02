import moment from 'moment';
import * as country from 'countries-and-timezones';

export const findRace = function (races) {
  const curDate = moment([
    new Date().getFullYear(),
    new Date().getMonth(),
    new Date().getDate(),
  ]);

  let index = 0;
  let closest = 9999;

  const findDifference = races.forEach((race, i) => {
    let getDateTime = new Date(race.date);

    let raceDate = moment([
      getDateTime.getFullYear(),
      getDateTime.getMonth(),
      getDateTime.getDate(),
    ]);

    if (raceDate.diff(curDate, 'days') < closest) {
      console.log('its smaller');
      closest = raceDate.diff(curDate, 'days');
      index = i;
    }

    // console.log(race.date, i);
  });
  return index;
};

const convertTimeZone = function (date, timezone) {
  return new Date(
    (typeof date === 'string' ? new Date(date) : date).toLocaleString('en-US', {
      timeZone: timezone,
    })
  );
};

export const getLocalTime = function (date, time) {
  const utcTime = new Date(`${date} ${time}`);
  console.log(utcTime);
  const value = convertTimeZone(utcTime, 'Asia/Bahrain');
  console.log(value.toLocaleTimeString());
};

export const getLocalDate = function (date, time) {
  console.log(new Date(date));
};

// Get shortened version MONTH
export const getMonth = function (date) {
  return new Date(date).toLocaleString([], { month: 'short' });
};

export const getDay = function (date) {
  return new Date(date).getDate();
};
