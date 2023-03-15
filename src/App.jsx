import React, {useEffect, useState} from 'react';
import './App.css'
import Layout from './components/Layout/Layout';
import AddContact from './components/Form/AddContact';
import ContactList from './components/Contact/ContactList';
function App()
{
  
  return (
    <Layout>
      <AddContact />
      <ContactList />
    </Layout>
  )
}

export default App
