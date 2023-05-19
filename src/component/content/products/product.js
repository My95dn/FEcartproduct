import styled from "styled-components";
import { useTranslation } from "react-i18next";
function Product() {
    const { t } = useTranslation(["navbar"])
  const data = [
    {
      product: {
        image:
          "https://static.wixstatic.com/media/c22c23_75059a72af5e4949aecdfbda8746f4ef~mv2.jpg/v1/fill/w_282,h_282,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/c22c23_75059a72af5e4949aecdfbda8746f4ef~mv2.jpg",
        title: t('Fitboot Inspire Fitness Tracker With Heart Rate Tracking'),
        sale: "$85.00",
        price: "$70.00",
      },
    },
    {
      product: {
        image:
          "https://static.wixstatic.com/media/c22c23_3ab3d3acd73843deba1dece7b2254e2f~mv2.jpg/v1/fill/w_282,h_282,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/c22c23_3ab3d3acd73843deba1dece7b2254e2f~mv2.jpg",
        title: t('JP Gaming Laptop 15.6 Laptop 256GB'),
        sale: "$85.00",
        price: "$70.00",
      },
    },
    {
      product: {
        image:
          "https://static.wixstatic.com/media/c22c23_77a52a8e6f8b4879a6548e11a3df3613~mv2.jpg/v1/fill/w_282,h_282,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/c22c23_77a52a8e6f8b4879a6548e11a3df3613~mv2.jpg",
        title: t('HKI Tech Quadcopter Drone With 360 Camera & Controller'),
        sale: null,
        price: "$85.00",
      },
    },
    {
      product: {
        image:
          "https://static.wixstatic.com/media/c22c23_527e6c6f3d944fb88c80907c2f754afb~mv2.jpg/v1/fill/w_282,h_282,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/c22c23_527e6c6f3d944fb88c80907c2f754afb~mv2.jpg",
        title: t('Smartphone Z Pixel Max 128GB Unlocked'),
        sale: "$85.00",
        price: "$70.00",
      },
    },
    {
      product: {
        image:
          "https://static.wixstatic.com/media/c22c23_0fa2a9bb97f443658acb747221ff337b~mv2.jpg/v1/fill/w_282,h_282,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/c22c23_0fa2a9bb97f443658acb747221ff337b~mv2.jpg",
        title: t('In-ear Noise Cancelling & Isolating Wireless Earbuds'),
        sale: "$85.00",
        price: "$70.00",
      },
    },
    {
      product: {
        image:
          "https://static.wixstatic.com/media/c22c23_35b786fdd0bb443e9ac09561af1569d3~mv2.jpg/v1/fill/w_282,h_282,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/c22c23_35b786fdd0bb443e9ac09561af1569d3~mv2.jpg",
        title: t('Safay GEN 2 256GB VR headset With Touch Controllers'),
        sale: null,
        price: "$85.00",
      },
    },
  ];
  return (
    <Products>
      <div>
        <div className="main-text">
          <h3 className="sub-text">{t('Best Sellers')}</h3>
        </div>
        <div className="app">
          {data.map((element, index) => {
            const images = element.product.image;
            const titles = element.product.title;
            const sales = element.product.sale;
            const prices = element.product.price;
            return (
              <div key={index} className="main">
                {sales !== null && <span className="sale">{t('sale')}</span>}
                <div className="app-image">
                  <img src={images} alt="image" className="images" />
                </div>
                <div className="app-text">
                  <div>
                    <p className="title">{titles}</p>
                  </div>
                  <div className="container-price">
                    <a className="price-sale" >{sales}</a>

                    <span className="price-text" style={!sales ? {marginLeft: '0'} :{marginLeft: '15px'}}>{prices}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="app-view">
        <a className="text-view">{t('View All')}</a>
      </div>
    </Products>
  );
}

export default Product;

const Products = styled.div`
  background-color: #fff;
  padding: 70px 60px 90px 60px;
  margin: 50px 40px;
  .main-text {
    text-align: center;
    margin: 0 0 60px 0;
    .sub-text {
      font-size: 1.88rem;
      font-weight: 600;
    }
  }
  .app {
    display: flex;
    .app-text {
      padding: 15px;
    }
    .main {
        width: 100%;
      overflow: hidden;
      
      cursor: pointer;
      position: relative;
      border: 1px solid #edecec;
      .title {
        font-size: 1.07rem;
        font-weight: 300;
        line-height: 1.5rem;
      }
      .container-price {
        margin: 10px 0px;
        .price-text {
          font-size: 1.25rem;
          color: #751fff;
          margin-left: 15px;
          font-weight: 300;
        }
        .price-sale {
          text-decoration: line-through;
          font-size: 1.25rem;
          color: #751fff;
          font-weight: 300;
        }
      }
      .sale {
        position: absolute;
        top: 3%;
        left: 5%;
        font-size: 0.88rem;
        padding: 4px 15px;
        background-color: #d72d2d;
        border-radius: 999px;
        color: #fff;
        z-index: 1;
      }
      .app-image {
        overflow: hidden;
        .images {
            width: 100%;
            transition: all 0.3s;
        }
      }
    }
    .main:hover .images {
      transform: scale(1.3);
      transition: all 0.3s;
    }
  }
  .app-view {
    margin-top: 70px;
    text-align: center;
    .text-view {
      padding: 15px 100px;
      background-color: #751fff;
      border-radius: 999px;
      font-size: 1.07rem;
      font-weight: 300;
      transition: all 0.4s;
      cursor: pointer;
      &:hover {
        background-color: #000;
      }
    }
  }
`;
