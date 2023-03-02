import { findRace } from './helper';

export const state = {
  race: {},
};

const createRaceObject = function (data) {
  console.log(data);
  return {
    name: data.raceName,
    round: data.round,
    location: {
      latitude: data.Circuit.Location.lat,
      long: data.Circuit.Location.long,
      locality: data.Circuit.Location.locality,
      country: data.Circuit.Location.country,
    },
    raceDate: {
      time: data.time,
      data: data.date,
    },
    qualifying: {
      time: data.Qualifying.time,
      data: data.Qualifying.date,
    },
    practiceThree: {
      time: data.ThirdPractice.time,
      data: data.ThirdPractice.date,
    },
    practiceTwo: {
      time: data.SecondPractice.time,
      data: data.SecondPractice.date,
    },
    practiceOne: {
      time: data.FirstPractice.time,
      data: data.FirstPractice.date,
    },
  };
};

const loadRace = async function (url) {
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

loadRace('http://ergast.com/api/f1/2023.json');

console.log(state);
