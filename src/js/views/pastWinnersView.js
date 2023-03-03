import View from './View';

class pastWinnersView extends View {
  _parentElement = document.querySelector('.box-nogrid');
  _errorMessage = 'Failed to fetch';

  _getYear() {
    return new Date().getFullYear();
  }

  _generateMarkup() {
    return `
    <h2 class="box__title">PAST WINNERS</h2>

            <div class="past-winners-box-1">
              <span>${this._getYear() - 1}</span>
              <span>${this._data.firstName} ${this._data.lastName}</span>
              <span>${this._data.car.toUpperCase()}</span>
            </div>
      `;
  }
}

export default new pastWinnersView();
