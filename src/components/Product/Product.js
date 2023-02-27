import React from "react";
import "./product.scss";
import $ from "jquery";

const Product = (props) => {
  const Message = () => {
    let items = [];

    $.each($("input[name='chkbox']"), function () {
      $.each($("input[name='chkbox']:checked"), function () {
        items.push($(this).val());
      });
      props.productMessage(items);
      items = [];
    });
  };
  return (
    <div className="inline-grid grid-cols-[2vw_fit-content(150px)] p-2 border-2 m-3 shrink text-center">
      <input
        name="chkbox"
        type="checkbox"
        className=" indeterminate:bg-gray-300 checked:bg-blue-500 col-span-2 justify-self-start"
        value={props.product_sku}
        onChange={Message}
      />
      <div className="col-start-2">{props.product_sku}</div>
      <div className="col-start-2">{props.product_name}</div>
      <div className="col-start-2">{props.product_price} $</div>
      <div className="col-start-2">{props.product_unique}</div>
    </div>
  );
};

export default Product;
