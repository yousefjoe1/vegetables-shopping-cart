import React from "react";
import { useSelector } from "react-redux";
import "./nav.css";
import { ImCart } from "react-icons/im";
import Singlepro from "./Singlepro";
import { useState } from "react";
import emptycart from "../imgs/emptycart.jpeg";
import { useDispatch } from "react-redux";
import { changepro } from "../redux/selectSlice";

const Nav = (props) => {
  const [cartisopen, setCartisopen] = useState(false);
  const [isscroll, setIsscroll] = useState(false);
  const data = useSelector((state) => state.allProducts.cart);
  const Totalprice = useSelector((state) => state.allProducts.Total);
  const dispatch = useDispatch();
  const [eff, setEff] = useState("normal");
  const showCart = () => {
    setCartisopen(true);
    setTimeout(() => {
      setEff("single");
    }, 200);
  };
  const hideCart = () => {
    setCartisopen(false);
  };

  window.addEventListener("scroll", () => {
    if (window.pageYOffset > 80) {
      setIsscroll(true);
    } else {
      setIsscroll(false);
    }
  });

  return (
    <header className={`header ${isscroll && "fixed-header"}`}>
      <div className="header-div">
        <h1>Vegetables</h1>
        <div className="right-nav">
          <div className="total__list-count">
            <p>Items Num: {data.length}</p>
            <p>Total: {Totalprice} $ </p>
          </div>
          <div className="icon-div">
            <ImCart onClick={showCart} className="icon" />
            {cartisopen && (
              <div className="selected__products">
                <button onClick={hideCart} className="close-cart-btn">
                  X
                </button>
                {data.map((pr) => (
                  <Singlepro effect={eff} key={pr.id} pro={pr} />
                ))}
                {data.length > 0 ? (
                  <button className="checkout-btn">proceed to checkout</button>
                ) : (
                  <div className="empty-cart-div">
                    <p>Cart Is Emptey</p>
                    <img src={emptycart} alt="" />
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Nav;
