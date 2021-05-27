import React from "react";
import "./style.scss";

function Layout({ children, classes = "" }) {
  const header = React.Children.map(children, (child) =>
    child.type.displayName === "Header" ? child : null
  );
  const body = React.Children.map(children, (child) =>
    child.type.displayName === "Body" ? child : null
  );
  return (
    <div className={`background-card-view ${classes}`}>
      <div className='strip'>
        <div className='row'>{header}</div>
      </div>
      {body}
    </div>
  );
}

const Header = ({ title, children }) => {
  return (
    <React.Fragment>
      <div className='col-md-6'>
        <p className='strip-heading'>{title}</p>
      </div>
      <div className='col-md-6'>{children}</div>
    </React.Fragment>
  );
};
Header.displayName = "Header";
Layout.Header = Header;

const Body = ({ children }) => <div className='card-body'>{children}</div>;
Body.displayName = "Body";
Layout.Body = Body;

export default Layout;
