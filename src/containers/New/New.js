import React from 'react'
import { Form } from "../../components/index.js";

const New = (props) => {
  const formToNew = (message) => {
    props.newToApp(message);
  }
  return (
    <Form formToNew={formToNew}/>
  )
}

export default New