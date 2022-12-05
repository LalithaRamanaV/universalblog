
import axios from "axios";
import { useContext, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";
import "./login.css";

export default function Login() {
  const userRef = useRef();
  const passwordRef = useRef();
  const { dispatch, isFetching } = useContext(Context);

  
  // eslint-disable-next-line no-unused-vars
  const [username, setUsername] = useState();
  // eslint-disable-next-line no-unused-vars
  const [password, setPassword] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await axios.post("/auth/login", {
        username: userRef.current.value,
        password: passwordRef.current.value,
      });
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
    } catch (err) {
      dispatch({ type: "LOGIN_FAILURE" });
    }
  };

  return (
    <div className="login">
      <span className="loginTitle">Login</span>
      <form className="loginForm" onSubmit={handleSubmit}>
        <label>Username</label>
        <input
          type="text"
          className="loginInput"
          value={username}
          placeholder="Enter your username..."
          ref={userRef}
        />
        <label>Password</label>
        <input
          type="password"
          value={password}
          className="loginInput"
          placeholder="Enter your password..."
          ref={passwordRef}
        />
        <button className="loginButton" type="submit" disabled={isFetching}>
          Login
        </button>
        <button className="loginButton" type="submit" 
        
         onClick={()=>{
          setUsername("test");
          setPassword("123456");
        }}
        >
          Demo Login
        </button>
        <label>Don't have account? <Link className="link" to="/register">
          Register
        </Link></label>
      </form>
      {/* <button className="loginRegisterButton">
        <Link className="link" to="/register">
          Register
        </Link>
      </button> */}
    </div>
  );
}
