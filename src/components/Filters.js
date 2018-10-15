import classNames from 'classnames';
import React, { Component } from 'react';
import slug from 'slug';

import FilterSelect from './FilterSelect';
import Tooltip from './Tooltip';
import './Filters.scss';

import { goals } from '../config';

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
      tooltipLeft: rect.x + (rect.width / 4),
      tooltipTop: rect.y + rect.height,
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
            text={tooltip}
          />
        ) : null}
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
    const { filters, indicators, organizations } = this.props;
    const filteredGoals = filters.goals;

    const organizationNamesOptions = organizations.map(name => ({
      label: name,
      value: name
    }));

    const indicatorCategoriesOptions = indicators.map(name => ({
      label: name,
      value: name
    }));

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
