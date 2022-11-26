import { Route } from 'react-router-dom';
import './Signin.css';
import {useNavigate} from "react-router-dom";



function Signin() {
  function handleLogin() {
    const navigate = useNavigate();

    function handleLogin(event) {
  
      // console.log(JSON.stringify(user));
      // redirect to login.
      navigate("/signin");
    }
  }

  return (
    <div className="container">
      <h3>Please login.</h3>
      <form onSubmit={handleLogin} className="login-form" action="">
        <div className="mb-3">
          <label className="form-label" htmlFor="">
            Email
          </label>
          <input type="email" className="form-control" />
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="">
            Password
          </label>
          <input type="password" className="form-control" />
        </div>

        <button type="submit" className="float-end btn btn-primary">
          Sign In
        </button>
      </form>
    </div>
  );
}

export default Signin;