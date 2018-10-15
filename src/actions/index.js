import { csvParse } from 'd3-dsv';

export const hideAboutModal = () => ({
  type: 'HIDE_ABOUT_MODAL'
});

export const showAboutModal = () => ({
  type: 'SHOW_ABOUT_MODAL'
});

export const updateFilter = (name, value) => ({
  type: 'UPDATE_FILTER',
  name,
  value
});

export const requestPrograms = () => ({
  type: 'REQUEST_PROGRAMS',
});

export const receivedPrograms = (data) => ({
  type: 'RECEIVE_PROGRAMS',
  csv: data
});

export function fetchPrograms() {
  return function (dispatch) {
    dispatch(requestPrograms());
    return fetch('/data/programs.csv')
      .then(response => response.text())
      .then((text) => dispatch(receivedPrograms(csvParse(text))));
  }
}
