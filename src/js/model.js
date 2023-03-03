import { findRace } from './helper';
import { getLocalTime, getLocalDate, getMonth, getDay } from './helper';
import { curYear } from './config';

export const state = {
  race: {},
  winners: {},
};

const createRaceObject = function (data) {
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

    state.raceIndex = closest + 1;
    state.race = createRaceObject(races[closest]);

    if (!res.ok) throw new Error(`${data.message}`);
  } catch (err) {
    throw err;
  }
};

const createLastWinnerObject = function (data) {
  console.log(data);

  return {
    car: data.Constructor.name,
    firstName: data.Driver.givenName,
    lastName: data.Driver.familyName,
  };
};

export const loadWinners = async function () {
  try {
    // Get current year
    const curYear = new Date().getFullYear();
    state.winners.year = curYear - 1;

    // Get last year winner
    const res = await fetch(
      `https://ergast.com/api/f1/${curYear - 1}/results/1.json`
    );
    const data = await res.json();
    const races = Object.values(data)[0].RaceTable.Races;
    const raceIndex = races.map(e => e.raceName).indexOf(state.race.name);
    console.log(raceIndex);

    state.winners = createLastWinnerObject(races[0].Results[0]);

    if (!res.ok) throw new Error(`${data.message}`);
  } catch (err) {
    throw err;
  }
};
