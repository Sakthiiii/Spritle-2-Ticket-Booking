import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../Header";
import "./index.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState("");

  const onSubmitLogin = (e) => {
    e.preventDefault();
    const loginDetails = JSON.parse(localStorage.getItem("data"));
    const LoginSuccess = loginDetails.filter(
      (user) => user.Email === email && user.Password === password
    );

    if (LoginSuccess.length === 1) {
   

      navigate("/booking-page");
    } else {
      toast("Invalid email OR password");
    }
  };

  return (
    <>
      <Header />
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <div className='bodys'>
      <div className="agent-login-main-container">
        <div className="agent-login-sub-container">
          <h1 className="login-heading">Agent Login</h1>
          <form onSubmit={onSubmitLogin} className="agent-login-form">
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter valid email"
              className="agent-login-input"
              type="text"
            />
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter Password"
              className="agent-login-input"
              type="password"
            />
            <button className="login-btn" type="submit">
              <span></span>
              Login
            </button>
            <p className="err">{err}</p>
          </form>
        </div>
      </div>
      </div>
    </>
  );
};

export default Login;
