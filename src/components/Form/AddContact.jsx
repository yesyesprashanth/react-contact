import React, {useState, useContext} from 'react'
import Card from '../UI/Card';
import TextField from './TextField';
import { ContactContext } from '../../Store/ContactProvider';

export default function AddContact() {
  const contactOperation = useContext(ContactContext);
  const [contact, setContact] = useState({name:"", email:""});

  function addData(e){
    e.preventDefault();
    if(contact.name=="" || contact.email == ""){
      alert("all fields are neccessary");
      return;
    }    

    const newContact = {
      name : contact.name,
      email :contact.email,
    }
    
    contactOperation.addContact(newContact);

    // addContactHandler(contact);
    setContact({name:"", email:""});    
    console.log(contactOperation.contacts);
  }

  const addTextData=(e)=>{
      setContact({...contact, [e.target.name]:e.target.value})
  }

  return (
    <Card>
        <div className = "formheader">Add Contact</div>
        <form onSubmit={addData}>
            <TextField labelname = "Name" textName = "name" textValue = {contact.name} addData = {addTextData} />
            <TextField labelname = "Email" textName = "email" textValue = {contact.email} addData = {addTextData} />
          <button type="submit">Submit</button>
        </form>        
    </Card>
  )
}
