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
