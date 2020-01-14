import React from 'react';
import './App.css';
import {Component} from 'react'
import Contacts from './Components/Search'

class App extends Component  {



state ={

  contacts:[]
}

componentDidMount(){

  fetch('http://jsonplaceholder.typicode.com/users')
  .then(res => res.json())
  .then((data)=>{
    this.setState({contacts: data })
  })
  .catch(console.log)
}

render(){

  return (
    
    <div class="card">
        <Contacts contacts ={this.state.contacts}/>
      </div>
    );
  }
}


export default App;
