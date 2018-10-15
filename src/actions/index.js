import { csvParse } from 'd3-dsv';

export const setClickedFeatures = (clickedFeatures) => ({
  type: 'SET_CLICKED_FEATURES',
  clickedFeatures
});

export const setMouseOverFeatures = (mouseOverFeatures) => ({
  type: 'SET_MOUSE_OVER_FEATURES',
  mouseOverFeatures
});

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
