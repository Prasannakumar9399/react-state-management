import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import './App.css';
import * as actions from './reduxContainer/Action';

function App() {
  const name = useSelector((state) => state.name);
  const age = useSelector((state) => state.age);
  const gender = useSelector((state) => state.gender);
  const designation = useSelector((state) => { return state.designation });
  const [tempName, setTempName] = useState(name);
  const [tempAge, setTempAge] = useState(age);
  const [tempGender, setTempGender] = useState(gender);
  const [tempDesignation, setTempDesignation] = useState(designation);

  const handleNameChange = (event) => {
    setTempName(event.target.value);
  }

  const handleAgeChange = (event) => {
    setTempAge(event.target.value);
  }

  const handleGenderChange = (event) => {
    setTempGender(event.target.value);
  }

  const handleDesignationChange = (event) => {
    setTempDesignation(event.target.value);
  }

  const dispatch = useDispatch()

  const getName = () => {
    dispatch(actions.getName());
    alert("Name is : " + name);
  }

  const getAge = () => {
    // dispatch({ type: "getAge" });
    dispatch(actions.getAge());
    alert("Age is : " + age);

  }

  const getGender = () => {
    // dispatch({ type: "getGender" });
    dispatch(actions.getGender());
    alert("Gender is : " + gender);

  }

  const getDesignation = () => {
    // dispatch({ type: "getDesignation" });
    dispatch(actions.getDesignation());
    alert("Designation is :" + designation);

  }

  const setName = () => {
    // dispatch({ type: "setName", updatedName: tempName });
    dispatch(actions.setName(tempName));
  }

  const setAge = () => {
    // dispatch({ type: "setAge", updateAge: tempAge });
    dispatch(actions.setAge(tempAge));
  }

  const setGender = () => {
    // dispatch({ type: "setGender", updateGender: tempGender });
    dispatch(actions.setGender(tempGender));
  }

  const setDesignation = () => {
    // dispatch({ type: "setDesignation", updateDesignation: tempDesignation });
    dispatch(actions.setDesignation(tempDesignation));
  }

  return (
    <div className="App">
      <h1>Practicing Redux</h1>
      <div className='button-container'>
        <button onClick={() => getName()}>{name}</button>
        <button onClick={() => getAge()}>{age}</button>
        <button onClick={() => getGender()}>{gender}</button>
        <button onClick={() => getDesignation()}>{designation}</button>
      </div>
      <div className='update-container'>
        <div className='name-input common'>
          <input type="text" placeholder='Enter Name' defaultValue={name} onChange={handleNameChange}></input>
          <button onClick={() => setName()}>Submit</button>
        </div>
        <div className='age-input common'>
          <input type="text" placeholder="Enter Age" defaultValue={age} onChange={handleAgeChange}></input>
          <button onClick={() => setAge()}>Submit</button>
        </div>
        <div className='gender-input common'>
          <input type="text" placeholder="Enter Gender" defaultValue={gender} onChange={handleGenderChange}></input>
          <button onClick={() => setGender()}>Submit</button>
        </div>
        <div className='designation-input common'>
          <input type="text" placeholder="Enter Designation" defaultValue={designation} onChange={handleDesignationChange}></input>
          <button onClick={() => setDesignation()}>Submit</button>
        </div>
      </div>

    </div>
  );
}

export default App;
