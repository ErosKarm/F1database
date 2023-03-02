import { findRace } from './helper';
import { getLocalTime, getLocalDate, getMonth, getDay } from './helper';

export const state = {
  race: {},
  raceIndex: 0,
  winners: {},
};

const createRaceObject = function (data) {
  console.log(data);
  return {
    name: data.raceName,
    round: data.round,
    month: getMonth(data.date),
    location: {
      latitude: data.Circuit.Location.lat,
      long: data.Circuit.Location.long,
      locality: data.Circuit.Location.locality,
      country: data.Circuit.Location.country,
    },
    raceDate: {
      time: getLocalDate(data.date, data.time, data.Circuit.Location.country),
      date: getDay(data.date),
    },
    qualifying: {
      time: getLocalDate(
        data.Qualifying.date,
        data.Qualifying.time,
        data.Circuit.Location.country
      ),
      date: getDay(data.Qualifying.date),
    },
    practiceThree: {
      time: getLocalDate(
        data.ThirdPractice.date,
        data.ThirdPractice.time,
        data.Circuit.Location.country
      ),
      date: getDay(data.ThirdPractice.date),
    },
    practiceTwo: {
      time: getLocalDate(
        data.SecondPractice.date,
        data.SecondPractice.time,
        data.Circuit.Location.country
      ),
      date: getDay(data.SecondPractice.date),
    },
    practiceOne: {
      time: getLocalDate(
        data.FirstPractice.date,
        data.FirstPractice.time,
        data.Circuit.Location.country
      ),
      date: getDay(data.FirstPractice.date),
    },
  };
};

export const loadRace = async function (url) {
  try {
    const res = await fetch(url);
    const data = await res.json();

    const races = Object.values(data)[0].RaceTable.Races;

    const closest = findRace(races);
    state.race = createRaceObject(races[closest]);

    if (!res.ok) throw new Error(`${data.message}`);
  } catch (err) {
    throw err;
  }
};

export const loadWinners = async function (raceURL) {
  try {
    // Get race INDEX
    const res = await fetch(raceURL);
    const data = await res.json();
    const races = Object.values(data)[0].RaceTable.Races;
    const closest = findRace(races);

    // Get last driver

    const curDate = new Date().getFullYear();
    console.log(curDate);

    const res2 = await fetch(
      `https://ergast.com/api/f1/2022/results.json?limit=1000.`
    );
    const data2 = await res2.json();

    console.log(data2);

    if (!res.ok) throw new Error(`${data.message}`);
  } catch (err) {
    throw err;
  }
};
