import { csvParse } from 'd3-dsv';
import programsCsv from '../data/programs.csv';
import contentDescriptors from '../models/content';

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

export const showAboutModalTab = (index) => ({
  type: 'SHOW_ABOUT_MODAL_TAB',
  index
});

export const scrollToModalSection = (tabScrollSection) => ({
  type: 'SCROLL_TO_MODAL_SECTION',
  tabScrollSection
});

export const showAboutModal = () => ({
  type: 'SHOW_ABOUT_MODAL'
});

export const updateFilter = (name, value) => ({
  type: 'UPDATE_FILTER',
  name,
  value
});

export const addGoalFilter = (name) => ({
  type: 'ADD_GOAL_FILTER',
  name
});

export const removeGoalFilter = (name) => ({
  type: 'REMOVE_GOAL_FILTER',
  name
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
    return fetch(programsCsv)
      .then(response => response.text())
      .then((text) => dispatch(receivedPrograms(csvParse(text))));
  }
}

export const requestContent = () => ({
  type: 'REQUEST_CONTENT',
});

export const receiveContent = (content) => ({
  type: 'RECEIVE_CONTENT',
  content
});

export function fetchContent() {
  return function (dispatch) {
    dispatch(requestContent());

    const loaders = contentDescriptors.map(descriptor => (
      fetch(descriptor.url)
        .then(response => response.text())
    ));
    return Promise.all(loaders)
      .then((loadedContent) => {
        const mappedContent = {};
        loadedContent.forEach((markdown, i) => {
          mappedContent[contentDescriptors[i].name] = markdown;
        });
        dispatch(receiveContent(mappedContent));
      });
  }
}
