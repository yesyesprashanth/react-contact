import React from 'react';
import styles from './TextField.module.css';

export default function TextField({labelname, textName, textValue, addData}) {
    
    
  return (
        <div className = {styles.textgroup}>
            <label htmlFor={textName}>{labelname}</label>
            <input type="text" id= {textName} name = {textName} value = {textValue} onChange = {(e)=>addData(e)} />
        </div>
    )
}
