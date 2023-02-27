import { useState } from "react";

const Form = (props) => {
  const [productType, setproductType] = useState([]);
  const [data, setData] = useState({
    sku: "",
    name: "",
    price: "",
    type: "",
    size: "",
    height: "",
    width: "",
    length: "",
    weight: "",
  });
  const handleChange = (e) => {
    setproductType(e.target.value);
    setData({ ...data, type: e.target.value });
  };

  return (
    <>
      <form className="inline-grid grid-cols-[fit-content(150px)_fit-content(150px)] p-2 border-2 m-3 shrink text-center items-center">
        <label htmlFor="sku" className="">
          SKU
        </label>
        <input
          id="sku"
          type="text"
          placeholder="#sku"
          onChange={(e) => {
            setData({ ...data, sku: e.target.value });
            props.formToNew(data);
          }}
          className="placeholder:italic placeholder:text-slate-400 bg-white border border-slate-300 rounded-md mx-1 my-2 py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
        />

        <label htmlFor="name" className="">
          Name
        </label>
        <input
          id="name"
          type="text"
          placeholder="#name"
          onChange={(e) => {
            setData({ ...data, name: e.target.value });
            props.formToNew(data);
          }}
          className="placeholder:italic placeholder:text-slate-400 bg-white border border-slate-300 rounded-md mx-1 my-2 py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
        />

        <label htmlFor="price" className="">
          Price
        </label>
        <input
          id="price"
          type="number"
          placeholder="#price"
          onChange={(e) => {
            setData({ ...data, price: e.target.value });
            props.formToNew(data);
          }}
          className="placeholder:italic placeholder:text-slate-400 bg-white border border-slate-300 rounded-md mx-1 my-2 py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
        />
        <label htmlFor="productType">Type Switcher</label>
        <select
          name="productType"
          id="productType"
          value={data.type}
          onChange={handleChange}
          className="placeholder:italic placeholder:text-slate-400 bg-white border border-slate-300 rounded-md mx-1 my-2 py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
        >
          <option value=""></option>
          <option value="dvd">DVD</option>
          <option value="book">Book</option>
          <option value="furniture">Furniture</option>
        </select>
        <label htmlFor="size" hidden={productType === "dvd" ? false : true}>
          Size (MB)
        </label>
        <input
          id="size"
          type="number"
          placeholder="#size"
          hidden={productType === "dvd" ? false : true}
          onChange={(e) => {
            setData({ ...data, size: e.target.value });
            props.formToNew(data);
          }}
          className="placeholder:italic placeholder:text-slate-400 bg-white border border-slate-300 rounded-md mx-1 my-2 py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
        />
        <label
          htmlFor="height"
          hidden={productType === "furniture" ? false : true}
        >
          Height (CM)
        </label>
        <input
          id="height"
          type="number"
          placeholder="#height"
          hidden={productType === "furniture" ? false : true}
          onChange={(e) => {
            setData({ ...data, height: e.target.value });
            props.formToNew(data);
          }}
          className="placeholder:italic placeholder:text-slate-400 bg-white border border-slate-300 rounded-md mx-1 my-2 py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
        />
        <label
          htmlFor="width"
          hidden={productType === "furniture" ? false : true}
        >
          Width (CM)
        </label>
        <input
          id="width"
          type="number"
          placeholder="#width"
          hidden={productType === "furniture" ? false : true}
          onChange={(e) => {
            setData({ ...data, width: e.target.value });
            props.formToNew(data);
          }}
          className="placeholder:italic placeholder:text-slate-400 bg-white border border-slate-300 rounded-md mx-1 my-2 py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
        />
        <label
          htmlFor="length"
          hidden={productType === "furniture" ? false : true}
        >
          Length (CM)
        </label>
        <input
          id="length"
          type="number"
          placeholder="#length"
          hidden={productType === "furniture" ? false : true}
          onChange={(e) => {
            setData({ ...data, length: e.target.value });
            props.formToNew(data);
          }}
          className="placeholder:italic placeholder:text-slate-400 bg-white border border-slate-300 rounded-md mx-1 my-2 py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
        />
        <label htmlFor="weight" hidden={productType === "book" ? false : true}>
          Weight (KG)
        </label>
        <input
          id="weight"
          type="number"
          placeholder="#weight"
          hidden={productType === "book" ? false : true}
          onChange={(e) => {
            setData({ ...data, weight: e.target.value });
            props.formToNew(data);
          }}
          className="placeholder:italic placeholder:text-slate-400 bg-white border border-slate-300 rounded-md mx-1 my-2 py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
        />
      </form>
    </>
  );
};

export default Form;
