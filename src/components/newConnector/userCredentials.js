import React, {useContext} from 'react';
import AonContext from "../../context/aonContext";

function UserCredentials() {
  const {userCredentials, setUserCredentials} = useContext(AonContext);
  
  const updateData = (e, index) => {
    const newUserCredentials = [...userCredentials];
    newUserCredentials[+ index].value = e.target.value;
    setUserCredentials(newUserCredentials);
  }

  return (
    <React.Fragment>
      <div className="row">
        <div className="col-md-3 p-3">
          <div className="form-group">
            <label htmlFor="un">Username</label>
          </div>
        </div>
        <div className="col-md-8 p-3">
          <div className="form-group">
            <input type="text" className="form-control" id="un" name = "username" 
                value = {userCredentials[0].value} autoComplete = "off" onChange = {(e) => {updateData(e,"0")}}/>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-md-3 p-3">
          <div className="form-group">
            <label htmlFor="pwd">Password</label>
          </div>
        </div>
        <div className="col-md-8 p-3">
          <div className="form-group">
            <input type="text" className="form-control" id="pwd" name = "password" 
                value = {userCredentials[1].value} autoComplete = "off" onChange = {(e) => {updateData(e,"1")}} />
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default React.memo(UserCredentials)
