import React, { useState } from "react";

function Search({notes,searchNotes, searchInput}) {
 

  
  return (
    <div className="filter">
      <input 
      onChange={searchNotes}
      id="search-bar" 
      type="text" 
      placeholder="Search Notes" 
      value={searchInput}
      />
    </div>
  );
}

export default Search;
