import React from 'react'
import { Link } from "react-router-dom";
import $ from "jquery";



const NewButtons = (props) => {

  const saveNew = () => {
    $.ajax({
      type: "post",
      url: "http://localhost/reactproject/insert.php",
      data: {
        'sku':props.headerMessage.sku,
        'name':props.headerMessage.name,
        'price':props.headerMessage.price,
        'type':props.headerMessage.type,
        'size':props.headerMessage.size,
        'weight':props.headerMessage.weight,
        'height':props.headerMessage.height,
        'width': props.headerMessage.width,
        'length':props.headerMessage.length,
      },
      success: function() {   
        window.location.reload();  
    }
    });
  } 
  return (
    <div>
        <button
      
      onClick={saveNew}
      className="text-white bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-2.5 py-2.5 md:px-5 md:py-2.5 text-center mr-2 mb-2"
    >
      Save
    </button>
    <Link
      to="/"
      className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 font-medium rounded-lg text-sm px-2.5 py-2.5 md:px-5 md:py-2.5 text-center mr-2 mb-2"
    >
      Back
    </Link>
  </div>
  )
}

export default NewButtons