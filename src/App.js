
import './App.css';
import React, { Component } from 'react'
import Navbar from './components/Navbar';
// import Newscard from './components/Newscard';
import Newscomp from './components/Newscomp';
// import { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

export default class App extends Component {

  
  // state={
  //   page:2
  // }
  pageSize=20
  
  // changepageno=(page)=>{
  //     this.setState({page:page})
  //     console.log(this.state.page)
  // }
  country='us'
  render() {
    return (
      <Router>
     
      <Navbar 
      // changepageno={this.changepageno}
      />
      <Routes>
      <Route path="/" element={<Newscomp key='general' pageSize={this.pageSize} country={this.country} category='general'/>}/>
      <Route path="/Business" element={<Newscomp key='business' pageSize={this.pageSize} country={this.country} category='business'/>}/>
      <Route path="/Entertainment" element={<Newscomp key='entertainment' pageSize={this.pageSize} country={this.country} category='entertainment'/>} />
      <Route path="/Health" element={<Newscomp key='health' pageSize={this.pageSize} country={this.country} category='health'/>} />
      <Route path="/Science" element={<Newscomp key='science' pageSize={this.pageSize} country={this.country} category='science'/>} />
      <Route path="/Sports" element={<Newscomp key='sports' pageSize={this.pageSize} country={this.country} category='sports'/>} />
      <Route path="/Technology" element={<Newscomp key='technology' pageSize={this.pageSize} country={this.country} category='technology'/>} />
      </Routes>
      {/* <Newscomp key='' pageSize='4' country='in' category='science'/> */}
      {/* <Newscomp key=''/> */}

      
      </Router>
    )
  }
}

// export default App