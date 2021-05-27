import React, { useEffect, useContext } from "react";
import AonContext from "../../context/aonContext";
import NavLink from "../sideNav/navlink";
import Settings from "../sideNav/settings";
import MainContent from "./mainContent";
import "./style.scss";
import tokenService from "../../services/tokenService";
import getConnectorListService from "../../services/getConnectorListService";

function Dashboard() {
  console.log("useContext", useContext(AonContext));
  const { setJWTToken, setConnector, setConnection, resetStepData } =
    useContext(AonContext);

  useEffect(() => {
    async function getToken() {
      const result = await tokenService({
        email: "aon_dev_user@gmail.com",
        orgId: 1,
      });
      console.log("result", result);
      if (result && result.token) {
        setJWTToken(result.token);
        const connectorData = await getConnectorListService(result.token);
        console.log("connectorData", connectorData);
        if (connectorData.connector) {
          setConnector(connectorData.connector);
          setConnection(false);
          resetStepData();
        }
      }
    }
    getToken();
  }, []);

  return (
    <main className='main-view'>
      <div className='row'>
        <div className='col-3 py-3 px-4'>
          <div className='main-navigator'>
            <div className='logo'>logo</div>
            <NavLink />
            <Settings />
          </div>
        </div>
        <div className='col-9 py-3 px-4'>
          <MainContent />
        </div>
      </div>
    </main>
  );
}

export default React.memo(Dashboard);
