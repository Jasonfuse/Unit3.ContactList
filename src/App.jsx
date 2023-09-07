import { useEffect, useState } from 'react'
import './App.css'
import Contacts from './Contacts.jsx'
import Contact from './Contact.jsx'

function App() {
  const [contacts, setContacts] = useState([]);
  const [hash, setHash] = useState(window.location.hash.slice(1)*1);

  useEffect(() => {
    const fetchData = async() => {
      const response = await fetch("https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users");
      const json = await response.json();
      setContacts(json);
    }
    fetchData();
  }, []);

  useEffect(() => {
    window.addEventListener('hashchange', () => {
      setHash(window.location.hash.slice(1)*1);
    });
  }, []);

  const contact = contacts.find( contact => contact.id === hash );

  return (
    <>
      <h1> Contact List ({ contacts.length }) </h1>
      <Contacts contacts = { contacts } hash = { hash} />
      <Contact contact = {contact} />
    </>
  );
}

export default App
