import React, { useState } from "react";

function Search({setSearchInput}) {

  return (
    <div className="filter">
      <input 
      onChange={(e)=>setSearchInput(e.target.value)}
      id="search-bar" 
      type="text" 
      placeholder="Search Notes" 
      />
    </div>
  );
}

export default Search;
