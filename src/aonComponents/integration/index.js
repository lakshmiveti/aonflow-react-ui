import React from "react";
import PropTypes from "prop-types";
import "./style.scss";
import arrow from "../../assets/images/right-arrow.svg";

function Integration({ source, destination, classes = "", children }) {
  return (
    <React.Fragment>
      <div className={`row ${classes}`}>
        <div className='col-md-6 text-center my-2'>
          <img className='img-fluid' src={source.image} alt='source logo' />
        </div>
        <div className='col-md-6 text-center my-2'>
          <img
            className='img-fluid'
            src={destination.image}
            alt='destination logo'
          />
        </div>
      </div>

      <div className='row px-3 template-content-section'>
        <div className='col-md-5  my-2'>
          <div className='heading'>{source.title}</div>
          <div className='description'>{source.description}</div>
        </div>
        <div className='col-md-2 my-2'>
          <img className='img-fluid mt-3' src={arrow} alt='arrow' />
        </div>
        <div className='col-md-5 my-2'>
          <div className='heading'>{destination.title}</div>
          <div className='description'>{destination.description}</div>
        </div>
        <div className='w-100 text-center my-3'>{children}</div>
      </div>
    </React.Fragment>
  );
}

Integration.propTypes = {
  source: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
  destination: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
  children: PropTypes.any,
  classes: PropTypes.string,
};
export default React.memo(Integration);
