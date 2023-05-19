import styled from "styled-components";
import { useTranslation } from "react-i18next";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function BackgroudImage() {
  const { t } = useTranslation(["navbar"]);
  const images = [
    "https://static.wixstatic.com/media/c837a6_f58829a26e594ca3aa72383e19cf39b9~mv2.png/v1/fill/w_1903,h_565,al_r,q_90,usm_0.66_1.00_0.01,enc_auto/c837a6_f58829a26e594ca3aa72383e19cf39b9~mv2.png",
    "https://static.wixstatic.com/media/c837a6_837f9cd4f59146c3ad47a2bd882fedfd~mv2.png/v1/fill/w_1903,h_565,al_r,q_90,usm_0.66_1.00_0.01,enc_auto/c837a6_837f9cd4f59146c3ad47a2bd882fedfd~mv2.png",
    "https://static.wixstatic.com/media/c837a6_9c1280daaeb0481abc58e6e236efdf59~mv2.png/v1/fill/w_1903,h_565,al_br,q_90,usm_0.66_1.00_0.01,enc_auto/c837a6_9c1280daaeb0481abc58e6e236efdf59~mv2.png",
  ];
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed: 3000,
    autoplay: true,
    arrows: true,
    
  };
  return (
    <Image>
      <div className="image">
        <Slider {...settings}>
          {images.map((element) => {
            return (
              <div>
                <img src={element} alt="image" />
                
              </div>
              
            );
          })}
        </Slider>
        <div className="app">
          <div className="container">
            <span className="text">{t("Best Prices")}</span>
          </div>
          <div className="container">
            <h1 className="h1-text">{t("Incredible Prices")}</h1>
          </div>
          <div className="container">
            <p className="text-p">
              {t("Get more for less on selected brands")}
            </p>
          </div>
          <div className="container-sub">
            <a className="text-shop"> {t("Shop Now")}</a>
          </div>
        </div>
      </div>
    </Image>
  );
}

export default BackgroudImage;
const Image = styled.div`
  margin-bottom: 30px;
  .app {
    position: absolute;
    top: 20%;
    left: 10%;
    .container {
      margin-bottom: 20px;
    }
    .container-sub {
      margin-top: 40px;
    }
    .text {
      padding: 0px 10px;
      color: #fff;
      background-color: #d72d2d;
      font-size: 1.25rem;
    }
    .h1-text {
      font-size: 3.8rem;
      width: 50%;
    }
    .text-p {
      font-size: 1.3rem;
    }
    .text-shop {
      cursor: pointer;
      padding: 15px 55px;
      background-color: #751fff;
      border-radius: 999px;
      font-size: 1.07rem;
      transition: all 0.5s;
      &:hover {
        background-color: #000;
      }
    }
  }
  .image {
    position: relative;
  }
`;
