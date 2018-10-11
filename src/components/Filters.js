import classNames from 'classnames';
import React, { Component } from 'react';
import slug from 'slug';

import FilterSelect from './FilterSelect';
import './Filters.scss';

import { goals } from '../config';

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' }
];

class Goal extends Component {
  render() {
    const { active, onClick } = this.props;
    const { activeIcon, inactiveIcon, name } = this.props.goal;
    return (
      <div className={classNames(
        'Filters-goal', 
        slug(name).toLowerCase(),
        { active }
      )} onClick={onClick}>
        <img
          className='Filters-goal-icon'
          src={active ? activeIcon : inactiveIcon}
          alt={name} />
        <div className='Filters-goal-name'>
          {name}
        </div>
      </div>
    );
  }
}


class Filters extends Component {
  updateGoals(goalName) {
    const goals = Object.assign({}, this.props.filters.goals);
    goals[goalName] = !goals[goalName];
    this.props.updateFilter('goals', goals);
  }

  render() {
    console.log(this.props);
    const { filters } = this.props;
    const filteredGoals = filters.goals;

    return (
      <div className='Filters'>
        <div className='Filters-goals'>
          <h2>Goal</h2>
          <div className='Filters-goal-pickers'>
            {goals.map(goal => (
              <Goal
                key={goal.name}
                goal={goal}
                active={filteredGoals[goal.name]}
                onClick={() => this.updateGoals(goal.name)}
              />
            ))}
          </div>
        </div>
        <div className='Filters-monitoring-status Filters-filter'>
          <h2 className='Filter-label'>Monitoring Status</h2>
          <div className='Filter-input'>
            <ul>
              <li>
                <span className='monitoring-status-icon status-active'></span>
                <label>Active</label>
              </li>
              <li>
                <span className='monitoring-status-icon status-continuous'></span>
                <label>Continuous</label>
              </li>
              <li>
                <span className='monitoring-status-icon status-non-active'></span>
                <label>Non-Active</label>
              </li>
            </ul>
          </div>
        </div>
        <div className='Filters-indicator Filters-filter'>
          <label className='Filter-label'>Indicator Category</label>
          <FilterSelect
            value={filters.indicatorCategory}
            onChange={(option) => {
              this.props.updateFilter('indicatorCategory', option);
            }}
            options={options}
          />
        </div>
        <div className='Filters-organization Filters-filter'>
          <label className='Filter-label'>Organization Name</label>
          <FilterSelect
            value={filters.organizationName}
            onChange={(option) => {
              this.props.updateFilter('organizationName', option);
            }}
            options={options}
          />
        </div>
      </div>
    );
  }
}

export default Filters;
