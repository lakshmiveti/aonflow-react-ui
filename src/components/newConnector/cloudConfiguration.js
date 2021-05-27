import React, {useState, useContext} from "react";
import AonContext from "../../context/aonContext";
import Oauth from "./oauth";
import UserCredentials from "./userCredentials";
import Certificate from "./certificate";
import CustomConfiguration from './customConfiguration';

function CloudConfiguration() {
  const { step2Data, updateStep2Data } = useContext(AonContext);
  const { connectionName, authenticationURL, fetchDataURL, authenticationType} = step2Data;
  const [errors, setErrors] = useState({
    connectionName : false, 
    authenticationURL : false, 
    fetchDataURL : false, 
    authenticationType : false
  });

  const checkValidation = (event) => {
    const {name, value} = event.target;
    value.trim() === "" ? 
      setErrors({...errors, [name]: true}) : 
      setErrors({...errors, [name]:false})
  }

  const updateData = (event) => {
    const {name, value} = event.target;
    value.trim() !== "" && setErrors({...errors, [name]:false});
    updateStep2Data(event);
  }

  return (
    <main className="mt-3 mx-4 full-width">
      <div className={`row ${errors.connectionName ? "error-msg" : ""}`}>
        <div className="col-md-3 p-3">
          <div className="form-group">
            <label htmlFor="cn">Connection  Name</label>            
          </div>
        </div>
        <div className="col-md-8 p-3">
          <div className="form-group">
            <input type="text" className="form-control" id="cn" name = "connectionName" 
                value = {connectionName} onChange = {updateData} onBlur = {checkValidation}/>
            {errors.connectionName && <span className = "error-message">This is required</span>}
          </div>
        </div>
      </div>

      <div className={`row ${errors.authenticationURL ? "error-msg" : ""}`}>
        <div className="col-md-3 p-3">
          <div className="form-group">
            <label htmlFor="au">Authentication URL</label>
          </div>
        </div>
        <div className="col-md-8 p-3">
          <div className="form-group">
            <input type="text" className="form-control" id="au" name = "authenticationURL" 
              value = {authenticationURL} onChange = {updateData} onBlur = {checkValidation}/>
            {errors.authenticationURL && <span className = "error-message">This is required</span>}
          </div>
        </div>
      </div>

      <div className={`row ${errors.fetchDataURL ? "error-msg" : ""}`}>
        <div className="col-md-3 p-3">
          <div className="form-group">
            <label htmlFor="fdu">Fetch Data URL</label>
          </div>
        </div>
        <div className="col-md-8 p-3">
          <div className="form-group">
            <input type="text" className="form-control" id="fdu" name = "fetchDataURL" 
              value = {fetchDataURL} onChange = {updateData} onBlur = {checkValidation}/>
            {errors.fetchDataURL && <span className = "error-message">This is required</span>}
          </div>
        </div>
      </div>

      <div className={`row ${errors.authenticationType ? "error-msg" : ""}`}>
        <div className="col-md-3 p-3">
          <div className="form-group">
            <label htmlFor="at">Authentication Type</label>
          </div>
        </div>
        <div className="col-md-8 p-3">
          <div className="form-group">
            <select className="form-control form-control-sm auth-type" id = "at" name = "authenticationType" 
              value = {authenticationType} onChange = {updateData} onBlur = {checkValidation}>
              <option value = "" defaultValue = {authenticationType}>Filter by connections</option>
              <option value="OAuth2">OAuth 2.0</option>
              <option value="User Credentials">User Credentials</option>
              <option value="Certificate">Certificate based</option>
              <option value="Custom">Custom Authentication</option>
            </select>
            {errors.authenticationType && <span className = "error-message">This is required</span>}
          </div>
        </div>
      </div>
        {
          authenticationType === "OAuth2" && (
            <Oauth />
          )
        }

        {
          authenticationType === "User Credentials" && (
            <UserCredentials />
          )
        }

        {
          authenticationType === "Certificate" && (
            <Certificate />
          )
        }  

        {
          authenticationType === "Custom" && (
            <CustomConfiguration />
          )
        }
    </main>
  )
}


export default React.memo(CloudConfiguration);
