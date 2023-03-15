import React from 'react';
import Header from './Header';
import {Container} from '@mui/material'

export default function Layout({children}){
    return(
        <div>
            <Header />
            <Container maxWidth="sm">
                {children}
            </Container>
        </div>
    )
}