import React, { useState, useEffect } from 'react';
import { Title } from './Form.styled';
import PropTypes from 'prop-types';

const Filter = ({ value, onChange }) => {
  const [filterValue, setFilterValue] = useState(value || '');

  useEffect(() => {
    const storedFilterValue = localStorage.getItem('filterValue');
    if (storedFilterValue) {
      onChange(storedFilterValue);
      setFilterValue(storedFilterValue);
    }
  }, [onChange]);

  const handleSearch = (event) => {
    const newValue = event.target.value;
    setFilterValue(newValue);
    onChange(newValue);
    localStorage.setItem('filterValue', newValue);
  };

  return (
    <div>
      <Title>Search</Title>
      <input
        type="text"
        name="filter"
        value={filterValue}
        onChange={handleSearch}
        placeholder="Search by name"
      />
    </div>
  );
};

export default Filter;

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
