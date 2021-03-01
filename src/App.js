import logo from './logo.svg';
import './App.css';
import { Component } from 'react';

import Navbar from './components/Navbar/Navbar';
import Section1 from '../src/components/Home/Section1/Section1';
import Section2 from '../src/components/Home/Section2/Section2';
import Homenews from '../src/containers/Homenews/Homenews';
import StockPick from '../src/containers/Stockpick/Stockpick';

class App extends Component {
  
  render() {
    return (
      <div className="App">
        <Navbar />
        <StockPick />
        <Homenews />
        
      </div>
    );
  }
}

export default App;
