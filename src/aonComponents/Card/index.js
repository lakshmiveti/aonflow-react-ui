import React from "react";
import PropTypes from "prop-types";
import "./style.scss";

function Card({ size, children, classes = "" }) {
  return (
    <div className={`col-md-${size} p-3 ${classes}`}>
      <div className='template-card shadow'>{children}</div>
    </div>
  );
}

Card.propTypes = {
  size: PropTypes.number.isRequired,
  children: PropTypes.any,
  classes: PropTypes.string,
};

export default React.memo(Card);
