import styled from "styled-components";
import { BsChevronRight } from "react-icons/bs";
import axios from "axios";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import {
  handlEmail,
  handlePassword,
  handleresdata,
  handleToken,
} from "../../action/user";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import Register from "../Login/Register";
import { toast, ToastContainer } from "react-toastify";
function Login() {
  let dispatch = useDispatch();
  const [password, setPassword] = useState(true);
  const [icon, setIcon] = useState(true);
  const [register, setRegister] = useState(false);
  let dataEmail = useSelector((state) => state.input.email);
  let datapassword = useSelector((state) => state.input.password);
  let resDatauser = useSelector((state) => state.user.users);
  let resTokenUser = useSelector((state) => state.user.Token);
  console.log("check", resTokenUser);
  const navigate = useNavigate();
  let path = "/userAll";

  const handleemail = (e) => {
    let action = handlEmail(e.target.value);
    dispatch(action);
    setPassword(true);
  };

  const handlesubmitdata = async () => {
    console.log('không lọt vào hàm token' )
    await axios
      .post("http://localhost:8080/api/loginUser", {
        email: dataEmail,
        password: datapassword,
      })
      .then(async (res) => {
        if (res) {
          console.log(res);
          let action = handleresdata(res.data.user);
          dispatch(action);
          setPassword(res.data.user);
          let actionGetToken = handleToken(res.data.token);
          dispatch(actionGetToken);
        } else {
          console.log("error");
          toast.error("error");
        }
      })
      .catch((error) => {
        console.log(error);
      });
    if (resTokenUser.accessToken) {
      console.log('đã lọt vào hàm token' )
      let accessTokenClient = resTokenUser.accessToken;
      await axios.post("http://localhost:8080/api/loginUser", {
        headers: {
          authorization: `Bearer ${accessTokenClient}`,
        },
      });
    } else {
      console.log('đã lọt vào hàm refresh token' )
      let RefreshTokenClient = resTokenUser.RefreshToken;
      await axios.post("http://localhost:8080/api/Veryfy", {
        headers: {
          authorization: `Bearer ${RefreshTokenClient}`,
        },
      });
    }
  };

  useEffect(() => {
    if (resDatauser) {
      navigate(path);
    }
  }, [resDatauser]);

  const handlepassword = (e) => {
    let action = handlePassword(e.target.value);
    dispatch(action);
    setPassword(true);
  };
  const handleIcon = () => {
    setIcon((pre) => !pre);
  };
  const handleRegister = () => {
    setRegister((pre) => !pre);
  };
  const handleLoginwithGoogle = async () => {
    await axios.get("http://localhost:8080/auth/google");
  };
  return (
    <div>
      <LoginContent>
        <ToastContainer />
        <div style={{ height: "120px" }}>
          <img
            src="https://static.parastorage.com/services/login-statics/1.2675.0/images/wix-logo.svg"
            alt="logo"
          />
        </div>
        <div className="app">
          <div className="sub-app">
            <h1 className="title">Đăng Nhập</h1>
            <div className="container-text">
              <p className="content-text">Bạn chưa có tài khoản?</p>
              <span className="text-title" onClick={handleRegister}>
                {register ? "Đăng Nhập" : "Đăng Ký"}
              </span>
            </div>
          </div>
          <div>
            <div className="main">
              {!register ? (
                <div className="app-container">
                  <div className="container-email">
                    <input
                      type="text"
                      placeholder="Email"
                      name="email"
                      className="input"
                      onChange={handleemail}
                      value={dataEmail}
                    />
                  </div>
                  <div className="app-Password">
                    <input
                      type={icon ? "Password" : "text"}
                      placeholder="Password"
                      name="Password"
                      className="Password"
                      onChange={handlepassword}
                      value={datapassword}
                    />
                    {icon ? (
                      <AiFillEyeInvisible
                        className="icon-eye"
                        onClick={handleIcon}
                      />
                    ) : (
                      <AiFillEye className="icon-eye" onClick={handleIcon} />
                    )}
                    <div
                      className="password-error"
                      style={{ display: password ? "none" : "block" }}
                    >
                      <h5>Incorrect email or password</h5>
                    </div>
                  </div>
                  <div className="container">
                    <div className="container-title">
                      <input
                        type="checkbox"
                        name="checkbox"
                        className="checkbox"
                      />
                      <span style={{ color: "#20303c" }}>Ghi nhớ tôi</span>
                    </div>
                    <div className="container-sub">
                      <p className="text-container">Bạn đã quên email?</p>
                    </div>
                  </div>
                  <div className="container-btn">
                    <button className="btn">
                      Tiếp tục với Email
                      <BsChevronRight className="icon-right" />
                    </button>
                    <a className="btn-login" onClick={handlesubmitdata}>
                      Đăng Nhập
                    </a>
                  </div>
                </div>
              ) : (
                <Register />
              )}
              <div className="app-or">
                <div className="or-text">Hoặc</div>
                <div className="before"></div>
                <div className="after"></div>
              </div>
              <div
                className="app-google"
                style={
                  register
                    ? { display: "flex", flexFlow: "column" }
                    : { display: "" }
                }
              >
                <div
                  style={
                    register
                      ? {
                          flexBasis: "50%",
                          display: "flex",
                          flexDirection: "column-reverse",
                        }
                      : {}
                  }
                >
                  <div className="btn-image">
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/2008px-Google_%22G%22_Logo.svg.png"
                      alt="logo-google"
                      className="logo-google"
                    />
                    <span
                      className="text-google"
                      onClick={handleLoginwithGoogle}
                    >
                      Tiếp tục với Google
                    </span>
                  </div>
                </div>
                <div
                  style={{
                    flexBasis: register ? "50%" : "0",
                  }}
                >
                  <div className="btn-facebook">
                    <img
                      src="https://1.bp.blogspot.com/-xKSHIGIWVWw/X8nZ7UZCHYI/AAAAAAAALBs/aih3kRhHrnsR_-GLju2gP2PK_faM_nNsACPcBGAYYCw/s600/Beautiful-design-Facebook-logo-social-media-png.png"
                      alt="logo-google"
                      className="logo-facebook"
                    />
                    <span className="text-facebook">Tiếp tục với Facebook</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div style={{ marginTop: "80px", textAlign: "center" }}>
          <div>
            <div>
              <a
                href="https://www.wix.com/about/terms-of-use"
                style={{
                  color: "#595D70",
                  textDecoration: "underline",
                  cursor: "pointer",
                }}
              >
                Điều khoản sử dụng
              </a>
              <a
                href="https://www.wix.com/about/privacy"
                style={{
                  color: "#595D70",
                  marginLeft: "20px",
                  textDecoration: "underline",
                  cursor: "pointer",
                }}
              >
                Chính sách quyền riêng tư
              </a>
            </div>
            <div></div>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "7px",
            }}
          >
            <p style={{ color: "#595D70" }}>
              Trang web này được bảo vệ bởi reCAPTCHA Enterprise. Áp dụng
            </p>
            <a
              href="https://policies.google.com/privacy"
              style={{
                color: "#595D70",
                marginLeft: "5px",
                textDecoration: "underline",
                marginRight: "5px",
                cursor: "pointer",
              }}
            >
              Chính sách quyền riêng tư
            </a>
            và
            <a
              href="https://policies.google.com/terms"
              style={{
                color: "#595D70",
                textDecoration: "underline",
                marginLeft: "5px",
                marginRight: "5px",
                cursor: "pointer",
              }}
            >
              Điều khoản sử dụng
            </a>{" "}
            của google
          </div>
        </div>
      </LoginContent>
    </div>
  );
}

export default Login;
let LoginContent = styled.div`
  padding: 10px;
  margin: 10px 0 0 35px;

  .main {
    display: flex;
    justify-content: center;
  }
  .sub-app {
    margin-bottom: 70px;
  }
  .app {
    margin-top: 70px;
    text-align: center;
    .title {
      font-size: 3.5rem;
    }
    .container-text {
      margin-bottom: 20px;
      .content-text {
        margin-right: 5px;
        display: inline-block;
        margin-top: 17px;
        font-size: 1.2rem;
        font-weight: 400;
        color: #20303c;
      }
      .text-title {
        font-size: 1.2rem;
        font-weight: 400;
        color: #116dff;
        cursor: pointer;
        &:hover {
          opacity: 0.8;
        }
      }
    }
  }
  .input {
    border: none;
    border-bottom: 1px solid #e1e1e1;
    outline: none;
    padding: 1px 2px 11px 10px;
    font-size: 1.2rem;
    width: 320px;
    box-shadow: 0 0 0 1000px #fff inset;
  }
  .app-Password {
    position: relative;
    margin-top: 50px;
    .Password {
      box-shadow: 0 0 0 1000px #fff inset;
      border: none;
      border-bottom: 1px solid #e1e1e1;
      outline: none;
      padding: 1px 2px 11px 10px;
      font-size: 1.2rem;
      width: 320px;
    }
    .password-error {
      position: absolute;
      display: none;
      bottom: -84%;
      width: 100%;
      right: 19%;
      h5 {
        font-size: 0.88rem;
        color: #ff0101;
        font-weight: 400;
      }
    }
    .icon-eye {
      position: absolute;
      right: 5%;
      top: 7%;
      font-size: 1.4rem;
      &:hover {
        cursor: pointer;
        opacity: 0.9;
      }
    }
  }
  .container {
    margin-top: 50px;
    display: flex;
    justify-content: center;
    .container-title {
      margin-right: 100px;
      .checkbox {
        margin-right: 3px;
        transform: translateY(1px);
        border-color: #116dff;
        background-color: #fcfcfc;
        &:hover {
          cursor: pointer;
        }
      }
    }
    .container-sub {
      .text-container {
        color: #20303c;
        &:hover {
          color: #116dff;
          cursor: pointer;
        }
      }
    }
  }
  .container-btn {
    padding-top: 50px;
    display: inline-block;
    margin-right: 140px;
    .btn {
      display: none;
      border: 1px solid #116dff;
      padding: 10px 34px 10px 24px;
      position: relative;
      color: #116dff;
      background-color: #fff;
      border-radius: 999px;
      .icon-right {
        font-size: 0.88rem;
        top: 30%;
        position: absolute;
        right: 7%;
      }
    }
  }
  .btn-login {
    border: 1px solid #116dff;
    padding: 10px 24px;
    position: relative;
    color: #116dff;
    background-color: #fff;
    border-radius: 999px;
    &:hover {
      transition: 0.5s all;
      background-color: #116dff;
      cursor: pointer;
      color: #fff;
    }
  }
  .app-or {
    margin: 0 100px 0 80px;
    display: flex;
    align-items: center;
    position: relative;
    .or-text {
      color: #b9b9bd;
      font-size: 0.88rem;
    }
    .before {
      position: absolute;
      width: 1px;
      height: 50%;
      background-color: #b9b9bd;
      top: -5%;
      right: 42%;
    }
    .after {
      position: absolute;
      width: 1px;
      height: 50%;
      background-color: #b9b9bd;
      bottom: -5%;
      right: 42%;
    }
  }

  .btn-image {
    display: flex;
    align-items: center;
    margin-bottom: 15px;
    &:hover {
      cursor: pointer;
    }
    .logo-google {
      max-width: 50px;
      padding: 15px;
      border: 1px solid #4285f4;
    }
    .text-google {
      padding: 16px 70px;
      background-color: #4285f4;
      color: #fff;
      font-size: 0.88rem;
    }
  }
  .btn-facebook {
    display: flex;
    align-items: center;
    &:hover {
      cursor: pointer;
    }
    .logo-facebook {
      max-width: 51px;
      padding: 5px;
      border: 1px solid #4285f4;
    }
    .text-facebook {
      padding: 16px 63px;
      background-color: #3a5ba2;
      color: #fff;
      font-size: 0.88rem;
    }
  }
  .container-email {
    position: relative;
    .email-error {
      display: none;
      position: absolute;
      bottom: -69%;
      left: 5%;
      h5 {
        font-size: 0.88rem;
        color: #ff0101;
        font-weight: 400;
      }
    }
  }
`;
