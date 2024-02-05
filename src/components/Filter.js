import React from 'react';
import { Title } from './Form.styled';
import PropTypes from 'prop-types';

class Filter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filterValue: this.props.value || '', 
    };
  }

  componentDidMount() {
    const storedFilterValue = localStorage.getItem('filterValue');
    if (storedFilterValue) {
      this.props.onChange(storedFilterValue);
      this.setState({ filterValue: storedFilterValue });
    }
  }

  handleSearch = (event) => {
    const newValue = event.target.value;
    this.setState({ filterValue: newValue });
    this.props.onChange(newValue);
    localStorage.setItem('filterValue', newValue);
  };

  render() {
    return (
      <div>
        <Title>Search</Title>
        <input
          type="text"
          name="filter"
          value={this.state.filterValue}
          onChange={this.handleSearch}
          placeholder="Search by name"
        />
      </div>
    );
  }
}

export default Filter;

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};