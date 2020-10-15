import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";

import {login} from './redux/actions'

const Login = ({login, user}) => {
  const [userData, setUserData] = useState({
    username: "",
    password: "",
  });

  const handleChange = (event) =>
    setUserData({ ...userData, [event.target.name]: event.target.value });

  const handleSubmit = (event) => {
    event.preventDefault();
    login(userData)
  };

  const { username, password } = userData;

  if (user) return <Redirect to='/' />

  return (
    <div className="col-6 mx-auto">
      <div className="card my-5">
        <div className="card-body">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                className="form-control"
                id="username"
                value={username}
                name="username"
                placeholder="Username"
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                className="form-control"
                id="password"
                value={password}
                name="password"
                placeholder="Password"
                onChange={handleChange}
              />
            </div>

            <button type="submit" className="btn btn-primary">
              Login
            </button>
            <Link to="/signup" className="btn btn-link my-2 my-sm-0">
              Signup for an account
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = ({user}) => ({user})
const mapDispatchToProps = dispatch =>  ({
  login :  (userData) => dispatch(login(userData))
})
export default connect(mapStateToProps, mapDispatchToProps)(Login);
