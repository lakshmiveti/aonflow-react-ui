import React, { useState, useCallback, useEffect } from "react";
import AonContext from "./aonContext";
import * as axios from "axios";

const AonStateProvider = ({ children }) => {
  const connectorStepData = {
    page: 1,
    steps: [
      {
        title: "Step1",
        onClick: () => {
          goToPage("1");
        },
      },
      {
        title: "Step2",
        onClick: () => {
          goToPage("2");
        },
      },
    ],
  };
  const [activeTab, setActiveTab] = useState("listOfConnections");
  const [stepperData, setStepperData] = useState(connectorStepData);
  const [certificate, setCertificate] = useState(null);

  const [step1Data, setStep1Data] = useState({
    name: "",
    img: "",
    desc: "",
  });

  const [step2Data, setStep2Data] = useState({
    connectionName: "",
    authenticationURL: "",
    fetchDataURL: "",
    authenticationType: "",
  });

  const [oauth, setOauthData] = useState([
    { key: "username", value: "" },
    { key: "password", value: "" },
    { key: "clientId", value: "" },
    { key: "clientSecret", value: "" },
  ]);

  const [userCredentials, setUserCredentials] = useState([
    { key: "username", value: "" },
    { key: "password", value: "" },
  ]);

  const [customConfiguration, setCustomCofiguration] = useState([
    { key: "fieldName", value: "" },
    { key: "fieldType", value: "" },
    { key: "includedIn", value: "" },
    { key: "isRequired", value: "" },
    { key: "tokenValue", value: "" },
  ]);

  const resetStepData = () => {
    setEdit(false);
    setEditRecord("");
    setStepperData(connectorStepData);
    setStep1Data({
      name: "",
      img: "",
      desc: "",
    });

    setStep2Data({
      connectionName: "",
      authenticationURL: "",
      fetchDataURL: "",
      authenticationType: "",
    });

    setOauthData([
      { key: "username", value: "" },
      { key: "password", value: "" },
      { key: "clientId", value: "" },
      { key: "clientSecret", value: "" },
    ]);

    setUserCredentials([
      { key: "username", value: "" },
      { key: "password", value: "" },
    ]);
    setCustomCofiguration([
      { key: "fieldName", value: "" },
      { key: "fieldType", value: "" },
      { key: "includedIn", value: "" },
      { key: "isRequired", value: "" },
      { key: "tokenValue", value: "" },
    ]);
  };

  const resetCustomConfiguration = () => {
    setCustomCofiguration([
      { key: "fieldName", value: "" },
      { key: "fieldType", value: "" },
      { key: "includedIn", value: "" },
      { key: "isRequired", value: "" },
      { key: "tokenValue", value: "" },
    ]);
  };

  const updateStep1Data = (e) => {
    if (e.lastModified) {
      setStep1Data((prevState) => {
        return {
          ...prevState,
          img: e,
        };
      });
    } else {
      e.persist();
      setStep1Data((prevState) => {
        return {
          ...prevState,
          [e.target.name]: e.target.value,
        };
      });
    }
  };

  const updateStep2Data = (e) => {
    e.persist();
    setStep2Data((prevState) => {
      return {
        ...prevState,
        [e.target.name]: e.target.value,
      };
    });
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

  const goToPage = (page) => {
    setStepperData((prevState) => ({
      ...prevState,
      page: +page,
    }));
  };

  const [jwtToken, setJWTToken] = useState("");
  const [connector, setConnector] = useState([]);
  const [isConnectedStarted, setConnection] = useState(false);
  const [isEdit, setEdit] = useState(false);
  const [editRecord, setEditRecord] = useState("");
  return (
    <AonContext.Provider
      value={{
        activeTab,
        setActiveTab,
        stepperData,
        setStepperData,
        step1Data,
        updateStep1Data,
        step2Data,
        setStep2Data,
        updateStep2Data,
        oauth,
        setOauthData,
        userCredentials,
        setUserCredentials,
        certificate,
        setCertificate,
        nextPage,
        resetStepData,
        jwtToken,
        setJWTToken,
        connector,
        setConnector,
        isConnectedStarted,
        setConnection,
        setStep1Data,
        isEdit,
        setEdit,
        editRecord,
        setEditRecord,
        customConfiguration,
        setCustomCofiguration,
      }}
    >
      {children}
    </AonContext.Provider>
  );
};

export default AonStateProvider;
