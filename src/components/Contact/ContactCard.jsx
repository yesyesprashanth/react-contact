import React from 'react'
import user from '../../images/user.png';

export default function ContactCard(props) {
  return (
    <div className = "item">
        <img src = {user} className = "ui avatar image" alt="user" />
        <div className = "content">
            <div className = "header">{props.contact.name}</div>
            <div className ="">{props.contact.email}</div>
        </div>  
        <i className = "trash alternate ouline icon" style={{color:"red", marginTop:"10px"}}        
        ></i>                  
    </div>
  )
}
