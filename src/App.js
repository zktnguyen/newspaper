import React, { Component } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import SearchBar from './components/SearchBar';

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
        <SearchBar />
      </div>
    );
  }
}

export default App;
