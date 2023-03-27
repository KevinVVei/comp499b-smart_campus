import React, { useRef, useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import { FaCheck, FaTimes, FaInfoCircle } from "react-icons/fa";
import Axios from 'axios';
import "./Styles/SignIn.css";

const user_Regex = /^[a-zA-Z0-9]{5,20}$/;
const pwd_Regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_-])(?=.{8,20})/;

function SignIn () {

  const [usersData, setUsersData] = useState([]);

  const userRef = useRef();
  const errRef = useRef();

  const [usern, setUser] = useState("");
  const [validUserN, setValidUserN] = useState(false);
  const [userNFocus, setUserNFocus] = useState(false);

  const [pwd, setPwd] = useState("");
  const [validPwd, setValidPwd] = useState(false);
  const [pwdFocus, setPwdFocus] = useState(false);

  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);
  const [token, setToken] = useState();

  // focus on username input
  useEffect(() => {
    userRef.current.focus();
  }, []);

  // check if username is valid
  useEffect(() => {
    const result = user_Regex.test(usern);
    // console.log(result);
    // console.log(usern);
    setValidUserN(result);
  }, [usern]);

  // check if password is valid
  useEffect(() => {
    const result = pwd_Regex.test(pwd);
    // console.log(result);
    // console.log(pwd);
    setValidPwd(result);
  }, [pwd]);

  // prompt error message if username or password is invalid
  useEffect(() => {
    setErrMsg("");
  }, [usern, pwd]);

  // check if username and password are valid and send to server for authentication
  const handleSubmit = async (e) => {
    e.preventDefault();
    const userInput = user_Regex.test(usern);
    const pwdInput = pwd_Regex.test(pwd);

    if(!userInput || !pwdInput) {
      setErrMsg("Please enter a valid username and password");
      return;
    } else {

      Axios.post('http://localhost:4000/api/SignIn', {
        usern: usern,
        pwd: pwd,
      })
      .then(response => {
        if(response.data.message){
          alert(response.data.message);
        } else {
          setSuccess(true);
          setToken(response.data.token);
          sessionStorage.setItem('token', response.data.token);
          sessionStorage.setItem('user', usern);
        }
      })
      .catch(err=> {
        console.log(err)
      });
    }
  };

  return (
    <div className="signin-form">
      {success ? (
        <section className="success">
          <h1>Success!</h1>
          <span>2 seconds to refresh</span>
          <p><Link to='/'
            onClick={setTimeout(() => window.location.reload() , 2000)}
            >Home</Link>
          </p>
        </section>
      ) : (
        <section id="form-container">
          <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">
            {errMsg}
          </p>
          <h1>Sign In</h1>
          <form onSubmit={handleSubmit}>
            {/* Username */}
            <label htmlFor="username">
              Username:
              {/* if the user name is valid, the icon will be green, otherwise it will be red */}
              <span className={validUserN ? "valid" : "hide"}>
                <FaCheck />
              </span>
              {/* if the username is valid and empty, the error icon will be hidden */}
              <span className={validUserN || !usern ? "hide" : "invalid"}>
                <FaTimes />
              </span>
            </label>
            <input
              type="text"
              id="username"
              ref={userRef}
              autoComplete="off"
              onChange={(e => setUser(e.target.value))}
              required
              aria-invalid={validUserN ? "false" : "true"}
              aria-describedby="uidnote"
              onFocus={() => setUserNFocus(true)}
              onBlur={() => setUserNFocus(false)}
            />
            {/* if the focus in on username input, user is typing not empty, and the username is not valid, then display the error message, otherwise errmsg go away */}
            <p id="uidNote" className={userNFocus && usern && !validUserN ? "instructions" : "offscreen"}>
              <FaInfoCircle />
              5 to 20 characters. <br />
              Must begin with letter.<br />
            </p>

            {/* Password */}
            <label htmlFor="password">
              Password:
              {/* if the user name is valid, the icon will be green, otherwise it will be red */}
              <span className={validPwd ? "valid" : "hide"}>
                <FaCheck />
              </span>
              {/* if the username is valid and empty, the error icon will be hidden */}
              <span className={validPwd || !pwd ? "hide" : "invalid"}>
                <FaTimes />
              </span>
            </label>
            <input
              type="password"
              id="password"
              onChange={(e => setPwd(e.target.value))}
              required
              autoComplete="off"
              aria-invalid={validPwd ? "false" : "true"}
              aria-describedby="pwdNote"
              onFocus={() => setPwdFocus(true)}
              onBlur={() => setPwdFocus(false)}
            />
            {/* if the focus in on username input, user is typing not empty, and the username is not valid, then display the error message, otherwise errmsg go away */}
            <p id="pwdNote" className={pwdFocus && !validPwd ? "instructions" : "offscreen"}>
              <FaInfoCircle />
              8 to 20 characters. <br />
              Must contain at least one uppercase letter, one lowercase letter, one number, and one special character.<br />
              Allowed special characters: <span aria-label="exclamation mark">!</span><span aria-label="at mark">@</span><span aria-label="hashtag">#</span>
              <span aria-label="percent">%</span><span aria-label="dont know name">&<span aria-label="underscore">_<span aria-label="dash">-</span></span></span>
            </p>
            <button className="submit-btn" type="submit" >Sign In</button>
            </form>
            <span>Don't have an account?</span>
          <span><Link to='/SignUp'>Sign Up</Link></span>
        </section>
      )}
    </div>
  )
}

export default SignIn;