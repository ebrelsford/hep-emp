import React, { Component } from 'react';
import Select from 'react-select';

const selectStyles = {
  control: (base) => {
    return {
      ...base,
      '&:hover': {
        borderColor: 'transparent'
      },
      backgroundColor: '#F4F4F0',
      border: 'none',
      borderColor: 'transparent',
      borderRadius: 0,
      boxShadow: 'none',
      fontSize: '12px',
      height: '24px',
      minHeight: '24px',
      outline: 'none'
    };
  },
  indicatorSeparator: (base) => {
    return {
      ...base,
      display: 'none'
    };
  },
  option: (base) => {
    return {
      ...base,
      fontSize: '12px',
      padding: '2px'
    };
  },
  menu: (base) => {
    return {
      ...base,
      backgroundColor: '#F4F4F0',
      border: 'none',
      borderColor: 'transparent',
      borderRadius: 0,
      boxShadow: 'none',
      margin: 0
    };
  },
  clearIndicator: (base) => {
    return {
      ...base,
      height: '24px',
      padding: '2px'
    };
  },
  dropdownIndicator: (base) => {
    return {
      ...base,
      height: '24px',
      padding: '2px'
    };
  },
  input: (base) => {
    return {
      ...base,
      height: '24px'
    };
  },
  singleValue: (base) => {
    return {
      ...base,
      height: '20px'
    };
  },
  valueContainer: (base) => {
    return {
      ...base,
      height: '24px'
    };
  }
};

class FilterSelect extends Component {
  render() {
    const { onChange, options, value } = this.props;
    return (
      <Select
        className='Filter-input'
        isClearable={true}
        styles={selectStyles}
        value={value}
        onChange={onChange}
        options={options}
      />
    );
  }
}

export default FilterSelect;
