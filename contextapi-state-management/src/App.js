import './App.css';
import ChildC from './components/ChildC';
import React, { createContext } from 'react';
import ChildA from './components/ChildA';
import ChildB from './components/ChildB';

const data = createContext();
const data1 = createContext();

function App() {

  const name = "Prasannakumar Jha";
  const gender = "Male";

  return (
    <div className="App">
      <h1>Context Api State Management</h1>
      <data.Provider value={name}>
        <data1.Provider value={gender}>
        <ChildA></ChildA>
        </data1.Provider>
      </data.Provider>
    </div>
  );
}

export default App;
export { data ,data1}