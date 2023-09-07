import { useEffect, useState } from 'react'
import './App.css'

function Contact(props) {
  const { contact } = props;

  return (
    <>
      <hr/>
      <h2> { contact ? "Selected: " + contact.name: null } </h2>
      <p> { contact ? `Username: ${contact.username}`: null } </p>
      <p> { contact ? `Email: ${contact.email}`: null }</p>
      <p> { contact ? `Phone Number: ${contact.phone}`: null }</p>
      <p> { contact ? `Company: ${contact.company.name}`: null }</p>
    </>
  );
}

export default Contact
