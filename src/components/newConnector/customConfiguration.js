import React, { useContext, useState } from "react";
import AonContext from "../../context/aonContext";
import Overlay from "../../aonComponents/overlay";
import Button from "../../aonComponents/Button";

function CustomConfiguration() {
  const {
    customConfiguration,
    setCustomCofiguration,
    resetCustomConfiguration,
  } = useContext(AonContext);
  const [showpopUp, setShowpopup] = useState("false");

  const [errors, setErrors] = useState({
    tokenId: false,
  });

  const checkValidation = (event) => {
    const { name, value } = event.target;
    value.trim() === ""
      ? setErrors({ ...errors, [name]: true })
      : setErrors({ ...errors, [name]: false });
  };

  const openModal = (e) => {
    console.log("i am in open modal");
    setShowpopup(true);
  };

  const updateData = (e, index) => {
    const customConfig = [...customConfiguration];
    customConfig[+index].value = e.target.value;
    setCustomCofiguration(customConfig);
    console.log("customconfig", customConfig);
  };

  const CancelHandler = () => {
    setShowpopup(false);
    resetCustomConfiguration();
  };

  return (
    <div className='row'>
      <div className='col-md-3 p-3'>
        <form className='form-details'>
          <div className='form-group'>
            <label htmlFor='cf'>Custom Fields Option</label>
          </div>
        </form>
      </div>
      <div className='col-md-8 p-3'>
        <form className='form-details'>
          <div className='form-group'>
            <button
              type='button'
              className='btn-green'
              id='cf'
              name='modal'
              data-bs-toggle='modal'
              data-bs-target='#exampleModal'
              onClick={openModal}
            >
              Add Custom Fields
            </button>
          </div>
        </form>
      </div>
      <div>
        {showpopUp && (
          <Overlay>
            <Overlay.Header
              className='modal-header'
              title='Create Custom Field'
              handler={() => {
                setShowpopup(false);
              }}
            />
            <Overlay.Body classes='modal-confirm-body'>
              <form className='form-details'>
                <div>
                  <label htmlFor='inputId1'>Custom Field Name</label>
                  <input
                    type='text'
                    className='form-control'
                    id='inputId1'
                    onChange={(e) => {
                      updateData(e, "0");
                    }}
                  />
                </div>
                <div>
                  <label htmlFor='inputId2'>Field Type</label>
                  <select
                    className='form-control'
                    id='inputId2'
                    onChange={(e) => {
                      updateData(e, "1");
                    }}
                  >
                    <option value='text'>Text</option>
                    <option value='file'>File</option>
                    <option value='password'>Password</option>
                  </select>
                </div>
                <div>
                  <label htmlFor='inputId3'>Included In</label>
                  <select
                    className='form-control'
                    id='inputId3'
                    onChange={(e) => {
                      updateData(e, "2");
                    }}
                  >
                    <option value='header'>Header</option>
                    <option value='body'>Body</option>
                  </select>
                </div>
                <div className='form-check form-switch'>
                  <label
                    className='form-check-label'
                    htmlFor='flexSwitchCheckChecked'
                  >
                    Is Required
                  </label>
                  <input
                    className='form-check-input'
                    type='checkbox'
                    id='flexSwitchCheckChecked'
                    checked
                    onChange={(e) => {
                      updateData(e, "3");
                    }}
                  />
                </div>
              </form>
            </Overlay.Body>
            <Overlay.Footer>
              <div className='align-center'>
                <Button
                  type='button'
                  className='btn btn-red mx-2'
                  handler={CancelHandler}
                >
                  Cancel
                </Button>
                <Button
                  type='button'
                  classes='align-center'
                  handler={() => setShowpopup(false)}
                >
                  Create
                </Button>
              </div>
            </Overlay.Footer>
          </Overlay>
        )}
        {customConfiguration[0].value !== "" && (
          <div className={`row ${errors.tokenId ? "error-msg" : ""}`}>
            <div className='col-md-3 p-3'>
              <form className='form-details'>
                <div className='form-group'>
                  <label htmlFor='cf'>{customConfiguration[0].value}</label>
                </div>
              </form>
            </div>
            <div className='col-md-8 p-3'>
              <form className='form-details'>
                <div className='form-group'>
                  <input
                    type='text'
                    className='form-control'
                    id='cs'
                    name='tokenId'
                    value={customConfiguration[4].value}
                    onChange={(e) => {
                      updateData(e, "4");
                    }}
                    onBlur={checkValidation}
                  />
                  {errors.tokenId && (
                    <span className='error-message'>This is required</span>
                  )}
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default React.memo(CustomConfiguration);
