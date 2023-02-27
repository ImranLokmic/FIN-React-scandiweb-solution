import React from "react";
import { Title, Buttons } from "../../components/index.js";
import "./header.scss";

const Header = (props) => {
  return (
    <>
      <div className="grid justify-items-stretch grid-cols-2">
        <div>
          <Title />
        </div>
        <div className="justify-self-end self-center"> 
          <Buttons headerMessage={props.appMessage}/>
        </div>
      </div>
      <hr className="h-px my-4 bg-gray-200 border-0 dark:bg-gray-700" />
    </>
  );
};

export default Header;
