import React from "react";
import errorImg from "../../assets/images/error.svg";
import successImg from "../../assets/images/thumbup.svg";

function ConnectorTest({ hasError, data }) {
  return (
    <React.Fragment>
      {hasError ? (
        <h1 className='text-center big-text'>
          Connectivity Failed <img src={errorImg} alt='failed' />
        </h1>
      ) : (
        <h1 className='text-center big-text'>
          Connectivity Successful <img src={successImg} alt='success' />
        </h1>
      )}
      <div className='background-card-view connector-test-content'>
        <div className='strip'>
          <div className='row'>
            <div className='col-md-12'>
              <p className='strip-heading'>Saas data objects</p>
            </div>
          </div>
        </div>
        <ul className='data-list'>
          {data.map((item, index) => (
            <li key={index}>{item.label}</li>
          ))}
        </ul>
      </div>
    </React.Fragment>
  );
}

export default ConnectorTest;
