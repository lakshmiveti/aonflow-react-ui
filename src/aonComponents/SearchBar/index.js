import React, { useState } from "react";

const SearchInput = (props) => {
  const [searchInput, setSearchInput] = useState("");

  function handleChange(e) {
    console.log(e.target.value);
    setSearchInput(e.target.value)
  }
  
  return (
    <div class="col-md-4 input-field">
      <input
        class="form-control form-control-sm"
        type="text"
        onChange={handleChange}
        value={searchInput}
        placeholder="Search"
      />
    </div>
  );
};
export default SearchInput;