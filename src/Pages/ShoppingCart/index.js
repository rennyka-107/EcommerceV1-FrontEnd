import React from "react";
import { Link } from "react-router-dom";
import { formatCurrency } from "../../Utils/currency";

const ShoppingCart = (props) => {
  const {
    products,
    updateProduct,
    deleteProduct,
    deleteAllProduct,
  } = props;

  function totalPrice() {
    let totalPrice = 0;
    products.forEach((p) => {
      totalPrice += p.price * p.total;
    });
    return totalPrice;
  }

  return (
    <div className="row">
      <div className="col-25">
        <div className="container">
          <div className="cart-title">
            Cart
            <div className="price-div">
              <span>Quantity</span>
              <span>Price</span>
              <span>Total</span>
              <span className="cart-clear-all" onClick={deleteAllProduct}>
                Clear all
              </span>
            </div>
          </div>
          {products.map((p, idx) => (
            <div className="cart-list" key={idx}>
              <Link to="/cart">{p.name}</Link>
              <div className="price-div">
                <span className="price">
                  <i
                    onClick={() => updateProduct({ ...p, total: p.total + 1 })}
                    className="fa fa-plus-circle"
                  ></i>
                  <input
                    className="cart-quantity"
                    type="number"
                    onChange={(e) => {
                      updateProduct({ ...p, total: e.target.value });
                    }}
                    value={p.total}
                  />
                  <i
                    onClick={() => updateProduct({ ...p, total: p.total - 1 })}
                    className="fa fa-minus"
                  ></i>
                </span>
                <span className="price">
                  {formatCurrency(p.price) + " VND"}
                </span>
                <span className="price">
                  {formatCurrency(p.price * p.total) + " VND"}
                </span>
                <span
                  onClick={() => deleteProduct(p)}
                  className="cart-clear-single-icon"
                >
                  <i className="fa fa-trash"></i>
                </span>
              </div>
            </div>
          ))}
          <hr />
          <p>
            Total{" "}
            <span className="price" style={{ color: "black" }}>
              <b>{formatCurrency(totalPrice()) + " VND"}</b>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
