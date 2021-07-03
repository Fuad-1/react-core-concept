import React from 'react';
import logo from './logo.svg';
import './App.css';
//1:
// var person = {
//   name: "mahfuz",
//   job: "singer"
// }  ;
// var person = {
//   name: "Eva Rahman",
//   job: "singer"
// }  ;

// var styles = {
//   color: 'red',
//   backgroundColor: 'yellow'
// }
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit done <code>src/App.js</code> and save to reload.
        </p>
        {/* <h1 className =""  style={styles}>My Heading: {person.name + " " + person.job}</h1>
        <h1 className =""  style={{backgroundColor: 'cyan', color: 'yellow'}}>My Heading: {person.name + " " + person.job}</h1>
        <p>My first React apps</p> */}
        <Person></Person>
        <Person></Person>
        <Person></Person>
        <Person></Person>
      </header>
    </div>
  );
}
//Component:()
////1. similar in look different in data
// function Person() {
//   return (
//   <div style={{border: "2px solid red", margin: "10px;"}}>
//   <h1>Name: Sakib Al Hasan </h1>
//   <h3>Hero of the year</h3>
//   </div>
//   )
// }

function Person() {
  const personStyle ={
    border: '2px solid red',
    margin: '10px'
  }
  return (
  <div style={personStyle}>
  <h1>Name: Sakib Al Hasan </h1>
  <h3>Hero of the year</h3>
  </div>
  )
}
//pass dynamic data

export default App;
