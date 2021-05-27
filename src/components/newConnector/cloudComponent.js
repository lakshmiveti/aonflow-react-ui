import React, {useContext, useRef,useState} from "react";
import AonContext from '../../context/aonContext';
import * as axios from 'axios';

function CloudComponent() {
  const { step1Data, updateStep1Data,jwtToken,setStep1Data } = useContext(AonContext);
  const { name, img, desc } = step1Data;
  const [errors, setErrors] = useState({name: false, img:false, desc:false });
  const imgRef = useRef(null);
  let uploadFileUrl = "http://13.235.55.86/api/v1/file"
  const selectImage = (e) => {
    e.preventDefault();
    const selectedFiles = e.target.files;
    console.log("selectedfiles", selectedFiles[0])
    uploadToServer(selectedFiles[0])
  }
 const uploadToServer = (file) => {
    let formData = new FormData();
    formData.append("file", file);
     axios.post(uploadFileUrl, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
        "x-access-token": jwtToken
      },
    }).then((response) => {
        let imageId = response.data.id
        setStep1Data(prevState => {
          return {
            ...prevState,
            "img" : response.data.id
          }
        }); 
        console.log("Successfully set the image id",imageId)
      })
      .catch((error) => {
        console.log('Failed to upload Image',error)
      });
  }

  const checkValidation = (event) => {
    const {name, value} = event.target;
    value.trim() === "" ? 
      setErrors({...errors, [name]: true}) : 
      setErrors({...errors, [name]:false})
  }

  const updateData = (event) => {
    const {name, value} = event.target;
    value.trim() !== "" && setErrors({...errors, [name]:false});
    updateStep1Data(event);
  }

  return (
    <main className="mt-3 mx-4 full-width">
      <div className={`row ${errors.name ? "error-msg" : ""}`}>
        <div className="col-md-3 p-3">
            <div className="form-group">
              <label htmlFor="name">Cloud Component Name</label>
            </div>
        </div>
        <div className="col-md-8 p-3">
            <div className="form-group">
              <input type="text" className="form-control" id="name" name = "name" 
                value = {name} onChange = {updateData} onBlur = {checkValidation}/>
                {errors.name && <span className = "error-message">This is required</span>}
            </div>
        </div>
      </div>

      <div className={`row ${errors.img ? "error-msg" : ""}`}>
        <div className="col-md-3 p-3">
            <div className="form-group">
              <label htmlFor="inputId3">Choose Image</label>
            </div>
        </div>
        <div className="col-md-8 p-3">
            <div className="form-group">
              <input type="file" className="form-control" id="inputId3" name="img" 
                 ref={imgRef}  onChange = {selectImage} onBlur = {checkValidation}/>
                 {errors.img && <span className = "error-message">This is required</span>}
            </div>
        </div>
      </div>

      <div className={`row ${errors.desc ? "error-msg" : ""}`}>
        <div className="col-md-3 p-3">
            <div className="form-group">
              <label htmlFor="inputId2">Description</label>
            </div>
        </div>
        <div className="col-md-8 p-3">
            <div className="form-group">
              <textarea className="form-control" id="inputId2" rows="3" name = "desc" 
                value = {desc} onChange = {updateData} onBlur = {checkValidation} ></textarea>
                {errors.desc && <span className = "error-message">This is required</span>}
            </div>
        </div>
      </div>
    </main>
  )
}

export default CloudComponent
