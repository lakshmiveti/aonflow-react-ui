import React, { useState } from "react";
import image1 from "../src/assets/images/salesforce.png";
import image2 from "../src/assets/images/dynamics.png";
import Button from "./aonComponents/Button";
import Card from "./aonComponents/Card";
import Integration from "./aonComponents/integration";
import Layout from "./aonComponents/layout";
import Overlay from "./aonComponents/overlay";
import StepperComp from "./aonComponents/Stepper";
import ConnectorLayout from "./aonComponents/ConnectorLayout";

function Example() {
  const [showOverlay, setShowOverlay] = useState(false);
  const [stepperData, setStepperData] = useState({
    page: 1,
    steps: [
      {
        title: "step1",
        onClick: () => {
          goToPage("1");
        },
      },
      {
        title: "step2",
        onClick: () => {
          goToPage("1");
        },
      },
    ],
  });
  const goToPage = (page) => {
    setStepperData((prevState) => ({
      ...prevState,
      page: +page,
    }));
  };
  const nextPage = () => {
    setStepperData((prevState) => ({
      ...prevState,
      page: prevState.page + 1,
    }));
  };

  const prevPage = () => {
    setStepperData((prevState) => ({
      ...prevState,
      page: prevState.page - 1,
    }));
  };

  const showStep = (step) => {
    switch (step) {
      case 0:
        return <p>First component</p>;
      case 1:
        return <p>second component</p>;
      default:
        return <p>default</p>;
    }
  };

  const source = {
    title: "Salesforce",
    description: "salesforce description",
    image: image1,
  };
  const destination = {
    title: "Dynamcis 365",
    description: "Dynamcis 365 description",
    image: image2,
  };
  return (
    <div className='App'>
      <Button type='button' classes='float-right' handler={() => {}}>
        My Button
      </Button>

      <Card size={4}>i am pradeep</Card>

      <Card size={4}>
        <Integration {...{ source, destination }}>
          <Button
            type='button'
            handler={() => {
              console.log("integration button");
            }}
          >
            Integration
          </Button>
        </Integration>
      </Card>

      <Layout>
        <Layout.Header title='This is Title'>
          <Button
            type='button'
            classes='float-right'
            handler={() => {}}
            disabled={true}
          >
            Next
          </Button>
        </Layout.Header>
        <Layout.Body>
          <p>I am body of Layout</p>
        </Layout.Body>
      </Layout>

      <Button type='button' handler={() => setShowOverlay(true)}>
        Open Overlay
      </Button>
      {showOverlay && (
        <Overlay>
          <Overlay.Header
            title='LayoutHeader'
            handler={() => {
              setShowOverlay(false);
            }}
          />
          <Overlay.Body>
            <p>i am body children</p>
          </Overlay.Body>
          <Overlay.Footer>jjjjj</Overlay.Footer>
        </Overlay>
      )}

      <div>
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
        {stepperData.page > 1 && (
          <button type='button' onClick={prevPage}>
            Prev
          </button>
        )}
        {stepperData.page !== stepperData.steps.length && (
          <button type='button' onClick={nextPage}>
            Next
          </button>
        )}
      </div>

      <ConnectorLayout
        logoUrl={image1}
        handler={() => {
          console.log("delete button handler");
        }}
        connectionName='Salesforce'
        desc='test desc'
        buttonTitle='Edit Connector'
        buttonHandler={() => {
          console.log("button handler");
        }}
      />
    </div>
  );
}

export default Example;
