import React from "react";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div className="container ">
      <div className="card ">
        <h2>Friendster</h2>
        <input placeholder="Enter Name" type="text" />
        <input placeholder="Enter Email" type="text" />
        <input placeholder="Enter Password" type="password" />
        <button className="btn waves-effect waves-light">Signup</button>

        <h5>
          <Link to="/login">Already have an account?</Link>
        </h5>
      </div>
    </div>
  );
};

export default Signup;
