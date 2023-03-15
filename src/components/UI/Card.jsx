import React from 'react';
import styles from './Card.module.css';

export default function ({children}) {
  return (
    <div className = {styles.card}>        
        {children}
    </div>
  )
}
