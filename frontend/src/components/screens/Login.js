import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="container ">
      <div className="card ">
        <h2>Friendster</h2>
        <input placeholder="Enter Email" type="text" />
        <input placeholder="Enter Password" type="password" />
        <button className="btn waves-effect waves-light">Login</button>
        <h5>
          <Link to="/signup">Don't have an account?</Link>
        </h5>
      </div>
    </div>
  );
};

export default Login;
