import React from "react";
import PropTypes from "prop-types";
import Stepper from "react-stepper-horizontal";

function StepperComp({
  initialData,
  setStepperData,
  children,
  classes = "",
  ...rest
}) {
  return (
    <React.Fragment>
      <div className={`row stepper-main ${classes}`}>
        <Stepper
          steps={initialData.steps}
          activeStep={initialData.page - 1}
          {...rest}
        />
      </div>
      <div className='row'>{children}</div>
    </React.Fragment>
  );
}

StepperComp.propTypes = {
  initialData: PropTypes.shape({
    page: PropTypes.number.isRequired,
    steps: PropTypes.any,
  }),
  setStepperData: PropTypes.func.isRequired,
  children: PropTypes.any,
};

export default React.memo(StepperComp);
