import React from "react";
import { useDispatch } from "react-redux";
import { deletePro } from "../redux/selectSlice";

const Singlepro = (props) => {
  const dispatch = useDispatch();
  const deletePr = (e, id) => {
    dispatch(deletePro(id));
  };

  return (
    <div className={`single-product-cart ${props.effect}`}>
      <img src={props.pro.src} alt="" />
      <div className="name__price">
        <p>{props.pro.title}</p>
        <p>{props.pro.price} $</p>
      </div>
      <div className="total__amount">
        <p>No:{props.pro.amount}</p>
        <p>Total:{props.pro.price * props.pro.amount} $</p>
      </div>
      <button onClick={(e) => deletePr(e, props.pro.id)}>X</button>
    </div>
  );
};

export default Singlepro;
