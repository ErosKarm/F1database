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

  await model.loadWinners();
  // 3) Render Race Schedule
  pastWinnersView.render(model.state.winners);
};

controlRaceSchedule();
controlPastWinners();
