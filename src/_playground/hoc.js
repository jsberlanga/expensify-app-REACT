// Higher Order Component (HOC) - A component (HOC) that renders another (regular) component.
// Some benefits of using HOC:
// Reuse code
// Render hijacking
// Prop manipulation
// Abstract state

import React from 'react';
import ReactDOM from 'react-dom'

const Info = (props) => (
  <div>
    <h1>Info</h1>
    <p>The info is: {props.info}</p>
  </div>
);

const withAdminWarning = (WrappedComponent) => {
  return (props) => (
    <div>
      {props.isAdmin && <p>This is private info. Do not share!</p>}
      <WrappedComponent {...props} />
    </div>
  );
};

const requireAuthentication = (WrappedComponent) => {
  return (props) => (
    <div>
      {props.isAuthenticated ? (
        <WrappedComponent {...props} />
       ) : (
         <p>Please log in.</p>
       )}
    </div>
  )
};

const withStudentMessage = (WrappedComponent) => {
  return (props) => (
    <div>
      { props.isStudent && <h3>Remember that you have access to the library.</h3> }
      <WrappedComponent {...props} />
    </div>
  )
};



const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthentication(Info);
const StudentInfo = withStudentMessage(Info);

// ReactDOM.render(<AdminInfo isAdmin={true} info="these are the details" />, document.getElementById('app'));
ReactDOM.render(<AuthInfo isAuthenticated={false} info="these are the details" />, document.getElementById('app'));
// ReactDOM.render(<StudentInfo isStudent={true} info="Here are some details" />, document.getElementById('app'));
