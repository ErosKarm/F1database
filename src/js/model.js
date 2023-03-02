import { findRace } from './helper';
import { getLocalTime, getLocalDate, getMonth, getDay } from './helper';

export const state = {
  race: {},
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
      time: data.time,
      date: getDay(data.date),
    },
    qualifying: {
      time: getLocalTime(data.Qualifying.date, data.Qualifying.time),
      date: getDay(data.Qualifying.date),
    },
    practiceThree: {
      time: data.ThirdPractice.time,
      date: getDay(data.ThirdPractice.date),
    },
    practiceTwo: {
      time: data.SecondPractice.time,
      date: getDay(data.SecondPractice.date),
    },
    practiceOne: {
      time: data.FirstPractice.time,
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
    console.log(races);

    state.race = createRaceObject(races[closest]);

    if (!res.ok) throw new Error(`${data.message}`);
  } catch (err) {
    throw err;
  }
};

console.log(state);
