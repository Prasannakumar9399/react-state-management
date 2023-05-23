import './App.css';
import { Provider } from 'react-redux';
import store from './reduxContainer/Store';
import BookContainer from "../src/reduxContainer/BookContainer"

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h3>Redux State Mangement</h3>
        <BookContainer></BookContainer>
      </div>
    </Provider>
  );
}

export default App;
