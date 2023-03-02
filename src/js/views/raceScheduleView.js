import View from './View';

class raceScheduleView extends View {
  _parentElement = document.querySelector('.box__schedule');
  _errorMessage = 'Failed to fetch';

  _generateMarkup() {
    return `
     <h2 class="box__title">SCHEDULE</h2>
    <div class="box__timings">
      <button class="box--local">LOCAL</button>
      <button class="box--track">TRACK</button>
    </div>

    <div>
      <span class="box__date">${this._data.practiceOne.date} ${this._data.month}</span>
      <span class="box__practice">Practice 1</span>
    </div>
    <span>${this._data.practiceOne.time}</span>
    <div>
      <span class="box__date">${this._data.practiceTwo.date} ${this._data.month}</span>
      <span class="box__practice">Practice 2</span>
    </div>
    <span>${this._data.practiceTwo.time}</span>
    <div>
      <span class="box__date">${this._data.practiceThree.date} ${this._data.month}</span>
      <span class="box__practice">Practice 3</span>
    </div>
    <span>${this._data.practiceThree.time}</span>
    <div>
      <span class="box__date">${this._data.qualifying.date} ${this._data.month}</span>
      <span class="box__practice">Qualifying</span>
    </div>
    <span>${this._data.qualifying.time}</span>
    <div>
      <span class="box__date">${this._data.raceDate.date} ${this._data.month}</span>
      <span class="box__practice">Race</span>
    </div>
    <span>${this._data.raceDate.time}</span>
    
    `;
  }
}

export default new raceScheduleView();
