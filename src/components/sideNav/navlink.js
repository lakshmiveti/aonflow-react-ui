import React, { useContext } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import AonContext from "../../context/aonContext";
import "./style.scss";
const classNames = require("classnames");

function NavLink() {
  const { activeTab, setActiveTab, setConnection, resetStepData } =
    useContext(AonContext);

  const showListOfConnectors = () => {
    setActiveTab("listOfConnections");
    setConnection(false);
    resetStepData();
  };

  return (
    <div className='navigation'>
      <ul>
        {/* <li
          className={classNames({ active: activeTab === "listOfConnections" })}
          onClick={showListOfConnectors}
        >
          List of Connectors
        </li> */}
        <li>
          <Link to='/'>List of Connectors</Link>
        </li>
      </ul>
    </div>
  );
}

export default React.memo(NavLink);
