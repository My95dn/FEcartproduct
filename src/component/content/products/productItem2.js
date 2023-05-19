import styled from "styled-components";
import { useTranslation } from "react-i18next";
function ProductItem2() {
  const { t } = useTranslation(["navbar"]);
  const data = [
    {
      product: {
        image:
          "https://static.wixstatic.com/media/c22c23_75059a72af5e4949aecdfbda8746f4ef~mv2.jpg/v1/fill/w_282,h_282,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/c22c23_75059a72af5e4949aecdfbda8746f4ef~mv2.jpg",
        title: t("Computer"),
        sale: "$85.00",
        price: "$70.00",
      },
    },
    {
      product: {
        image:
          "https://static.wixstatic.com/media/c22c23_3ab3d3acd73843deba1dece7b2254e2f~mv2.jpg/v1/fill/w_282,h_282,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/c22c23_3ab3d3acd73843deba1dece7b2254e2f~mv2.jpg",
        title: t("Mobile"),
        sale: "$85.00",
        price: "$70.00",
      },
    },
    {
      product: {
        image:
          "https://static.wixstatic.com/media/c22c23_77a52a8e6f8b4879a6548e11a3df3613~mv2.jpg/v1/fill/w_282,h_282,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/c22c23_77a52a8e6f8b4879a6548e11a3df3613~mv2.jpg",
        title: t("Drones & Cameras"),
        sale: null,
        price: "$85.00",
      },
    },
    {
      product: {
        image:
          "https://static.wixstatic.com/media/c22c23_527e6c6f3d944fb88c80907c2f754afb~mv2.jpg/v1/fill/w_282,h_282,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/c22c23_527e6c6f3d944fb88c80907c2f754afb~mv2.jpg",
        title: t("sale"),
        sale: "$85.00",
        price: "$70.00",
      },
    },
    {
      product: {
        image:
          "https://static.wixstatic.com/media/c22c23_0fa2a9bb97f443658acb747221ff337b~mv2.jpg/v1/fill/w_282,h_282,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/c22c23_0fa2a9bb97f443658acb747221ff337b~mv2.jpg",
        title: t("Tablets"),
        sale: "$85.00",
        price: "$70.00",
      },
    },
    {
      product: {
        image:
          "https://static.wixstatic.com/media/c22c23_35b786fdd0bb443e9ac09561af1569d3~mv2.jpg/v1/fill/w_282,h_282,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/c22c23_35b786fdd0bb443e9ac09561af1569d3~mv2.jpg",
        title: t("Best Sellers"),
        sale: null,
        price: "$85.00",
      },
    },
    {
      product: {
        image:
          "https://static.wixstatic.com/media/c22c23_75059a72af5e4949aecdfbda8746f4ef~mv2.jpg/v1/fill/w_282,h_282,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/c22c23_75059a72af5e4949aecdfbda8746f4ef~mv2.jpg",
        title: t("T.V & Home Cinema"),
        sale: "$85.00",
        price: "$70.00",
      },
    },
    {
      product: {
        image:
          "https://static.wixstatic.com/media/c22c23_75059a72af5e4949aecdfbda8746f4ef~mv2.jpg/v1/fill/w_282,h_282,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/c22c23_75059a72af5e4949aecdfbda8746f4ef~mv2.jpg",
        title: t("Wearable Tech"),
        sale: "$85.00",
        price: "$70.00",
      },
    },
    {
      product: {
        image:
          "https://static.wixstatic.com/media/c22c23_75059a72af5e4949aecdfbda8746f4ef~mv2.jpg/v1/fill/w_282,h_282,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/c22c23_75059a72af5e4949aecdfbda8746f4ef~mv2.jpg",
        title: t("Speakers"),
        sale: "$85.00",
        price: "$70.00",
      },
    },
    {
      product: {
        image:
          "https://static.wixstatic.com/media/c22c23_75059a72af5e4949aecdfbda8746f4ef~mv2.jpg/v1/fill/w_282,h_282,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/c22c23_75059a72af5e4949aecdfbda8746f4ef~mv2.jpg",
        title: t("Headphones"),
        sale: "$85.00",
        price: "$70.00",
      },
    },
  ];
  return (
    <ProductItem>
      <div>
        <div className="main-text">
          <h3 className="sub-text">{t('Shop by Category')}</h3>
        </div>
        <div className="app">
          {data.map((element, index) => {
            const images = element.product.image;
            const titles = element.product.title;
            const sales = element.product.sale;
            const prices = element.product.price;
            return (
              <div key={index} className="main">
                <div className="app-image">
                  <img src={images} alt="image" className="images" />
                </div>
                <div className="app-title">
                  <p className="title">{titles}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </ProductItem>
  );
}

export default ProductItem2;
const ProductItem = styled.div`
  border: 3px solid #fff;
  padding: 70px 60px 90px 60px;
  margin: 50px 40px;
  overflow: hidden;

  .main-text {
    text-align: center;
    margin: 0 0 60px 0;
    .sub-text {
      font-size: 1.88rem;
      font-weight: 600;
    }
  }
  .app {
    display: grid;
    grid-template-columns: repeat(5, 19%);
    row-gap: 20px;
    column-gap: 10px;
    .app-text {
      padding: 15px;
    }
    .main {
      margin: 20px 0 20px 15px;
      width: 100%;
      text-align: center;
      cursor: pointer;
      position: relative;
      .title {
        font-size: 1.07rem;
        font-weight: 300;
        line-height: 1.5rem;
        line-height: 1.8rem;
      }
      .container-price {
        margin: 10px 0px;
      }
      .app-title {
        margin-top: 20px;
          .title {
            font-size: 1.25rem;
            font-weight: 600;
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
        .images {
          border-radius: 999px;

          width: 84%;
          transition: all 0.3s;
        }
      }
    }
    .main:hover .images {
      transform: scale(1.1);
      transition: all 1s;
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
