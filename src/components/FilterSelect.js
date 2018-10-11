import React, { Component } from 'react';
import Select from 'react-select';

const selectStyles = {
  control: (base) => {
    return {
      ...base,
      '&:hover': {
        borderColor: 'transparent'
      },
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
  option: (base) => {
    return {
      ...base,
      fontSize: '12px'
    };
  },
  menu: (base) => {
    return {
      ...base,
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
        styles={selectStyles}
        value={value}
        onChange={onChange}
        options={options}
      />
    );
  }
}

export default FilterSelect;
