import React from 'react'
import {Container, Divider, Typography} from '@mui/material';
import styles from './Layout.module.css';

export default function Header() {
  return (
    <div className="header">
        <Container maxWidth="md">
            <Typography align='center' variant="h4">
              Contacts
            </Typography>
         </Container>
         <Divider />
    </div>
  )
}
