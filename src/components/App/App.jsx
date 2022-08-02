import React, { Component } from 'react';
import { Container } from "./App.styled";

import DataInputForm from '../DataInputForm/DataInputForm';
import Section from '../Section/Section';
import Contacts from '../Contacts/Contacts';


export default class App extends Component{
  state={
    contacts:[
      {name: "max", number: "35-14-28"},
      {name: "bob", number: "35-14-29"},
      {name: "lina", number: "35-14-30"},],

  }
  

  render(){  
    return (
      <Container>
        <Section>Phonebook 
          <DataInputForm/>
        </Section>
        {this.state.contacts.length > 0 && 
        <Section>Contacts 
          <Contacts 
          contacts={this.state.contacts}/>
        </Section>}
      </Container>
    
    )

  };


}
