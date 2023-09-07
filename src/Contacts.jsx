import { useEffect, useState } from 'react'
import './App.css'

function Contacts(props) {
  const { contacts, hash } = props;

  return (
    <>
      <div id = "container">
        {
          contacts.map( contact => {
            return (
              <div key = { contact.id } className = { contact.id === hash ? "selected": ""}> 
                <a href = {`#${ contact.id === hash ? "": contact.id }`} >
                  { contact.name } 
                </a>
              </div>
            );
          })
        }
      </div>
    </>
  );
}

export default Contacts
