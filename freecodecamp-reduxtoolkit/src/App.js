import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import {actions} from "./store/index";

function App() {
  const counter = useSelector((state) => state.counter);

  const dispatch = useDispatch();

  const increment = () => {
    dispatch(actions.increment())
  }

  const decrement = () => {
    dispatch(actions.decrement())
  }

  const addBy = () => {
    dispatch(actions.addBy(10))
  }

  return (
    <div className="App">
      <h2>Free Code Camp  - Redux Toolkit State Management</h2>
      <h3>Counter App - {counter}</h3>
      <button onClick={increment}>Increment</button>&nbsp;
      <button onClick={decrement}>Decrement</button>&nbsp;
      <button onClick={addBy}>Add By</button>&nbsp;
    </div>
  );
}

export default App;
