import React, { Component } from 'react';
import './App.css';
import NavBar from './components/NavBar';

const links = [
  { title: 'link#1', href: '/', isLogo: false },  
  { title: 'DynaNews', href: '/', isLogo: true },      
  { title: 'link#2', href: '/', isLogo: false }
];

class App extends Component {
  render() {
    return (
      <div>
        <NavBar links={links} />
      </div>
    );
  }
}

export default App;
