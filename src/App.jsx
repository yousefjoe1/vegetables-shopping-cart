import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import Nav from "./comp/Nav";
import { FcApproval } from "react-icons/fc";
import { addProduct, decrease, increase } from "./redux/selectSlice";

const App = () => {
  const data = useSelector((state) => state.allProducts.products);
  const cartProducts = useSelector((state) => state.allProducts.cart);
  const [isadd, setIsadd] = useState(false);

  const dispatch = useDispatch();

  const incre = (e) => {
    dispatch(increase(e));
  };

  const decre = (e) => {
    dispatch(decrease(e));
  };

  const addpro = (id) => {
    dispatch(addProduct(id));
  };

  return (
    <React.Fragment>
      <Nav />
      <div className="product__container">
        {data.map((veg) => (
          <div key={veg.id} className="product">
            <img src={veg.src} alt="" />
            <h3>{veg.title}</h3>
            <h4>$ {veg.price}</h4>
            <div className="inc-dec-amount-div">
              <button onClick={(e) => decre(veg.id)}>-</button>
              <p>{veg.amount}</p>
              <button onClick={(e) => incre(veg.id)}>+</button>
            </div>
            {veg.selected && <FcApproval className="selected-icon" />}
            <button onClick={(e) => addpro(veg.id)} className="add-product-btn">
              Add To Cart{" "}
            </button>
          </div>
        ))}
      </div>
    </React.Fragment>
  );
};

export default App;
