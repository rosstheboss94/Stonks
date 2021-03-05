import './App.css';
import { Component } from 'react';
import Navbar from './components/Navbar/Navbar';
import Header from '../src/components/Home/Header/Header';
import Features from './components/Features/Features';
import Modelselection from '../src/components/Modelselection/Modelselection';

import Homenews from '../src/containers/Homenews/Homenews';
import StockPick from '../src/containers/Stockpick/Stockpick';

class App extends Component {
  state = {
    modelSubmit: false
  }

  modelSubmitHandler = (event) => {
    event.preventDefault();
    this.setState({
      modelSubmit: true,
    });
  };

  render() {
    let stockPick;
    
    if (this.state.modelSubmit === true) {
      stockPick = <StockPick />
    }
    
    return (
      <div className="App">
        <Navbar />
        <Header />
        <div>test</div>
        <Features />
        <Homenews />
        {/*<Modelselection modelSelected={}/>
        stockPick}*/}
        
        
      </div>
    );
  }
}

export default App;
