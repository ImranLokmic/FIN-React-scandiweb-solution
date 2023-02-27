import { Link } from "react-router-dom";
import "./buttons.scss";
import $ from "jquery";

const Buttons = (props) => {
  const deletedb = () => {
    $.ajax({
      type: "post",
      url: "http://localhost/reactproject/deleteproducts.php",
      data: {
        id: props.headerMessage,
      },
      success: function() {   
        window.location.reload();  
    }
    });
  };

  return (
    <div>
      <Link
        to="/add-products"
        className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 font-medium rounded-lg text-sm px-2.5 py-2.5 md:px-5 md:py-2.5 text-center mr-2 mb-2"
      >
        ADD
      </Link>
      <button
        
        onClick={deletedb}
        className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-2.5 py-2.5 md:px-5 md:py-2.5 text-center mr-2 mb-2"
      >
        MASS DELETE
      </button>
    </div>
  );
};

export default Buttons;
