// import logo from './logo.svg';
import React from 'react';
// import './App.css';
import './components/Hello';
import MobileManufacturers from './components/MobileManufacturers';
import MobileOs from './components/MobileOs';
import Hello from './components/Hello';  //import for default export
import Helloarrow from './components/Helloarrow';
import { NamedHello } from './components/NamedHello';
import PrintName from './components/PrintName';


const App=()=>{
  return (
    <div className="App">
      <header className="App-header">
        <Hello /> 
        <Helloarrow />
        <NamedHello />
        <PrintName name={"kamal"}/>
        <MobileOs />
        <MobileManufacturers />
      </header>
    </div>
  );
}

export default App;
