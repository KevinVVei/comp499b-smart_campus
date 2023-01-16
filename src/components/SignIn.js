import { useRef, useState, useEffect } from "react";
import React from "react";
import { FaCheck, FaTimes, FaInfoCircle } from "react-icons/fa";
import "./Styles/SignUp.css";

const user_Regex = /^[a-zA-Z0-9]{5,20}$/;
const pwd_Regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,20})/;

const SignIn = () => {
  const userRef = useRef();
  const errRef = useRef();

  const [user, setUser] = useState("");
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
    userRef.current.focus();
  }, []);

  useEffect(() => {
    const result = user_Regex.test(user);
    console.log(result);
    console.log(user);
    setValidUserN(result);
  }, [user]);

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
  }, [user, pwd, matchPwd]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userInput = user_Regex.test(user);
    const pwdInput = pwd_Regex.test(pwd);
    if(!userInput || !pwdInput) {
      setErrMsg("Please enter a valid username and password");
      return;
    } else {
      setSuccess(true);
    }
  };

  return (
    <>
      {success ? (
        <section>
          <h1>Success!</h1>
          <p><a href="/SignIn">Sign In</a>
          </p>
        </section>
      ) : (
        <section>
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
              <span className={validUserN || !user ? "hide" : "invalid"}>
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
            <p id="uidNote" className={userNFocus && user && !validUserN ? "instructions" : "offscreen"}>
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
              <span aria-label="percent">%</span><span aria-label="dont know name">&</span>
            </p>
            <button type="submit">Sign In</button>
            </form>
            <span>Don't have an account?</span>
          <span><a href='/SignUp'>Sign Up</a></span>
        </section>
      )}
    </>
  )
}

export default SignIn;