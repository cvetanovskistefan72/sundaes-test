import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';
import OrderSummary from './pages/summary/OrderSummary';
import Posts from './pages/Posts/Posts';

function App() {
  return (
    <div className="App">
      <OrderSummary/>
      <Posts />
    </div>
  );
}

export default App;
