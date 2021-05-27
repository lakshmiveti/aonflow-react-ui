import React, { useState } from "react";

const DropDown = (props) => {
    const [options, setOptions] = useState([
        {
          id: 1,
          value: "Salesforce",
        },
        {
          id: 2,
          value: "Dynamics",
        },
        {
          id: 3,
          value: "Netsuite",
        },
      ]);

  let filterOptions =
    options.length > 0 &&
    options.map((item, i) => {
      console.log("%%%%%", item.value);
      return (
        <option key={i} value={item.id}>
          {item.value}
        </option>
      );
    });
    
  return (
    <div class="col-md-4 drop-down">
    <select class="form-control form-control-sm">
    {filterOptions}
  </select>
  </div>
  );
};
export default DropDown;