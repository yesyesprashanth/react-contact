import React, {useContext} from 'react'
import ContactCard from './ContactCard';
import { ContactContext } from '../../Store/ContactProvider';

export default function ContactList() {
    const contactctx = useContext(ContactContext);

    return (
    <div className = "ui celled list">
        {
            contactctx.contacts.map(contact=>(                  
                <ContactCard contact = {contact} key = {contact.id}/>
            ))
        }
    </div>
  )
}
