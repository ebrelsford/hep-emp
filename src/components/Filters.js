import classNames from 'classnames';
import React, { Component } from 'react';
import slug from 'slug';

import { filterPrograms, uniqueIndicators, uniqueOrganizations } from '../models/programs';
import FilterSelect from './FilterSelect';
import Tooltip from './Tooltip';
import './Filters.scss';

import { goals, monitoringStatuses } from '../config';

class Goal extends Component {
  constructor(props) {
    super(props);
    this.parentRef = React.createRef();
    this.state = {
      tooltipVisible: false
    };
  }

  onMouseOver() {
    const rect = this.parentRef.current.getBoundingClientRect();
    this.setState({
      tooltipLeft: rect.left + (rect.width / 4),
      tooltipTop: rect.top + rect.height,
      tooltipVisible: true
    });
  }

  onMouseOut() {
    this.setState({ tooltipVisible: false });
  }

  render() {
    const { active, onClick } = this.props;
    const { activeIcon, inactiveIcon, name, tooltip } = this.props.goal;
    const { tooltipLeft, tooltipTop, tooltipVisible } = this.state;

    return (
      <div
        className={classNames(
          'Filters-goal',
          slug(name).toLowerCase(),
          { active }
        )}
        onClick={onClick}
        onMouseOut={this.onMouseOut.bind(this)}
        onMouseOver={this.onMouseOver.bind(this)}
        ref={this.parentRef}
      >
        <img
          className='Filters-goal-icon'
          src={active ? activeIcon : inactiveIcon}
          alt={name} />
        <div className='Filters-goal-name'>
          {name}
        </div>
        {tooltipVisible && tooltip ? (
          <Tooltip
            left={tooltipLeft}
            top={tooltipTop}
          >
            {tooltip}
          </Tooltip>
        ) : null}
      </div>
    );
  }
}

class MonitoringStatus extends Component {
  constructor(props) {
    super(props);
    this.parentRef = React.createRef();
    this.state = {
      tooltipVisible: false
    };
  }

  onMouseOver() {
    const rect = this.parentRef.current.getBoundingClientRect();
    this.setState({
      tooltipLeft: rect.left + rect.width + 10,
      tooltipTop: rect.top - rect.height / 2 + 5,
      tooltipVisible: true
    });
  }

  onMouseOut() {
    this.setState({ tooltipVisible: false });
  }

  render() {
    const { active, label, name, onChange, tooltip } = this.props;
    const { tooltipLeft, tooltipTop, tooltipVisible } = this.state;

    return (
      <span
        className={classNames('monitoring-status', { active })}
        onMouseOut={this.onMouseOut.bind(this)}
        onMouseOver={this.onMouseOver.bind(this)}
        ref={this.parentRef}
      >
        <input type='checkbox'
          id={name}
          checked={active}
          onChange={onChange}
        />
        <label htmlFor={name}>
          <span className={classNames('monitoring-status-icon', `status-${name}`)}></span>
          {label}
        </label>

        {tooltipVisible && tooltip ? (
          <Tooltip
            left={tooltipLeft}
            orientation='left'
            top={tooltipTop}
          >
            {tooltip}
          </Tooltip>
        ) : null}
      </span>
    );
  }
}

class Filters extends Component {
  updateGoals(goalName) {
    const goals = Object.assign({}, this.props.filters.goals);
    goals[goalName] = !goals[goalName];
    if (goals[goalName]) {
      this.props.addGoalFilter(goalName);
    }
    else {
      this.props.removeGoalFilter(goalName);
    }
    this.props.updateFilter('goals', goals);
  }

  toggleMonitoringStatus(monitoringStatus) {
    let monitoringStatuses = [...this.props.filters.monitoringStatuses];
    if (monitoringStatuses.indexOf(monitoringStatus) >= 0) {
      monitoringStatuses = monitoringStatuses.filter(s => s !== monitoringStatus);
    }
    else {
      monitoringStatuses.push(monitoringStatus);
    }
    this.props.updateFilter('monitoringStatuses', monitoringStatuses);
  }

  render() {
    const { filters, programs, scrollToModalSection, showAboutModal, showAboutModalTab } = this.props;
    const filteredGoals = filters.goals;
    const filteredMonitoringStatuses = filters.monitoringStatuses;

    const selectedGoals = Object.keys(filteredGoals).filter(key => filteredGoals[key]);
    const filteredPrograms = filterPrograms(programs, selectedGoals, [], []);

    const organizationNamesOptions = uniqueOrganizations(filteredPrograms).map(name => ({
      label: name,
      value: name
    }));

    const indicatorCategoriesOptions = uniqueIndicators(filteredPrograms).map(name => ({
      label: name,
      value: name
    }));

    return (
      <div className='Filters'>
        <div className='Filters-goals'>
          <h2 className='Filter-goals-label'>Filter by Goal</h2>
          <div className='Filters-goal-pickers'>
            {goals.map(goal => (
              <Goal
                key={goal.name}
                goal={goal}
                active={filteredGoals[goal.filterValue]}
                onClick={() => this.updateGoals(goal.filterValue)}
              />
            ))}
          </div>
        </div>
        <div className='Filters-monitoring-status Filters-filter'>
          <h2 className='Filter-label'>Monitoring Status</h2>
          <div className='Filter-input'>
            <ul>
              {monitoringStatuses.map(monitoringStatus => (
                <li key={monitoringStatus.value}>
                  <MonitoringStatus
                    active={filteredMonitoringStatuses.indexOf(monitoringStatus.value) >= 0}
                    label={monitoringStatus.label}
                    onChange={() => this.toggleMonitoringStatus(monitoringStatus.value)}
                    name={monitoringStatus.value}
                    tooltip={monitoringStatus.tooltip}
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className='Filters-indicator Filters-filter'>
          <label className='Filter-label'>
            Indicator Category
            <button className='help-button' onClick={() => {
              showAboutModal();
              showAboutModalTab(1);
              scrollToModalSection('indicator-categories');
            }}>?</button>
          </label>
          <FilterSelect
            value={filters.indicatorCategory}
            onChange={(option) => {
              this.props.updateFilter('indicatorCategory', option);
            }}
            options={indicatorCategoriesOptions}
          />
        </div>
        <div className='Filters-organization Filters-filter'>
          <label className='Filter-label'>Organization Name</label>
          <FilterSelect
            value={filters.organizationName}
            onChange={(option) => {
              this.props.updateFilter('organizationName', option);
            }}
            options={organizationNamesOptions}
          />
        </div>
      </div>
    );
  }
}

export default Filters;
