<<<<<<< HEAD
import React from 'react';
import './App.css';
import HQTFuncDemo from './component/HQT_Funcdemo'; 
import HQTClassComp from './component/HQT_ClassComp'; 

function App() {
  const users = {
    userName: "K22CNTT3",
    password: "13042004",
    fistName: "Ha Quoc",
    lastName: "Thanh",
  };

  function formatName(user) {
    return <h2>Xin Chào, {user.fistName} {user.lastName}</h2>;
  }

  return (
    <div className="App">
      <div>
        <p>FullName: {users.fistName} {users.lastName}</p>
        {formatName(users)}
      </div>
      <div>
        <HQTFuncDemo/>
        <HQTFuncDemo userName="HQT" fullName="Ha Quoc Thanh" age="45" />
      </div>
      <div>
        <HQTClassComp/>
        <HQTClassComp company="123" course="Hathanh"/>
      </div>
=======
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
>>>>>>> 591abc180f54d9bf2c87f585fedb8464eadf434a
    </div>
  );
}

export default App;
