import React from 'react';

const SearchBar = (props) => {
  return (
    <div>
      <strong>Search: </strong>
      <input type="text" name="search" placeholder="Stock Name" onChange={(e) => props.handleSearch(e.target.value)}/>
      <br></br>
      <strong>Sort by:</strong>
      <label>
        <input type="radio" value="Alphabetically" checked={props.checked === 'Alphabetically' ? true : false} onChange={(e) => props.handleSort(e.target.value)}/>
        Alphabetically
      </label>
      <label>
        <input type="radio" value="Price" checked={props.checked === 'Price' ? true : false} onChange={(e) => props.handleSort(e.target.value)}/>
        Price
      </label>
      <br/>

      <label>
        <strong>Filter:</strong>
        <select onChange={(e) => props.handleFilter(e.target.value)}>
          <option value="Tech">Tech</option>
          <option value="Sportswear">Sportswear</option>
          <option value="Finance">Finance</option>
        </select>
      </label>


    </div>
  );
}


export default SearchBar;
