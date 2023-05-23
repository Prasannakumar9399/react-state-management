import './App.css';
import { useSelector, useDispatch } from 'react-redux';


function App() {
  const counter = useSelector((state) => state.counter);

  const dispatch = useDispatch();

  const increment = () => {
    dispatch({ type: "INC" })
  }

  const decrement = () => {
    dispatch({ type: "DEC" })
  }

  const addBy = () => {
    dispatch({ type: "ADD", payload: 10 })
  }

  return (
    <div className="App">
      <h2>Free Code Camp  - Redux State Management</h2>
      <h3>Counter App - {counter}</h3>
      <button onClick={increment}>Increment</button>&nbsp;
      <button onClick={decrement}>Decrement</button>&nbsp;
      <button onClick={addBy}>Add By</button>&nbsp;
    </div>
  );
}

export default App;
