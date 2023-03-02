import { AJAX } from './helper';
import * as model from './model';
import raceScheduleView from './views/raceScheduleView';
import pastWinnersView from './views/pastWinnersView';

const controlRaceSchedule = async function () {
  // 1) Render spinner
  raceScheduleView.renderSpinner();

  // 2) Load search results
  await model.loadRace('http://ergast.com/api/f1/2023.json');

  // 3) Render Race Schedule
  raceScheduleView.render(model.state.race);
};

const controlPastWinners = async function () {
  // 1) Render spinner
  pastWinnersView.renderSpinner();

  // 2) Load search results

  await model.loadWinners('http://ergast.com/api/f1/2023.json');

  // 3) Render Race Schedule
  // raceScheduleView.render(model.state.P);
};

controlRaceSchedule();
controlPastWinners();
