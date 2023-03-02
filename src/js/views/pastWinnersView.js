import View from './View';

class pastWinnersView extends View {
  _parentElement = document.querySelector('.box-nogrid');
  _errorMessage = 'Failed to fetch';

  _generateMarkup() {
    return `
    <h2 class="box__title">PAST WINNERS</h2>

            <div class="past-winners-box-1">
              <span>2021</span>
              <span>Max Verstappen</span>
              <span>RED BULL</span>
            </div>
            <div class="past-winners-box-1">
              <span>2021</span>
              <span>Max Verstappen</span>
              <span>RED BULL</span>
            </div>
            <div class="past-winners-box-1">
              <span>2021</span>
              <span>Max Verstappen</span>
              <span>RED BULL</span>
            </div>
      `;
  }
}

export default new pastWinnersView();
