// src/components/Filter.jsx
import React from 'react';
import './Filter.css';

const Filter = ({ filters, onFilterChange, fromOptions, toOptions, onDateChange }) => {
  return (
    <div className="filters">
      <div>
        <h3>Departure</h3>
        {fromOptions.map((option, index) => (
          <label key={index}>
            <input
              type="checkbox"
              name="from"
              value={option}
              checked={filters.from.includes(option)}
              onChange={onFilterChange}
            />
            {option}
          </label>
        ))}
      </div>
      <div>
        <h3>Arrival</h3>
        {toOptions.map((option, index) => (
          <label key={index}>
            <input
              type="checkbox"
              name="to"
              value={option}
              checked={filters.to.includes(option)}
              onChange={onFilterChange}
            />
            {option}
          </label>
        ))}
      </div>
      <div>
        <input
          type="date"
          name="date"
          value={filters.date}
          onChange={onDateChange}
        />
      </div>
    </div>
  );
};

export default Filter;
