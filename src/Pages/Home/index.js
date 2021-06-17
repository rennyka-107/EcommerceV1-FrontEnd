import { findIndex, isEmpty, isEqual } from "lodash";
import React, { useEffect, useState } from "react";
import img1 from "./../../assets/images/—Pngtree—banner background off season crazy_925764.jpg";
import img2 from "./../../assets/images/—Pngtree—fruits and vegetables_555942.jpg";
import Button1 from "../../Components/Button1";
import { formatCurrency } from "../../Utils/currency";
import { BASE_URL } from "../../Constant";

const imgSlides = [
  {
    title: "Healthy",
    description: "Fruits good for heal everyday",
    src: img1,
  },
  {
    title: "Heaven",
    description: "Heaven of fruits",
    src: img2,
  },
];

const Home = (props) => {
  const [selectedImg, setSelectedImg] = useState(imgSlides[0]);
  const { getProducts, productReducer, addProduct } = props;
  const { products } = productReducer;
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    getProducts();
  }, [getProducts]);

  useEffect(() => {
    const newProductList = [];
    products.forEach((product) => {
      if (!isEmpty(product.images) && newProductList.length < 3) {
        newProductList.push(product);
      }
    });
    setProductList(newProductList);
  }, [products]);

  useEffect(() => {
    const changeSlide = setInterval(() => {
      const index = findIndex(imgSlides, (img) => isEqual(img, selectedImg));
      if (index === imgSlides.length - 1) {
        setSelectedImg(imgSlides[0]);
      } else setSelectedImg(imgSlides[index + 1]);
    }, 2000);
    return () => clearInterval(changeSlide);
  }, [selectedImg]);

  return (
    <div className="home-container">
      <div className="slide-image">
        <img src={selectedImg.src} alt="alt" />
        <p>{selectedImg.title}</p>
        <p>{selectedImg.description}</p>
      </div>
      <div className="middle-content" id="middle-content">
        <p>THE FRUIT</p>
        <p>We love fruit</p>
        <p>
          Fruits are the means by which flowering plants (also known as
          angiosperms) disseminate their seeds. Edible fruits in particular have
          long propagated using the movements of humans and animals in a
          symbiotic relationship that is the means for seed dispersal for the
          one group and nutrition for the other; in fact, humans and many
          animals have become dependent on fruits as a source of food.
          Consequently, fruits account for a substantial fraction of the world's
          agricultural output, and some (such as the apple and the pomegranate)
          have acquired extensive cultural and symbolic meanings.
        </p>
        <div className="list-items">
          {productList.map((el, idx) => (
            <div key={idx} className="item">
              {el.name}
              <img
                src={BASE_URL + el.images[0].path}
                // src={img4}
                alt="alt4"
              />
            </div>
          ))}
        </div>
      </div>
      <div className="tour-list-container" id="tour-list-container">
        <div className="tour-list">
          <p>HOT FRUITS</p>
          <p>Buy hot fruits now to receive many gift bonus!</p>
          <br />
          {/* <ul>
            <li>
              September <span className="sold-out">Sold out</span>
            </li>
            <li>
              October <span className="sold-out">Sold out</span>
            </li>
            <li>
              November <span className="have-stock">3</span>
            </li>
          </ul> */}
          <div className="tours">
            {productList.map((t, index) => (
              <div key={index} className="tour-item">
                <img src={BASE_URL + t.images[0].path} alt="asx" />
                <div className="tour-item-content">
                  <p>{t.name}</p>
                  <p>{formatCurrency(t.price) + " VND"}</p>
                  <p>{t.description}</p>
                  <Button1
                    title="Add to cart"
                    onClick={() => addProduct({ ...t, total: 1 })}
                    additionClass="buy-ticket-tour-button"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
