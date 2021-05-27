import React from "react";

function Outer({ children }) {
  return (
    <div className='row'>
      <div className='col-md-3 p-3'>
        <div className='template-card shadow'>{children}</div>
      </div>
    </div>
  );
}

export default React.memo(Outer);
