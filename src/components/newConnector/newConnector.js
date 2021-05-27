import React, { useContext } from "react";
import StepperComp from "../../aonComponents/Stepper";
import AonContext from "../../context/aonContext";
import CloudComponent from "./cloudComponent";
import CloudConfiguration from "./cloudConfiguration";
import "./style.scss";

function NewConnector() {
  const { stepperData, setStepperData } = useContext(AonContext);

  const showStep = (step) => {
    switch (step) {
      case 0:
        return <CloudComponent />;
      case 1:
        return <CloudConfiguration />;
      default:
        return <CloudComponent />;
    }
  };
  return (
    <StepperComp
      initialData={stepperData}
      setStepperData={setStepperData}
      activeColor='#79C23B'
      completeColor='#79C23B'
      defaultBarColor='#B9C7D4'
      completeBarColor='#79C23B'
      defaultBorderColor='#B9C7D4'
      defaultBorderWidth={6}
      defaultTitleColor='#004F84'
      activeTitleColor='#004F84'
      titleTop={1}
    >
      {showStep(stepperData.page - 1)}
    </StepperComp>
  );
}

export default React.memo(NewConnector);
