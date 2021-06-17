import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { removeAuth } from "../../Utils/localStorage";
import Input1 from "../Input1";

const Header = (props) => {
  const [renderMenu, setRenderMenu] = useState("none-display");
  const { number } = props;
  useEffect(() => {
    const icon = document.getElementById("menu");
    if (icon) {
      icon.style.transform =
        renderMenu === "display" ? "rotate(90deg)" : "rotate(0deg)";
    }
  }, [renderMenu]);

  const onClickMenu = () => {
    setRenderMenu(renderMenu === "display" ? "none-display" : "display");
  };

  const menu = () => (
    <div className="menu">
      <Link to="/">HOME</Link>
      <button type="button" onClick={onClickMenu}>
        <i className="fa fa-bars" id="menu" />
      </button>
    </div>
  );

  // const dropdownMore = () => (
  //   <div className={`dropdown-more ${renderMenu}`}>
  //     <Link to="/">
  //       MORE<i className="fa fa-caret-down"></i>
  //     </Link>
  //     <div className="dropdown-part">
  //       <Link to="/">Merchandise</Link>
  //       <Link to="/">Extras</Link>
  //       <Link to="/">Media</Link>
  //     </div>
  //   </div>
  // );

  const searchContainer = () => (
    <div className={`search-container ${renderMenu}`}>
      <Input1 placeholder="Search..." additionClassName="header-search-input" />
      <button type="submit">
        <i className="fa fa-search" />
      </button>
    </div>
  );

  const scrollView = (id) => {
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView();
    }
  };

  const logOut = () => {
    removeAuth();
    window.location.reload();
  };

  return (
    <div className="header">
      {menu()}
      <Link
        className={renderMenu}
        to="/"
        onClick={() => scrollView("middle-content")}
      >
        FRUITS
      </Link>
      <Link
        className={renderMenu}
        to="/"
        onClick={() => scrollView("tour-list-container")}
      >
        HOT FRUITS
      </Link>
      <Link className={renderMenu} to="/" onClick={() => scrollView("contact")}>
        CONTACT
      </Link>
      <Link className={renderMenu} to="/" onClick={logOut}>
        LOG OUT
      </Link>
      <Link className={renderMenu} to="/card-information">
        CARD INFORMATION
      </Link>
      {/* {dropdownMore()} */}
      <Link className={renderMenu} to="/cart">
        CART {"(" + number + ")"}
        <i className="fa fa-cart-plus"></i>
      </Link>
      {searchContainer()}
    </div>
  );
};

function mapStateToProps(state) {
  return {
    number: state.cartReducer.products.length,
  };
}

export default connect(mapStateToProps)(Header);
