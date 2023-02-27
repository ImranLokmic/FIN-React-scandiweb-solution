import React from 'react'
import { Title, NewButtons } from "../../components/index.js";

const NewHeader = (props) => {
  return (
    <>
      <div className="grid justify-items-stretch grid-cols-2">
        <div>
          <Title />
        </div>
        <div className="justify-self-end self-center"> 
          <NewButtons headerMessage={props.appNewMessage}/>
        </div>
      </div>
      <hr className="h-px my-4 bg-gray-200 border-0 dark:bg-gray-700" />
    </>
  )
}

export default NewHeader