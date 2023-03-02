import React, { useRef, useState, useEffect } from "react";
import { FaCheck, FaTimes, FaInfoCircle } from "react-icons/fa";
import { Link } from 'react-router-dom';
import Axios from 'axios';
import "./Styles/SignUp.css";

const email_Regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
const user_Regex = /^[a-zA-Z0-9]{5,20}$/;
const pwd_Regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_-])(?=.{8,20})/;

function SignUp() {

  const [usersData, setUsersData] = useState([]);

  {/*on first render this gets the data loaded from the api at the specified link and stores it into the eventData array*/}
  useEffect(() => {
    Axios.get('http://localhost:4000/api/users').then(response => {
      setUsersData(response.data);
    });
  }, []); 

  const emailRef = useRef();
  const userRef = useRef();
  const errRef = useRef();

  const [email, setEmail] = useState("");
  const [validEmailN, setValidEmailN] = useState(false);

  const [usern, setUser] = useState("");
  const [validUserN, setValidUserN] = useState(false);
  const [userNFocus, setUserNFocus] = useState(false);

  const [pwd, setPwd] = useState("");
  const [validPwd, setValidPwd] = useState(false);
  const [pwdFocus, setPwdFocus] = useState(false);

  const [matchPwd, setMatchPwd] = useState("");
  const [validMatch, setValidMatch] = useState(false);
  const [matchFocus, setMatchFocus] = useState(false);

  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    emailRef.current.focus();
  }, []);

  useEffect(() => {
    const result = email_Regex.test(email);
    console.log(result);
    console.log(email);
    setValidEmailN(result);
  }, [email]);

  useEffect(() => {
    const result = user_Regex.test(usern);
    console.log(result);
    console.log(usern);
    setValidUserN(result);
  }, [usern]);

  useEffect(() => {
    const result = pwd_Regex.test(pwd);
    console.log(result);
    console.log(pwd);
    setValidPwd(result);
    const match = pwd === matchPwd;
    setValidMatch(match);
  }, [pwd, matchPwd]);

  useEffect(() => {
    setErrMsg("");
  }, [email, usern, pwd, matchPwd]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const emailInput = email_Regex.test(email);
    const userInput = user_Regex.test(usern);
    const pwdInput = pwd_Regex.test(pwd);

    if(!emailInput || !userInput || !pwdInput) {
      setErrMsg("Please enter a valid email, username and password");
      return;
    } else {
      {/*checks the data from the api for the appearance of a user with the inputted email and username. they return true if a match is found*/}
      const emailMatch = usersData.some(element => element.email === email);
      const usernameMatch = usersData.some(element => element.username === usern);

      {/*adds user to database or outputs message informing an inputs in use*/}
      if(!emailMatch && !usernameMatch){
        Axios.post('http://localhost:4000/api/insertuser', {email: email, usern: usern, pwd: pwd});

        setSuccess(true);
      } else {
        if(!emailMatch && usernameMatch){
          alert("username in use");
        } 
        else if (emailMatch && !usernameMatch){
          alert("email in use");
        } 
        else {
          alert("email and username in use");
        }
      }
    }
  };

  return (
    <div className="register-form">
      {success ? (
        <section className="success">
          <h1>Successfully registerd account!</h1>
          <p><Link to="/SignIn">Sign In</Link>
          </p>
        </section>
      ) : (
        <section id="signup">
          <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">
            {errMsg}
          </p>
          <h1>Register</h1>
          <form onSubmit={handleSubmit}>
            {/* Email */}
            <label htmlFor="username">
              Email:
              {/* if the email is valid, the icon will be green, otherwise it will be red */}
              <span className={validEmailN ? "valid" : "hide"}>
                <FaCheck />
              </span>
              {/* if the email is valid and empty, the error icon will be hidden */}
              <span className={validEmailN || !email ? "hide" : "invalid"}>
                <FaTimes />
              </span>
            </label>
            <input
              type="text"
              id="email"
              ref={emailRef}
              autoComplete="off"
              onChange={(e => setEmail(e.target.value))}
              required
              aria-invalid={validEmailN ? "false" : "true"}
              aria-describedby="uidnote"
            />

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

            <label htmlFor="confirm_pwd">
              Confirm Password:
              {/* if the user name is valid, the icon will be green, otherwise it will be red */}
              <span className={validMatch && matchPwd ? "valid" : "hide"}>
                <FaCheck />
              </span>
              {/* if the username is valid and empty, the error icon will be hidden */}
              <span className={validMatch || !matchPwd ? "hide" : "invalid"}>
                <FaTimes />
              </span>
            </label>
            <input
              type="password"
              id="confirm_pwd"
              onChange={(e => setMatchPwd(e.target.value))}
              required
              aria-invalid={validMatch ? "false" : "true"}
              aria-describedby="confirmNote"
              onFocus={() => setMatchFocus(true)}
              onBlur={() => setMatchFocus(false)}
            />
            {/* if the focus in on username input, user is typing not empty, and the username is not valid, then display the error message, otherwise errmsg go away */}
            <p id="confirmNote" className={matchFocus && !validMatch ? "instructions" : "offscreen"}>
              <FaInfoCircle />
              Must match the password input field.
            </p>
              <button className="submit-btn" disabled={!validUserN || !validPwd || !validMatch ? true : false}>
                Sign Up
              </button>
          </form>
          <span>Already has an account?</span>
          <span><Link to='/SignIn'>Sign In</Link></span>
        </section>
      )}
    </div>
  )
}

export default SignUp;