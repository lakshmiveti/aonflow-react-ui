import React, {useState} from 'react';
import Button from "./Buttons/button";
import Card from "./CardLayout/card";
import Integration from "./Integration/integration";
import StepperComp from "./StepperIndicator/stepper";

function Example() {
  const [stepperData, setStepperData] = useState({
    page: 1,
    steps : [{title:"step1"}, {title:"step2"}, {title:"step3"}, {title:"step4"}]
  })

  const nextPage = () => {
    setStepperData((prevState) => ({
      ...prevState,
      page : prevState.page + 1
    }))
  }

  const prevPage = () => {
    setStepperData((prevState) => ({
      ...prevState,
      page : prevState.page - 1
    }))
  }

  const showStep = (step) => {
    switch(step) {
      case 0 :
       return <p>First component</p>
      case 1 :
        return <p>second component</p>
      case 2 :
        return <p>Third component</p>
      case 3 :
        return <p>Fourth component</p>
      default :
        return <p>default</p>
    }
  }

  const handleFun = () => {
    console.log("pradeep")
  }


  const source = {
    title: "Salesforce",
    description: "salesforce description",
    image: "https://homepages.cae.wisc.edu/~ece533/images/airplane.png"
  }
  const destination = {
    title: "Dynamcis 365",
    description: "Dynamcis 365 description",
    image: "https://homepages.cae.wisc.edu/~ece533/images/boat.png"
  }

  return (
    <div className = "example-main">
      <h1>Button Component</h1>
      <Button type = "button"  handler = {handleFun} a="fdf" b = "ffdf" c= "ffd">Click me</Button>
      <hr />

      <h1>Card component</h1>
      <Card size = {4}>
        <div>i am from card component children</div>
        <h6>i am also from Card component children</h6>
        <Button type = "i am from Card component"  handler = {handleFun}>card button</Button>
        <Button type = "i am from Card component"  handler = {handleFun}>card button2 </Button>
        <Button type = "i am from Card component"  handler = {handleFun}>card button 3</Button>
      </Card>
      <Card size = {4}>
        <div>i am from card component children</div>
        <h6>i am also from Card component children</h6>
      </Card>
      <Card size = {4}>
        <div>i am from card component children</div>
        <h6>i am also from Card component children</h6>
      </Card>
      <Card size = {4}>
        <Integration {...{source, destination}} />
      </Card>
      <hr />

      <h1>Stepper Component</h1>
      <StepperComp 
        initialData = {stepperData} 
        setStepperData = {setStepperData}
        activeColor = "#79C23B"
        completeColor = "#79C23B"
        defaultBarColor = "#79C23B"
        completeBarColor = "#79C23B"
        activeTitleColor = "#79C23B"
        completeTitleColor = "#79C23B"
        barStyle ="solid"
        circleFontSize = {16}
      >
        {showStep(stepperData.page - 1)}
      </StepperComp>
      {stepperData.page > 1 && <button type = "button" onClick = {prevPage}>Prev</button> }
      {(stepperData.page !== stepperData.steps.length) && <button type = "button"  onClick = {nextPage}>Next</button> }
    </div>
  )
}

export default Example
