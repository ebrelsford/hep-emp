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

export function getProgramsByGoal(programs, goal) {
  return programs.filter(program => program.goals.indexOf(goal) >= 0);
}

export function filterPrograms(programs, goals, indicators, organizations) {
  return programs.filter(program => {
    if (goals.length && program.goals.filter(goal => goals.indexOf(goal) >= 0).length === 0) {
      return false;
    }
    if (indicators.length && program.indicators.filter(indicator => indicators.indexOf(indicator) >= 0).length === 0) {
      return false;
    }
    if (organizations.length && program.organizations.filter(organization => organizations.indexOf(organization) >= 0).length === 0) {
      return false;
    }

    return true;
  });
}
