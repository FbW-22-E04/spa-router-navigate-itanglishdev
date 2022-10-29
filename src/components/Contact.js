import React from "react";
import { useNavigate } from "react-router-dom";

const Contact = () => {
 const navigation = useNavigate()

 const goBack =()=> {
  navigation('/home')
 }

  return <div>
    <h1>Contact</h1>
    <button onClick={goBack} >Submit</button>
  </div>;
};

export default Contact;
