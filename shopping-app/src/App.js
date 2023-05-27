import './App.css';
import Header from './components/Header';
import ProductListing from './components/ProductListing';
import ProductDetails from './components/ProductDetails';
import NotFoundPage from './components/NotFound';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';


function App() {
  return (
    <div className="App">

      <Header />
      <Router>
        <Routes>
          <Route path='/' element={<ProductListing />}></Route>
          <Route path='/product/:productId' element={<ProductDetails />}></Route>
          <Route path="*" element={<NotFoundPage />}></Route>
        </Routes>
      </Router>

    </div>
  );
}

export default App;
