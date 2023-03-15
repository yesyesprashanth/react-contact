import React, {useState} from 'react'
import { createContext } from 'react'
import ContactList from '../components/Contact/ContactList';

export const ContactContext = createContext({});

export default function ContactProvider({children}) {

    const [contactList, setContactList] = useState([]);

    function addContactHandler(contact){
        console.log(contact);
        setContactList(pv => [...pv, contact]);
        console.log(contactList);
    }

    function removeContactHandler(id){
       setContactList(contactList.filter(contact=>contact.id!=id));
    }

    const contactOperation = {
        addContact:addContactHandler,
        removeContact:removeContactHandler,
        contacts:contactList
    }

  return (
    <ContactContext.Provider value = {contactOperation}>
        {children}
    </ContactContext.Provider>
  )
}
