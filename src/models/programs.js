import uniq from 'lodash.uniq';

/*
 * Pull indicators out of the full list of programs
 */
export function uniqueIndicators(programs) {
  const indicators = programs.reduce((currentIndicators, program) => {
    return currentIndicators.concat(program.indicators);
  }, []);
  return uniq(indicators)
    .sort()
    .filter(name => name !== '');
}

/*
 * Pull organizations out of the full list of programs
 */
export function uniqueOrganizations(programs) {
  const organizations = programs.reduce((currentOrgs, program) => {
    return currentOrgs.concat(program.organizations);
  }, []);
  return uniq(organizations)
    .sort()
    .filter(name => name !== '');
}

function getGoals(program) {
  return program.HEPgoal.split(',')
    .map(splitValue => splitValue.trim());
}

function getIndicators(program) {
  return program.IndicGrp.split(',')
    .map(splitValue => splitValue.trim());
}

function getOrganizations(program) {
  return program.OrgName.split(',')
    .map(splitValue => splitValue.trim());
}

/*
 * Add cleaned values to each program
 */
export function cleanPrograms(originalPrograms) {
  return originalPrograms.map(originalProgram => {
    return Object.assign({}, originalProgram, {
      goals: getGoals(originalProgram),
      indicators: getIndicators(originalProgram),
      organizations: getOrganizations(originalProgram)
    });
  });
}

export function getProgramsById(programs, id) {
  return programs.filter(program => program.ProgID === id);
}

export function getProgramsByGoals(programs, goals) {
  return programs.filter(program => {
    return program.goals.filter(goal => goals.indexOf(goal) >= 0).length > 0;
  });
}
