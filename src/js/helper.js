import moment from 'moment';

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
