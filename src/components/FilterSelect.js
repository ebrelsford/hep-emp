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
      fontSize: '12px'
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
