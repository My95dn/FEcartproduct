import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getUserall } from "..//..//action/user";
import axios from "axios";
import { useMemo } from "react";
import { CiUser } from "react-icons/ci";
import { AiOutlineMail, AiFillCloseCircle, AiFillDelete } from "react-icons/ai";
import {
  BsFillKeyFill,
  BsFillTelephoneFill,
  BsGenderAmbiguous,
  BsFillPenFill,
} from "react-icons/bs";
import { useState } from "react";
import {
  handleCreatefirstName,
  handleCreatelastName,
  handleCreateEmail,
  handleCreatePhonenumber,
  handleCreateGender,
  handleEditdata,
  handleeditFirstName,
  handleEditLastName,
  handleEditEmail,
  handleEditPhone,
  handleEditGender,
} from "../../action/user";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function UserAll() {
  let dispatch = useDispatch();
  let data = useSelector((state) => state.user.userAll);
 
  let datafirstName = useSelector((state) => state.input.firstName);
  let dataLastName = useSelector((state) => state.input.lastName);
  let dataEmail = useSelector((state) => state.input.CreateEmail);
  let dataPhoneNumber = useSelector((state) => state.input.phoneNumber);
  let dataGender = useSelector((state) => state.input.gender);
  
  let dataUserEdit = useSelector((state) => state.input.dataEditUser);
  let dataEditFirstName = useSelector((state) => state.input.editFirstname);
  let dataEditLastName = useSelector((state) => state.input.editLastname);
  let dataEditEmail = useSelector((state) => state.input.editEmail);
  let dataEditPhone = useSelector((state) => state.input.editPhone);
  let dataEditGender = useSelector((state) => state.input.editGender);
  const [close, setClose] = useState(true);
  const [save, setSave] = useState(false);

  useEffect(() => {
    const handleTest = async () => {
      try {
        let userALL = await axios.get("http://localhost:8080/api/login");
        let data = userALL.data.dataUserAll;
        let action = getUserall(data);
        dispatch(action);
      } catch (e) {
        console.log(e);
      }
    };
    handleTest();
  }, []);
  const handleClose = () => {
    setClose(true);
  };
  const handleAdduser = () => {
    setClose((pre) => !pre);
  };
  const handleBlur = () => {
    setClose(true);
  };
  const handleFirstname = (e) => {
    let action = handleCreatefirstName(e.target.value);
    dispatch(action);
  };
  const handleLastName = (e) => {
    let action = handleCreatelastName(e.target.value);
    dispatch(action);
  };
  const handleEmail = (e) => {
    let action = handleCreateEmail(e.target.value);
    dispatch(action);
  };
  const handlePhone = (e) => {
    let action = handleCreatePhonenumber(e.target.value);
    dispatch(action);
  };
  const handleGender = (e) => {
    let action = handleCreateGender(e.target.value);
    dispatch(action);
  };
  const handleInput = () => {
    let actionFirstName = handleCreatefirstName("");
    dispatch(actionFirstName);
    let actionLastName = handleCreatelastName("");
    dispatch(actionLastName);
    let actionEmail = handleCreateEmail("");
    dispatch(actionEmail);
    let actionPhoneNumber = handleCreatePhonenumber("");
    dispatch(actionPhoneNumber);
    let actionGender = handleCreateGender("");
    dispatch(actionGender);
  };
  const handleCreateUser = async (e) => {
    e.preventDefault();
    setClose(true);
    let res = await axios.post("http://localhost:8080/api/CreateUser", {
      firstName: datafirstName,
      lastName: dataLastName,
      email: dataEmail,
      phoneNumber: dataPhoneNumber,
      gender: dataGender,
    });
    if (res.data.message == "success") {
      let data = await axios.get("http://localhost:8080/api/login");
      let dataUserALL = data.data.dataUserAll;
      
      let action = getUserall(dataUserALL);
      dispatch(action);
      handleInput();
      toast.success("success");
    } else {
      toast.error(
        "you have not entered your information or an email address already exists"
      );
      handleInput();
    }
  };
  const handleDelete = async (id) => {
    let resdata = await axios.delete("http://localhost:8080/api/deleteUsers", {
      data: {
        id: id,
      },
    });

    if (resdata.data.message == "success") {
      let userALL = await axios.get("http://localhost:8080/api/login");
      let data = userALL.data.dataUserAll;
      let action = getUserall(data);
      dispatch(action);
      toast.success("successful delete");
    }
  };
  const handleEdit = async (id) => {
    setSave(true);
    if (id) {
      let dataUserEdit = await axios.post("http://localhost:8080/api/getUser", {
        data: {
          id: id,
        },
      });
      let action = handleEditdata(dataUserEdit.data.dataUser);
      dispatch(action);
    } else {
      return alert("no id");
    }
  };
  const handleFirstnameEdit = (e) => {
    
    let action = handleeditFirstName(e.target.value.trim());
    dispatch(action);
  };
  const handleLastNameEdit = (e) => {
    let action = handleEditLastName(e.target.value.trim());
    dispatch(action);
  };
  const handleEmailEdit = (e) => {
    let action = handleEditEmail(e.target.value.trim());
    dispatch(action);
  };
  const handlePhoneEdit = (e) => {
    let action = handleEditPhone(e.target.value.trim());
    dispatch(action);
  };
  const handleGenderEdit = (e) => {
    let action = handleEditGender(e.target.value.trim());
    dispatch(action);
  };
  const handleCloseEdit = () => {
    setSave(false);
  };
  const handleEditUser = async (idUser) => {
    if (idUser) {
      let data = await axios.put("http://localhost:8080/api/editUser", {
        firstName: dataEditFirstName,
        lastName: dataEditLastName,
        email: dataEditEmail,
        phoneNumber: dataEditPhone,
        gender: dataEditGender,
        id: idUser,
      });
      
      if(data.data.message == 'failure') {
        toast.warning('Email already exists')
        setSave(false);
        return
      } 

      
      if (data.data.message == 'success') {
        toast.success("success");
        let userALL = await axios.get("http://localhost:8080/api/login");
        let data = userALL.data.dataUserAll;
        
        let action = getUserall(data);
        dispatch(action);
        setSave(false);
       
        
      } else {
        toast.error("failure");
      }
    } else {
      toast.error("no id");
    }
  };
  return (
    <div>
      <Table>
        <ToastContainer />
        <div className="header">
          <img
            src="https://static.parastorage.com/services/login-statics/1.2675.0/images/wix-logo.svg"
            alt="logo"
          />
          <h1 className="header-text">Administration System</h1>
        </div>
        <div>
          <div className="container">
            <div>
              <h1 className="text-h1">Manage list user</h1>
            </div>
            <div className="app-add">
              <button className="btn-user" onClick={handleAdduser}>
                Add user
              </button>
            </div>
          </div>
          <Module>
            <div
              className="blur"
              onClick={handleBlur}
              style={close ? { display: "none" } : { display: "block" }}
            ></div>
            <form
              className="form-Register"
              action="/action_page.php"
              style={close ? { display: "none" } : { display: "block" }}
            >
              <AiFillCloseCircle className="icon-close" onClick={handleClose} />
              <h2 className="text-form">Register Form</h2>
              <div className="input-container">
                <CiUser className="icon" />
                <input
                  className="input-field"
                  type="text"
                  placeholder="firstName"
                  name="usrnm"
                  onChange={handleFirstname}
                  value={datafirstName}
                />
              </div>
              <div className="input-container">
                <CiUser className="icon" />
                <input
                  className="input-field"
                  type="text"
                  placeholder="lastName"
                  name="usrnm"
                  onChange={handleLastName}
                  value={dataLastName}
                />
              </div>

              <div className="input-container">
                <AiOutlineMail className="icon" />
                <input
                  className="input-field"
                  type="email"
                  required
                  placeholder="email"
                  name="email"
                  onChange={handleEmail}
                  value={dataEmail}
                />
              </div>

              <div className="input-container">
                <BsFillTelephoneFill className="icon" />
                <input
                  className="input-field"
                  type="TEXT"
                  placeholder="phoneNumber"
                  name="psw"
                  onChange={handlePhone}
                  value={dataPhoneNumber}
                />
              </div>
              <div className="input-container">
                <BsGenderAmbiguous className="icon" />
                <input
                  className="input-field"
                  type="text"
                  placeholder="gender"
                  name="psw"
                  onChange={handleGender}
                  value={dataGender}
                />
              </div>

              <button type="submit" className="btn" onClick={handleCreateUser}>
                {"Register"}
              </button>
            </form>
            <div>
              <div
                className="container-row"
                style={save ? { display: "block" } : { display: "none" }}
              >
                <div className="backgroud">
                  <AiFillCloseCircle
                    className="delete-icon"
                    onClick={handleCloseEdit}
                  />
                  <div className="app-row">
                    <div className="row">
                      <span>
                        <input
                          className="card-slide"
                          id="knock"
                          type="text"
                          placeholder="firstName"
                          onChange={handleFirstnameEdit}
                          value={dataEditFirstName}
                        />
                        <label htmlFor="knock">firstName</label>
                      </span>
                      <span>
                        <input
                          className="card-slide"
                          id="max"
                          type="text"
                          placeholder="lastName"
                          onChange={handleLastNameEdit}
                          value={dataEditLastName}
                        />
                        <label htmlFor="max">lastName</label>
                      </span>
                      <span>
                        <input
                          className="card-slide"
                          id="out"
                          type="text"
                          placeholder="email"
                          onChange={handleEmailEdit}
                          value={dataEditEmail}
                        />
                        <label htmlFor="out">email</label>
                      </span>
                    </div>
                  </div>
                  <div className="app-row">
                    <div className="row">
                      <span>
                        <input
                          className="swing"
                          id="artist"
                          type="text"
                          placeholder="phoneNumber"
                          onChange={handlePhoneEdit}
                          value={dataEditPhone}
                        />
                        <label htmlFor="artist">phoneNumber</label>
                      </span>
                      <span>
                        <input
                          className="swing"
                          id="song"
                          type="text"
                          placeholder="gender"
                          onChange={handleGenderEdit}
                          value={dataEditGender}
                        />
                        <label htmlFor="song">gender</label>
                      </span>

                      <div>
                        <p
                          className="text-save"
                          onClick={() => handleEditUser(dataUserEdit.id)}
                        >
                          Save
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Module>
          <table id="customers">
            <tbody>
              <tr>
                <th className="th">firstName</th>
                <th className="th">lastName</th>
                <th className="th">email</th>
                <th className="th">phoneNumber</th>
                <th className="th">gender</th>
                <th className="th">edit</th>
                <th className="th">delete</th>
              </tr>
              {data.map((element) => {
                return element.map((dataUser) => {
                  return (
                    <tr key={dataUser.id}>
                      <td>{dataUser.firstName}</td>
                      <td>{dataUser.lastName}</td>
                      <td>{dataUser.email}</td>
                      <td>{dataUser.phoneNumber || "NULL"}</td>
                      <td>{dataUser.gender || "NULL"}</td>
                      <td>
                        <BsFillPenFill
                          className="icon-pen"
                          onClick={() => handleEdit(dataUser.id)}
                        />
                      </td>
                      <td>
                        <AiFillDelete
                          className="icon-delete"
                          onClick={() => handleDelete(dataUser.id)}
                        />
                      </td>
                    </tr>
                  );
                });
              })}
            </tbody>
          </table>
        </div>
      </Table>
    </div>
  );
}

export default UserAll;
const Module = styled.div`
  * {
    box-sizing: border-box;
  }
  html,
  body {
    overflow-x: hidden;
    font-family: "Open Sans", sans-serif;
    font-weight: 300;
    line-height: 1.4;
    color: #fff;
    background: #efefef;
  }
  @mixin epic-sides() {
    // https://codepen.io/MichaelArestad/pen/qltuk
    position: relative;
    z-index: 1;

    &:before {
      position: absolute;
      content: "";
      display: block;
      top: 0;
      left: -5000px;
      height: 100%;
      width: 15000px;
      z-index: -1;
      @content;
    }
  }
  .container-row {
    position: fixed;

    max-width: 800px;
    margin: 0px auto;
    border-radius: 10px;
    left: 25%;
    right: 25%;
    .delete-icon {
      position: absolute;
      top: 6%;
      font-size: 2rem;
      color: #fff;
      right: 4%;
      cursor: pointer;
      &:hover {
        opacity: 0.8;
      }
    }
    .backgroud {
      background: linear-gradient(45deg, rgb(52, 152, 227), rgb(122, 184, 147));
    }
  }
  .app-row {
    margin: 20px 0;
  }
  .text-save {
    color: #fff;
    font-size: 1.5rem;
    padding: 5px 30px;
    background: linear-gradient(45deg, rgb(52, 152, 227), rgb(122, 184, 147));
    display: inline-block;
    border-radius: 10px;
    margin-top: 20px;
    cursor: pointer;
    &:hover {
      color: #5ac8fa;
    }
  }
  .row {
    border-radius: 10px;
    max-width: 800px;
    margin: 0 auto;
    padding: 60px 30px;
    background: #032429;
    @include epic-sides() {
      background: inherit;
    }
    text-align: center;

    &:first-child {
      padding: 40px 30px;
    }
    &:nth-child(2),
    &:nth-child(8),
    &:nth-child(10) {
      background: #134a46;
    }
    &:nth-child(3),
    &:nth-child(7) {
      background: #377d6a;
    }
    &:nth-child(4),
    &:nth-child(6) {
      background: #7ab893;
    }
    &:nth-child(5) {
      background: #b2e3af;
    }

    span {
      position: relative;
      display: inline-block;
      margin: 30px 10px;
    }
  }
  .basic-slide {
    display: inline-block;
    width: 215px;
    padding: 10px 0 10px 15px;
    font-family: "Open Sans", sans;
    font-weight: 400;
    color: #377d6a;
    background: #efefef;
    border: 0;
    border-radius: 3px;
    outline: 0;
    text-indent: 70px; // Arbitrary.
    transition: all 0.3s ease-in-out;

    &::-webkit-input-placeholder {
      color: #efefef;
      text-indent: 0;
      font-weight: 300;
    }

    + label {
      display: inline-block;
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      padding: 8px 15px;
      text-shadow: 0 1px 0 rgba(19, 74, 70, 0.4);
      background: #7ab893;
      transition: all 0.3s ease-in-out;
      border-top-left-radius: 3px;
      border-bottom-left-radius: 3px;
    }
  }
  .basic-slide:focus,
  .basic-slide:active {
    color: #377d6a;
    text-indent: 0;
    background: #fff;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;

    &::-webkit-input-placeholder {
      color: #aaa;
    }
    + label {
      transform: translateX(-100%);
    }
  }
  .clean-slide {
    position: relative;
    display: inline-block;
    width: 215px;
    padding: 10px 0 10px 15px;
    font-family: "Open Sans", sans;
    font-weight: 400;
    color: #377d6a;
    background: #efefef;
    border: 0;
    border-radius: 3px;
    outline: 0;
    text-indent: 60px; // Arbitrary.
    transition: all 0.3s ease-in-out;

    &::-webkit-input-placeholder {
      color: #efefef;
      text-indent: 0;
      font-weight: 300;
    }

    + label {
      display: inline-block;
      position: absolute;
      transform: translateX(0);
      top: 0;
      left: 0;
      bottom: 0;
      padding: 11px 15px;
      font-size: 11px;
      font-weight: 700;
      text-transform: uppercase;
      color: #032429;
      text-align: left;
      text-shadow: 0 1px 0 rgba(255, 255, 255, 0.4);
      transition: all 0.3s ease-in-out, color 0.3s ease-out;
      border-top-left-radius: 3px;
      border-bottom-left-radius: 3px;
      overflow: hidden;

      &:after {
        content: "";
        position: absolute;
        top: 0;
        right: 100%;
        bottom: 0;
        width: 100%;
        background: #7ab893;
        z-index: -1;
        transform: translate(0);
        transition: all 0.3s ease-in-out;
        border-top-left-radius: 3px;
        border-bottom-left-radius: 3px;
      }
    }
  }
  .clean-slide:focus,
  .clean-slide:active {
    color: #377d6a;
    text-indent: 0;
    background: #fff;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;

    &::-webkit-input-placeholder {
      color: #aaa;
    }
    + label {
      color: #fff;
      text-shadow: 0 1px 0 rgba(19, 74, 70, 0.4);
      transform: translateX(-100%);

      &:after {
        transform: translate(100%);
      }
    }
  }
  .gate {
    display: inline-block;
    width: 215px;
    padding: 10px 0 10px 15px;
    font-family: "Open Sans", sans;
    font-weight: 400;
    color: #377d6a;
    background: #efefef;
    border: 0;
    border-radius: 3px;
    outline: 0;
    text-indent: 65px; // Arbitrary.
    transition: all 0.3s ease-in-out;

    &::-webkit-input-placeholder {
      color: #efefef;
      text-indent: 0;
      font-weight: 300;
    }

    + label {
      display: inline-block;
      position: absolute;
      top: 0;
      left: 0;
      padding: 9px 15px;
      text-shadow: 0 1px 0 rgba(19, 74, 70, 0.4);
      background: #7ab893;
      transition: all 0.4s ease-in-out;
      border-top-left-radius: 3px;
      border-bottom-left-radius: 3px;
      transform-origin: left bottom;
      z-index: 99;

      &:before,
      &:after {
        content: "";
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        border-radius: 3px;
        background: #377d6a;
        transform-origin: left bottom;
        transition: all 0.4s ease-in-out;
        pointer-events: none;
        z-index: -1;
      }
      &:before {
        background: rgba(3, 36, 41, 0.2);
        z-index: -2;
        right: 20%;
      }
    }
  }
  span:nth-child(2) .gate {
    text-indent: 85px;
  }
  span:nth-child(2) .gate:focus,
  span:nth-child(2) .gate:active {
    text-indent: 0;
  }
  .gate:focus,
  .gate:active {
    color: #377d6a;
    text-indent: 0;
    background: #fff;
    border-top-right-radius: 3px;
    border-bottom-right-radius: 3px;

    &::-webkit-input-placeholder {
      color: #aaa;
    }
    + label {
      transform: rotate(-66deg);
      border-radius: 3px;

      &:before {
        transform: rotate(10deg);
      }
    }
  }
  .skinny {
    display: inline-block;
    width: 215px;
    padding: 10px 0 10px 15px;
    font-family: "Open Sans", sans;
    font-weight: 400;
    color: #377d6a;
    background: #efefef;
    border: 0;
    border-radius: 3px;
    outline: 0;
    text-indent: 75px; // Arbitrary.
    transition: all 0.3s ease-in-out;

    &::-webkit-input-placeholder {
      color: #efefef;
      text-indent: 0;
      font-weight: 300;
    }

    + label {
      display: inline-block;
      position: absolute;
      transform: translateX(0);
      top: 0;
      left: 0;
      padding: 9px 15px;
      text-shadow: 0 1px 0 rgba(19, 74, 70, 0.4);
      transition: all 0.3s ease-in-out;
      border-top-left-radius: 3px;
      border-bottom-left-radius: 3px;
      overflow: hidden;

      &:before,
      &:after {
        content: "";
        position: absolute;
        right: 0;
        left: 0;
        z-index: -1;
        transition: all 0.3s ease-in-out;
      }
      &:before {
        // Skinny bit here
        top: 5px;
        bottom: 5px;
        background: #377d6a; // change this to #134A46
        border-top-left-radius: 3px;
        border-bottom-left-radius: 3px;
      }
      &:after {
        top: 0;
        bottom: 0;
        background: #377d6a;
      }
    }
  }
  .skinny:focus,
  .skinny:active {
    color: #377d6a;
    text-indent: 0;
    background: #fff;

    &::-webkit-input-placeholder {
      color: #aaa;
    }
    + label {
      transform: translateX(-100%);

      &:after {
        transform: translateX(100%);
      }
    }
  }
  .slide-up {
    display: inline-block;
    width: 215px;
    padding: 10px 0 10px 15px;
    font-family: "Open Sans", sans;
    font-weight: 400;
    color: #377d6a;
    background: #efefef;
    border: 0;
    border-radius: 3px;
    outline: 0;
    text-indent: 80px; // Arbitrary.
    transition: all 0.3s ease-in-out;

    &::-webkit-input-placeholder {
      color: #efefef;
      text-indent: 0;
      font-weight: 300;
    }

    + label {
      display: inline-block;
      position: absolute;
      transform: translateX(0);
      top: 0;
      left: 0;
      padding: 9px 15px;
      text-shadow: 0 1px 0 rgba(19, 74, 70, 0.4);
      transition: all 0.3s ease-in-out;
      border-top-left-radius: 3px;
      border-bottom-left-radius: 3px;
      overflow: hidden;

      &:before,
      &:after {
        content: "";
        position: absolute;
        right: 0;
        left: 0;
        z-index: -1;
        transition: all 0.3s ease-in-out;
      }
      &:before {
        // Skinny bit here
        top: 6px;
        left: 5px;
        right: 5px;
        bottom: 6px;
        background: #377d6a; // change this to #134A46
      }
      &:after {
        top: 0;
        bottom: 0;
        background: #377d6a;
      }
    }
  }
  span:nth-child(1) .slide-up {
    text-indent: 105px;
  }
  span:nth-child(3) .slide-up {
    text-indent: 125px;
  }
  span:nth-child(1) .slide-up:focus,
  span:nth-child(1) .slide-up:active,
  span:nth-child(3) .slide-up:focus,
  span:nth-child(3) .slide-up:active {
    text-indent: 0;
  }
  .slide-up:focus,
  .slide-up:active {
    color: #377d6a;
    text-indent: 0;
    background: #fff;

    &::-webkit-input-placeholder {
      color: #aaa;
    }
    + label {
      transform: translateY(-100%);

      &:before {
        border-radius: 5px;
      }
      &:after {
        transform: translateY(100%);
      }
    }
  }
  .card-slide {
    display: inline-block;
    width: 215px;
    padding: 10px 0 10px 15px;
    font-family: "Open Sans", sans;
    font-weight: 400;
    color: #377d6a;
    background: #efefef;
    border: 0;
    border-radius: 3px;
    outline: 0;
    text-indent: 115px; // Arbitrary.
    transition: all 0.3s ease-in-out;

    &::-webkit-input-placeholder {
      color: #efefef;
      text-indent: 0;
      font-weight: 300;
    }

    + label {
      display: block;
      position: absolute;
      top: 0;
      left: 0;
      padding: 9px 15px;
      text-shadow: 0 1px 0 rgba(19, 74, 70, 0.4);
      background: #7ab893;
      transition: all 0.3s ease-in-out;
      border-top-left-radius: 3px;
      border-bottom-left-radius: 3px;
      transform-origin: right center;
      transform: perspective(300px) scaleX(1) rotateY(0deg);
    }
  }
  span:nth-child(2) .card-slide {
    text-indent: 55px;
  }
  span:nth-child(3) .card-slide {
    text-indent: 150px;
  }
  span:nth-child(2) .card-slide:focus,
  span:nth-child(2) .card-slide:active,
  span:nth-child(3) .card-slide:focus,
  span:nth-child(3) .card-slide:active {
    text-indent: 0;
  }
  .card-slide:focus,
  .card-slide:active {
    color: #377d6a;
    text-indent: 0;
    background: #fff;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;

    &::-webkit-input-placeholder {
      color: #aaa;
    }
    + label {
      transform: perspective(600px) translateX(-100%) rotateY(80deg);
    }
  }
  .swing {
    display: inline-block;
    width: 215px;
    padding: 10px 0 10px 15px;
    font-family: "Open Sans", sans;
    font-weight: 400;
    color: #377d6a;
    background: #efefef;
    border: 0;
    border-radius: 3px;
    outline: 0;
    text-indent: 60px; // Arbitrary.
    transition: all 0.3s ease-in-out;

    &::-webkit-input-placeholder {
      color: #efefef;
      text-indent: 0;
      font-weight: 300;
    }

    + label {
      display: inline-block;
      position: absolute;
      top: 0;
      left: 0;
      padding: 9px 15px;
      text-shadow: 0 1px 0 rgba(19, 74, 70, 0.4);
      background: #7ab893;
      border-top-left-radius: 3px;
      border-bottom-left-radius: 3px;
      transform-origin: 2px 2px;
      transform: rotate(0);
      // There should be a better way
      animation: swing-back 0.4s 1 ease-in-out;
    }
  }
  @keyframes swing {
    0% {
      transform: rotate(0);
    }
    20% {
      transform: rotate(116deg);
    }
    40% {
      transform: rotate(60deg);
    }
    60% {
      transform: rotate(98deg);
    }
    80% {
      transform: rotate(76deg);
    }
    100% {
      transform: rotate(82deg);
    }
  }
  @keyframes swing-back {
    0% {
      transform: rotate(82deg);
    }
    100% {
      transform: rotate(0);
    }
  }
  .swing:focus,
  .swing:active {
    color: #377d6a;
    text-indent: 0;
    background: #fff;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;

    &::-webkit-input-placeholder {
      color: #aaa;
    }
    + label {
      animation: swing 1.4s 1 ease-in-out;
      transform: rotate(82deg);
    }
  }
  .balloon {
    // As suggested by https://twitter.com/dbox/status/365888496486985728
    display: inline-block;
    width: 215px;
    padding: 10px 0 10px 15px;
    font-family: "Open Sans", sans;
    font-weight: 400;
    color: #377d6a;
    background: #efefef;
    border: 0;
    border-radius: 3px;
    outline: 0;
    text-indent: 60px; // Arbitrary.
    transition: all 0.3s ease-in-out;

    &::-webkit-input-placeholder {
      color: #efefef;
      text-indent: 0;
      font-weight: 300;
    }

    + label {
      display: inline-block;
      position: absolute;
      top: 8px;
      left: 0;
      bottom: 8px;
      padding: 3px 15px;
      color: #032429;
      font-size: 11px;
      font-weight: 700;
      text-transform: uppercase;
      text-shadow: 0 1px 0 rgba(19, 74, 70, 0);
      transition: all 0.3s ease-in-out;
      border-radius: 3px;
      background: rgba(122, 184, 147, 0);

      &:after {
        position: absolute;
        content: "";
        width: 0;
        height: 0;
        top: 100%;
        left: 50%;
        margin-left: -3px;
        border-left: 3px solid transparent;
        border-right: 3px solid transparent;
        border-top: 3px solid rgba(122, 184, 147, 0);
        transition: all 0.3s ease-in-out;
      }
    }
  }
  .balloon:focus,
  .balloon:active {
    color: #377d6a;
    text-indent: 0;
    background: #fff;

    &::-webkit-input-placeholder {
      color: #aaa;
    }
    + label {
      color: #fff;
      text-shadow: 0 1px 0 rgba(19, 74, 70, 0.4);
      background: rgba(122, 184, 147, 1);
      transform: translateY(-40px);

      &:after {
        border-top: 4px solid rgba(122, 184, 147, 1);
      }
    }
  }
  body {
    font-family: Arial, Helvetica, sans-serif;
  }
  .form-Register {
    display: none;
    position: fixed;
    z-index: 100;
    top: 20%;
    width: 100%;
    left: 25%;
    right: 25%;
    border-radius: 20px;
    background-color: #1b2a49;
    bottom: 23%;
    max-width: 700px;
    margin: auto;
    padding: 0 50px;
  }
  .blur {
    cursor: pointer;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.7);
    z-index: 1;
  }
  .icon-close {
    z-index: 10;
    position: absolute;
    top: 8%;
    color: #fff;
    right: 7%;
    font-size: 2rem;
    cursor: pointer;
    &:hover {
      opacity: 0.8;
    }
  }
  * {
    box-sizing: border-box;
  }

  .input-container {
    display: -ms-flexbox; /* IE10 */
    display: flex;
    width: 100%;
    margin-bottom: 15px;
  }

  .icon {
    padding: 10px;
    background: dodgerblue;
    color: white;
    min-width: 50px;
    text-align: center;
    height: 100%;
  }

  .input-field {
    width: 100%;
    padding: 10px;
    outline: none;
  }

  .input-field:focus {
    border: 2px solid dodgerblue;
  }

  /* Set a style for the submit button */
  .btn {
    background-color: dodgerblue;
    color: white;
    padding: 15px 20px;
    border: none;
    cursor: pointer;
    width: 100%;
    opacity: 0.9;
  }

  .btn:hover {
    opacity: 1;
  }
  .text-form {
    text-align: center;
    margin: 30px 0;
    font-size: 2rem;
    color: #fff;
  }
`;
const Table = styled.div`
  #customers {
    font-family: Arial, Helvetica, sans-serif;
    border-collapse: collapse;
    width: 100%;
  }

  #customers td,
  #customers th {
    border: 1px solid #ddd;
    padding: 8px;
  }

  #customers tr:nth-child(even) {
    background-color: #f2f2f2;
  }

  #customers tr:hover {
    background-color: #ddd;
  }

  #customers th {
    padding-top: 12px;
    padding-bottom: 12px;
    text-align: left;
    background-color: #04aa6d;
    color: white;
  }

  .text-h1 {
    text-align: center;
    margin: 30px 0;
    font-size: 2rem;
  }
  .header {
    height: 60px;
    background-color: #87cefa;
    display: flex;
    align-items: center;
    padding-left: 20px;
    .header-text {
      margin-left: 10px;
    }
  }
  .container {
    .app-add {
      margin: 20px;
      .btn-user {
        padding: 10px 20px;
        background-color: #87cefa;
        color: #000;
        outline: none;
        border: none;
        font-weight: 600;
        border-radius: 10px;
        cursor: pointer;
        &:hover {
          opacity: 0.8;
          color: #fff;
          background-color: #000;
        }
      }
    }
  }
  .icon-pen {
    padding: 10px;
    font-size: rem;
    color: #50c7c7;
    font-size: 2.5rem;
    cursor: pointer;
    &:hover {
      color: #ff8c00;
    }
  }
  .icon-delete {
    padding: 10px;
    font-size: rem;
    color: #ff0000;
    font-size: 2.5rem;
    cursor: pointer;
    &:hover {
      color: #008b8b;
    }
  }
  td {
    cursor: pointer;
  }
`;
