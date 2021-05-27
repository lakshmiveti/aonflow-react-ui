import React, {useContext} from 'react';
import AonContext from "../../context/aonContext";

function Certificate() {
  const {certificate, setCertificate} = useContext(AonContext);
  
  const selectImage = (e) => {
    const selectedFiles = e.target.files;
    setCertificate(selectedFiles[0]);
    console.log("selectedfiles", selectedFiles[0])
    e.target.value = "";
  }

  return (
    <div className="row">
      <div className="col-md-3 p-3">
        <form className="form-details">
          <div className="form-group">
            <label htmlFor="cf">Certificate File</label>
          </div>
        </form>
      </div>
      <div className="col-md-8 p-3">
        <form className="form-details">
          <div className="form-group">
            <input type="file" className="form-control" id="cf" name = "image" 
              onChange = {selectImage}/>
          </div>
        </form>
      </div>
    </div>
  )
}

export default React.memo(Certificate);
