import React from 'react';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { changeCity } from '../Actions/weatherActions';

export default function SearchBar() {
  const dispatch = useDispatch();
  const [city, setCity] = useState('');

  const handleChange = ({ target }) => {
    setCity(target.value);
  };

  const handleSearch = () =>{ 
      dispatch(changeCity(city))
    };

  return (
    <div className="Search">
      <input
        type="text"
        className="Searchbar"
        placeholder="Search city"
        onChange={(e) => handleChange(e)}
      />
      <button
        onClick={() => {
          handleSearch();
        }}
      >
        Search
      </button>
    </div>
  );
}