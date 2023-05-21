import axios from "axios";
import { useState } from "react";
import styled from "styled-components";
import { handlePassword } from "../../action/user";

function Register() {
  const [email, setEmail] = useState("");
  const [retypeEmail, setRetypeEmail] = useState("");
  const [password, setPassword] = useState("");
  const [retypePassword, setretypePassword] = useState("");
  const [error, setEroor] = useState("success");
  const [checkEmail, setCheckemail] = useState("success");
  console.log(email, retypeEmail);
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleretypeEmail = (e) => {
    setRetypeEmail(e.target.value);
    if (e.target.value === email) {
      setCheckemail("failure");
    } else {
      setCheckemail("success");
    }
  };
  const handlePasswords = (e) => {
    setPassword(e.target.value);
  };
  const handleretypePassword = (e) => {
    setretypePassword(e.target.value);
  };
  const handleSubmitRegister = async () => {
    let data = await axios.post("http://localhost:8080/api/CreateUser", {
      email,
      password,
    });
    setEmail("");
    setRetypeEmail("");
    setPassword("");
    setretypePassword("");
    setEroor(data.data.message);
    
  };

  return (
    <div>
      <Registers>
        <div className="app-container">
          <div className="container-email">
            <input
              type="text"
              placeholder="Email"
              name="email"
              className="input"
              onChange={handleEmail}
              value={email}
            />
            <div
              className="password-error"
              style={{ display: error == "success" ? "none" : "block" }}
            >
              <h5>Incorrect email</h5>
            </div>
          </div>
          <div className="container-email">
            <input
              type="text"
              placeholder="Nhập lại email của bạn"
              name="email"
              className="input"
              onChange={handleretypeEmail}
              value={retypeEmail}
            />
            <div
              className="password-error"
              style={{ display: checkEmail == "success" ? "none" : "block" }}
            >
              <h5>email does not match</h5>
            </div>
          </div>
          <div className="container-email">
            <input
              type="text"
              placeholder="Mật Khẩu"
              name="Password"
              className="input"
              onChange={handlePasswords}
              value={password}
            />
          </div>
          <div className="app-Password">
            <input
              placeholder="Nhập lại mật khẩu"
              name="Password"
              className="Password"
              onChange={handleretypePassword}
              value={retypePassword}
            />

            <div className="password-error">
              <h5>Incorrect email or password</h5>
            </div>
          </div>

          <div className="container-btn">
            <button className="btn"></button>
            <a className="btn-login" onClick={handleSubmitRegister}>
              Đăng Ký
            </a>
          </div>
        </div>
      </Registers>
    </div>
  );
}

export default Register;
const Registers = styled.div`
  .container-email {
    margin-top: 50px;
  }
  .container-email {
    position: relative;
    .password-error {
      position: absolute;
      display: none;
      bottom: -84%;
      width: 100%;
      right: 33%;
      h5 {
        font-size: 0.88rem;
        color: #ff0101;
        font-weight: 400;
      }
    }
  }
`;
