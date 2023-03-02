import { AJAX } from './helper';
import * as model from './model';
import raceScheduleView from './views/raceScheduleView';

const controlRaceSchedule = async function () {
  // 1) Render spinner
  raceScheduleView.renderSpinner();

  // 2) Load search results
  await model.loadRace('http://ergast.com/api/f1/2023.json');

  // 3) Render Race Schedule
  raceScheduleView.render(model.state.race);
};

controlRaceSchedule();

console.log(new Date('2011-06-29 16:52:48.000Z'));
