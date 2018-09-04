// Higher order component (HOC)
import React from "react";
import ReactDOM from "react-dom";

const Info = props => {
  return (
    <div>
      <h1>Info</h1>
      <p>The info is: {props.text}</p>
    </div>
  );
};

const withAdminWarning = WrappedComponent => {
  return props => (
    <div>
      {props.isAdmin ? <p>Lorem ipsum dolor sit amet...</p> : null}
      <WrappedComponent {...props} />
    </div>
  );
};

const AdminInfo = withAdminWarning(Info);

const OtherInfo = (props) => {
  return (<p>{props.text}</p>)
}

const requireAuthentication = WrappedComponent => {
  return props => (
    <div>
      {props.isAuthenticated ? <WrappedComponent {...props} /> : 'login to see info...'}
    </div>
  );
};

const AuthInfo = requireAuthentication(Info);

// ReactDOM.render(
//   <AdminInfo isAdmin={true} text="There are the details" />,
//   document.getElementById("app")
// );
ReactDOM.render(
  <AuthInfo isAuthenticated={true} text=" these are the details..." />,
  document.getElementById("app")
);
