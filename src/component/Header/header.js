import styled from "styled-components";
import { BsSearch } from "react-icons/bs";
import { FaUserCircle } from "react-icons/fa";
import { GiSelfLove } from "react-icons/gi";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { FaCaretDown } from "react-icons/fa";
import { MdLanguage } from "react-icons/md";
function Header() {
  const { i18n, t } = useTranslation(["navbar"]);
  const [module, setModule] = useState(false);
  const valueLanguage = i18n.language;
  const handleEnglish = (language) => {
    i18n.changeLanguage(language);
    setModule(true);
  };
  const handleVietnamese = (language) => {
    i18n.changeLanguage(language);
    setModule(false);
  };
  return (
    <div>
      <HeaderContent>
        <div className="container-app">
          <div className="main-container">
            <div className="app">
              <a className="text">TechShed</a>
              <div className="container-search">
                <input placeholder={t("Search")} className="input-header" />
                <div className="app-icon">
                  <BsSearch className="icon-search" />
                </div>
              </div>
            </div>
          </div>
          <div className="app-container">
            <div className="main">
              <FaUserCircle className="icon-user" />
              <a className="text-title">{t("Login")}</a>
            </div>
            <div className="main-sub">
              <MdLanguage className="icon-language" />
              <a className="text-title-lg">{valueLanguage}</a>
              <FaCaretDown className="down" />

              <div className="module">
                <FaCaretDown className="up" />
                <div
                  className="main-language"
                  style={
                    module
                      ? { backgroundColor: "#000" }
                      : { backgroundColor: "" }
                  }
                  onClick={() => handleEnglish("vi")}
                >
                  <button
                    className="english"
                    style={
                      module
                        ? { color: "#fff" }
                        : { color: "" }
                    }
                  >
                    Vietnam
                    
                  </button>
                </div>
                <div
                  className="main-languageVN"
                  style={
                    !module
                      ? { backgroundColor: "#000" }
                      : { backgroundColor: "" }
                  }
                  onClick={() => handleVietnamese("en")}
                >
                  <button
                    className="vietnamese"
                    style={
                      !module
                        ? { color: "#fff" }
                        : { color: "" }
                    }
                  >
                    English
                  </button>
                </div>
              </div>
            </div>
            <div className="main">
              <AiOutlineShoppingCart className="icon-user" />
              <a className="text-title">0</a>
            </div>
          </div>
        </div>
      </HeaderContent>
      <HeaderNavbar>
        <div className="app-navbar">
          <div>
            <a className="navbar-text">{t("Shop All")}</a>
          </div>
          <div>
            <a className="navbar-text">{t("Computers")}</a>
          </div>
          <div>
            <a className="navbar-text">{t("Tablets")}</a>
          </div>
          <div>
            <a className="navbar-text">{t("Drones & Cameras")}</a>
          </div>
          <div>
            <a className="navbar-text">{t("Audio")}</a>
          </div>
          <div>
            <a className="navbar-text">{t("Mobile")}</a>
          </div>
          <div>
            <a className="navbar-text">{t("TV & Home Criema")}</a>
          </div>
          <div>
            <a className="navbar-text">{t("Wearable Tech")}</a>
          </div>
          <div>
            <a className="navbar-text">{t("Sale")}</a>
          </div>
        </div>
      </HeaderNavbar>
    </div>
  );
}

export default Header;
const HeaderNavbar = styled.div`
  background-color: #edecec;
  height: 2.7rem;
  line-height: 2.7rem;
  .app-navbar {
    display: flex;
    .navbar-text {
      color: #000;
      font-size: 0.88rem;
      padding: 0 20px;
    }
  }
`;
const HeaderContent = styled.div`
  height: 80px;

  .container-app {
    align-items: center;
    display: flex;
    justify-content: space-around;
    .main-container {
      flex-basis: 100%;
      margin-left: 20px;
      .app {
        display: flex;
        align-items: center;
        .text {
          color: #000;
          font-size: 2.5rem;
          font-weight: 630;
        }
        .container-search {
          position: relative;
          margin-left: 50px;
          .input-header {
            height: 45px;
            border-radius: 999px;
            width: 365px;
            padding: 18px;
            outline: none;
            border: none;
            background-color: #ccc;
          }
          .app-icon {
            position: absolute;
            padding: 10px 31px;
            right: 0%;
            top: 4%;

            background-color: #751fff;
            color: #fff;
            border-top-right-radius: 999px;
            border-bottom-right-radius: 999px;
            cursor: pointer;
            &:hover {
              background-color: #000;
            }

            .icon-search {
              font-size: 1.2rem;
              transform: translateY(3px);
            }
          }

          //
        }
      }
    }
    .app-container {
      display: flex;
      flex-basis: 51%;
      .main-sub {
        position: relative;
        flex-basis: 100%;
        padding: 0 20px;

        line-height: 80px;
        display: flex;
        align-items: center;
        .icon-language {
          font-size: 1.8rem;
        }
        .down {
          transform: translateY(2px);
          cursor: pointer;
          &:hover {
            opacity: 0.8;
          }
        }
        .module {
          box-shadow: 2px 2px 10px;
          display: none;
          position: absolute;
          top: 86%;
          right: 20%;
          background-color: #fff;
          width: 100%;
          z-index: 100;
          .up {
            position: absolute;
            top: -15%;
            right: 45%;
            transform: rotate(180deg);
            font-size: 1.5rem;
            color: #751fff;
          }
          .main-language {
            line-height: 50px;
            cursor: pointer;
            text-align: center;
            &:hover {
              background-color: #edecec;
            }
            .english {
              color: #000;
              cursor: pointer;
              border: none;
              background-color: transparent;
            }
            .vietnamese {
              cursor: pointer;
              color: #000;
              border: none;
              background-color: transparent;
            }
          }
        }
        .main-languageVN {
          line-height: 50px;
          cursor: pointer;
          text-align: center;
          &:hover {
            background-color: #edecec;
          }
          .english {
            color: #000;
            cursor: pointer;
            border: none;
            background-color: transparent;
          }
          .vietnamese {
            cursor: pointer;
            color: #000;
            border: none;
            background-color: transparent;
          }
        }

        .text-title-lg {
          color: #000;
          padding: 0 5px 0 5px;
          font-size: 1.1rem;
          cursor: pointer;
          &:hover {
            opacity: 0.8;
          }
        }
      }
      .main-sub:hover .module {
        display: block;
      }

      .main {
        flex-basis: 100%;
        padding: 0 20px;

        line-height: 80px;
        display: flex;
        align-items: center;

        .text-title {
          color: #000;
          padding: 0 13px;
          font-size: 1.1rem;
          cursor: pointer;
          &:hover {
            opacity: 0.6;
          }
        }

        .icon-user {
          font-size: 1.65rem;
        }
      }
    }
  }
`;
