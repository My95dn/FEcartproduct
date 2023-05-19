import { FaDove } from "react-icons/fa";
import styled from "styled-components";
import { TbTruckDelivery } from "react-icons/tb";
import { BsBoxSeam } from "react-icons/bs";
import { IoPricetagOutline } from "react-icons/io5";
import { CiTimer } from "react-icons/ci";
import { useTranslation } from "react-i18next";
import Product from '../content/products/product'
import ProductItem2 from '../content/products/productItem2'
function Content() {
    const {t} = useTranslation(['navbar'])
  return (
    <div>
      <ContentSub>
        <div className="app-image">
          <div className="container">
            <img
              src="https://static.wixstatic.com/media/c22c23_e140bfa8cd6f4cb2ac5ee6e204f64073~mv2.jpg/v1/fill/w_892,h_468,al_t,q_85,usm_0.66_1.00_0.01,enc_auto/c22c23_e140bfa8cd6f4cb2ac5ee6e204f64073~mv2.jpg"
              alt="imagePhone"
              className="image"
            />
            <div className="main-text">
              <div>
                <p className="text">{t('Holiday Deals')}</p>
              </div>
              <div>
                <h2 className="text-sub">{t('Up to 30% off')}</h2>
              </div>
              <div>
                <p className="text">{t('Selected Smartphone Brands')}</p>
              </div>
              <div>
                <button className="button">{t('Shop')}</button>
              </div>
            </div>
          </div>
          <div className="container">
            <img
              src="https://static.wixstatic.com/media/c837a6_d84a631864a442a496670bc2d787c6a0~mv2.jpg/v1/fill/w_892,h_468,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/c837a6_d84a631864a442a496670bc2d787c6a0~mv2.jpg"
              alt="Headphone"
              className="image"
            />
            <div className="main-text">
              <div>
                <p className="text">{t('Just In')}</p>
              </div>
              <div>
                <h2 className="text-sub">{t('Take Your Sound Anywhere')}</h2>
              </div>
              <div>
                <p className="text">{t('Top Headphone Brands')}</p>
              </div>
              <div>
                <button className="button-sub">{t('Shop')}</button>
              </div>
            </div>
          </div>
        </div>
        <div className="app-contain">
          <div className="contain">
            <div>
              <TbTruckDelivery className="icon-car" />
            </div>
            <div className="main-text">
              <p className="text-sub">{t("Curb-side pickup")}</p>
            </div>
          </div>
          <div className="contain">
            <div>
              <BsBoxSeam className="icon-freeshipping" />
            </div>
            <div className="main-text">
              <p className="text-sub">{t('Free shipping on orders over $50')}</p>
            </div>
          </div>
          <div className="contain">
            <div>
              <IoPricetagOutline className="icon-discount" />
            </div>
            <div className="main-text">
              <p className="text-sub">{t('Low prices guaranteed')}</p>
            </div>
          </div>
          <div className="contain">
            <div>
              <CiTimer className="icon-time" />
            </div>
            <div className="main-text">
              <p className="text-sub">{t('Available to you 24/7')}</p>
            </div>
          </div>
        </div>
        <Product />
        <ProductItem2 />
      </ContentSub>
    </div>
  );
}

export default Content;
const ContentSub = styled.div`
background-color: rgb(237, 236, 236);
padding: 50px 0;
overflow: hidden;
  .image {
    width: 100%;
  }
  .app-image {
    display: flex;
    justify-content: space-evenly;
    .container {
      position: relative;
      margin-bottom: 20px;
      .main-text {
        position: absolute;
        top: 15%;
        left: 8%;
        .text {
          font-size: 1.25rem;
          margin: 10px 0;
          color: #fff;
        }
        .text-sub {
          font-size: 3.13rem;
          width: 60%;
          color: #fff;
        }
        .button {
          font-size: 1.1rem;
          outline: none;
          border: none;
          padding: 10px 50px;
          border-radius: 999px;
          margin-top: 10px;
          cursor: pointer;
          transition: all 0.5s;
          font-weight: 200;
          border: 1px solid transparent;
          &:hover {
            background-color: #a71d1a;
            border: 1px solid #fff;
            color: #fff;
          }
        }
        .button-sub {
          font-size: 1.1rem;
          outline: none;
          border: none;
          padding: 10px 50px;
          border-radius: 999px;
          margin-top: 10px;
          cursor: pointer;
          transition: all 0.5s;
          font-weight: 200;
          border: 1px solid transparent;
          &:hover {
            background-color: #5d35a0;
            border: 1px solid #fff;
            color: #fff;
          }
        }
      }
    }
  }
  .app-contain {
    background-color: #fff;
    padding: 50px 0px;
    margin: 20px 40px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    .contain {
      display: flex;
      .icon-car {
        font-size: 3.5rem;
      }
      .icon-freeshipping {
        font-size: 3.2rem;
      }
      .icon-discount {
        font-size: 3rem;
      }
      .icon-time {
        font-size: 3rem;
      }
      .text-sub {
        font-size: 1.25rem;
        margin-left: 20px;
        font-weight: 500;
      }
      .main-text {
        display: flex;
        align-items: center;
      }
    }
  }
`;
