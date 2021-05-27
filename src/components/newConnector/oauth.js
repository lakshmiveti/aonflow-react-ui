import React, {useState, useContext} from "react";
import AonContext from "../../context/aonContext";

function Oauth() {
  const {oauth, setOauthData} = useContext(AonContext);
  const [errors, setErrors] = useState({
    username: false,
    password: false,
    clientId: false,
    clientSecret: false
  });
  
  const updateData = (e, index) => {
    const {value} = e.target;
    const newouath = [...oauth];
    newouath[+ index].value = value;
    setOauthData(newouath);
    const key = newouath[+index].key;
    value !== "" && setErrors({...errors, [key] : false});
  }

  const checkValidation = (event) => {
    const {name, value} = event.target;
    value.trim() === "" ? 
      setErrors({...errors, [name]: true}) : 
      setErrors({...errors, [name]:false})
  }

  return (
    <React.Fragment>
      <div className={`row ${errors.username ? "error-msg" : ""}`}>
        <div className="col-md-3 p-3">
          <div className="form-group">
            <label htmlFor="un">Username</label>
          </div>
        </div>
        <div className="col-md-8 p-3">
          <div className="form-group">
            <input type="text" className="form-control" id="un" name = "username" 
                value = {oauth[0].value} autoComplete = "off" onChange = {(e) => {updateData(e,"0")}}
                onBlur = {checkValidation} />
            {errors.username && <span className = "error-message">This is required</span>}
          </div>
        </div>
      </div>

      <div className={`row ${errors.password ? "error-msg" : ""}`}>
        <div className="col-md-3 p-3">
          <div className="form-group">
            <label htmlFor="pwd">Password</label>
          </div>
        </div>
        <div className="col-md-8 p-3">
          <div className="form-group">
            <input type="password" className="form-control" id="pwd" name = "password" 
                value = {oauth[1].value} autoComplete = "off" onChange = {(e) => {updateData(e,"1")}} 
                onBlur = {checkValidation}/>
            {errors.password && <span className = "error-message">This is required</span>}
          </div>
        </div>
      </div>

      <div className={`row ${errors.clientId ? "error-msg" : ""}`}>
        <div className="col-md-3 p-3">
          <div className="form-group">
            <label htmlFor="cid">Client id</label>
          </div>
        </div>
        <div className="col-md-8 p-3">
          <div className="form-group">
            <input type="text" className="form-control" id="cid" name = "clientId" 
              value = {oauth[2].value} onChange = {(e) => {updateData(e,"2")}} 
              onBlur = {checkValidation}/>
            {errors.clientId && <span className = "error-message">This is required</span>}
          </div>
        </div>
      </div>

      <div className={`row ${errors.clientSecret ? "error-msg" : ""}`}>
        <div className="col-md-3 p-3">
          <div className="form-group">
            <label htmlFor="cs">Client Secret</label>
          </div>
        </div>
        <div className="col-md-8 p-3">
          <div className="form-group">
            <input type="text" className="form-control" id="cs" name = "clientSecret" 
                value = {oauth[3].value} onChange = {(e) => {updateData(e,"3")}} 
                onBlur = {checkValidation}/>
            {errors.clientSecret && <span className = "error-message">This is required</span>}
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default React.memo(Oauth);
