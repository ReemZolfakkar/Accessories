import React,{useContext} from "react";
import { myContext } from './../../Contexts/context1';

function Contact() {
  const d=useContext(myContext)
  return <div>{d}</div>;
}

export default Contact;
