import moment from 'moment';
import * as countryNames from 'countries-and-timezones';

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

export const getLocalDate = function (date, time, country) {
  // Get country timezone
  const raceCountry = Object.values(countryNames.getAllCountries());
  let curTimeZone = raceCountry.find(
    countryID => countryID.name === country
  ).timezones;

  // Convert Z time to UTC time
  const utcTime = new Date(`${date} ${time}`);
  const value = convertTimeZone(utcTime, 'Asia/Qatar');
  const date2 = new Date(value);
  const time2 = date2.toLocaleTimeString(undefined, { hour12: false });

  return time2;
};

// Get shortened version MONTH
export const getMonth = function (date) {
  return new Date(date).toLocaleString([], { month: 'short' }).toUpperCase();
};

export const getDay = function (date) {
  return new Date(date).getDate();
};
