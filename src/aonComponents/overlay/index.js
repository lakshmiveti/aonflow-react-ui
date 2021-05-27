import React from "react";
import "./style.scss";

const Overlay = ({ classes = "", children }) => {
  const header = React.Children.map(children, (child) =>
    child.type.displayName === "Header" ? child : null
  );
  const body = React.Children.map(children, (child) =>
    child.type.displayName === "Body" ? child : null
  );
  const footer = React.Children.map(children, (child) =>
    child.type.displayName === "Footer" ? child : null
  );

  return (
    <div
      className='modal fade show'
      id='exampleModal'
      tabIndex={-1}
      aria-labelledby='exampleModalLabel'
      aria-hidden='true'
    >
      <div
        className={`modal-dialog modal-style connection-success-popup w-75 ${classes}`}
      >
        <div className='modal-content'>
          {header}
          {body}
          {footer}
        </div>
      </div>
    </div>
  );
};

const Header = ({ title, classes = "", handler = () => {} }) => {
  return (
    <React.Fragment>
      <div className={`modal-header ${classes}`}>
        <h5 className='modal-title popup-title' id='exampleModalLabel'>
          {title}
        </h5>
        <button
          type='button'
          className='btn-close popup-close-btn'
          onClick={handler}
        ></button>
      </div>
    </React.Fragment>
  );
};
Header.displayName = "Header";
Overlay.Header = Header;

const Body = ({ classes = "", children }) => {
  return <div className={`modal-body ${classes}`}>{children}</div>;
};
Body.displayName = "Body";
Overlay.Body = Body;

const Footer = ({ classes = "", children }) => {
  return <div className={`modal-footer ${classes}`}>{children}</div>;
};
Footer.displayName = "Footer";
Overlay.Footer = Footer;

export default Overlay;
