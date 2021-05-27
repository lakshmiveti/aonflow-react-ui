import ConnectorLayout from "../../aonComponents/ConnectorLayout";
import React, { useContext } from "react";
import Button from "../../aonComponents/Button";
import AonContext from "../../context/aonContext";
import { useHistory } from "react-router-dom";
import Connector from "../newConnector/connector";

function ListOfConnectors({ title }) {
  const {
    resetStepData,
    connector,
    isConnectedStarted,
    setConnection,
    setStep1Data,
    setStep2Data,
    setOauthData,
    setEdit,
    setEditRecord,
  } = useContext(AonContext);

  const history = useHistory();

  const makeStepperVisible = () => {
    setConnection(true);
  };

  const backToHomePage = () => {
    setConnection(false);
    resetStepData();
  };

  const createConnector = () => {
    history.push("/newconnector");
  };
  const editConnector = (id) => {
    setEditRecord(id);
    setEdit(true);
    const selectedConnector = connector.filter((obj) => obj.id === id)[0];
    if (selectedConnector) {
      setStep1Data({
        name: selectedConnector.name,
        img: selectedConnector.img,
        desc: selectedConnector.desc,
      });

      setStep2Data({
        connectionName: selectedConnector.connectionName,
        authenticationURL: selectedConnector.authenticationURL,
        fetchDataURL: selectedConnector.fetchDataURL,
        authenticationType: selectedConnector.authenticationType,
      });

      if (selectedConnector.authenticationType === "OAuth2") {
        selectedConnector.connectors[1].value = "";
        setOauthData(selectedConnector.connectors);
      }
      setConnection(true);
    }
  };

  let listOfConnectors =
    connector.length > 0 &&
    connector.map((item) => {
      return (
        <ConnectorLayout
          key={item.id}
          logoUrl={`http://13.235.55.86/api/v1/file/fetch/${item.img}`}
          handler={() => {
            console.log("clickd on delete");
          }}
          connectionName={item.name}
          desc={item.desc}
          buttonTitle='Edit Connector'
          img={item.img}
          id={item.id}
          buttonHandler={editConnector}
        />
      );
    });

  return (
    <div>
      {!isConnectedStarted && (
        <React.Fragment>
          <div className='row'>
            <div className='col-md-6'>
              <h3 className='selected-item'>{title}</h3>
            </div>
            <div className='col-md-6'>
              <Button
                type='button'
                classes='float-right no-right-margin'
                handler={makeStepperVisible}
              >
                Create connector
              </Button>
              {/* <Button
                type='button'
                classes='float-right no-right-margin'
                handler={createConnector}
              >
                Create connector
              </Button> */}
            </div>
          </div>
          <div className='row'>{listOfConnectors}</div>
        </React.Fragment>
      )}
      {isConnectedStarted && <Connector {...{ backToHomePage }} />}
    </div>
  );
}
export default ListOfConnectors;
