import React from "react";
import PropTypes from "prop-types";
import "./style.scss";

function Button({
  type = "button",
  children,
  classes = "",
  handler = () => {
    console.log("Please provide a handler");
  },
  ...rest
}) {
  const handleEvent = () => {
    handler();
  };

  return (
    <button
      type={type}
      className={`btn btn-green ${classes}`}
      onClick={handleEvent}
      {...rest}
    >
      {children}
    </button>
  );
}

Button.propTypes = {
  type: PropTypes.string.isRequired,
  handler: PropTypes.func.isRequired,
  children: PropTypes.string.isRequired,
  classes: PropTypes.string,
};

export default React.memo(Button);
