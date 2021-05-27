import React from "react";
import loader from "../../assets/images/loading-animation.svg";

function Loader() {
  return (
    <div className='loader-head'>
      <p className='selected-item'>Checking the new connection</p>
      <img className='loader' src={loader} alt='back arrow' />
    </div>
  );
}

export default Loader;
