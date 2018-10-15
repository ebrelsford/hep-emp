import uniq from 'lodash.uniq';

/*
 * Pull indicators out of the full list of programs
 */
export function uniqueIndicators(programs) {
  let indicatorCategories = [];
  programs
    .map(program => program.IndicGrp)
    .forEach(value => {
      const splitValues = value.split(',');
      indicatorCategories = indicatorCategories.concat(splitValues.map(splitValue => {
        return splitValue.trim();
      }));
    });
  return uniq(indicatorCategories)
    .sort()
    .filter(name => name !== '');
}

/*
 * Pull organizations out of the full list of programs
 */
export function uniqueOrganizations(programs) {
  let organizations = [];
  programs
    .map(program => program.OrgName)
    .forEach(value => {
      const splitValues = value.split(',');
      organizations = organizations.concat(splitValues.map(splitValue => {
        return splitValue.trim();
      }));
    });
  return uniq(organizations)
    .sort()
    .filter(name => name !== '');
}

export function getProgramsById(programs, id) {
  return programs.filter(program => program.ProgID === id);
}
