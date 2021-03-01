import React, { Component } from 'react';
import axios from 'axios';
import Newspanel from '../../components/Newspanel/Newspanel';
import '../Homenews/Homenews.css';


class Homenews extends Component {
    state = {
        spynews: null,
        qqqnews: null,
        dianews: null
    }
    
    componentDidMount(){
        if (this.state.spynews == null){
            axios.get('https://api.polygon.io/v1/meta/symbols/spy/news?perpage=1&page=1&apiKey=UGuFwEQXJHjqRevkHueNpGxY2bREKkBF')
             .then(response => {
                  this.setState({spynews:response.data});
            });
        }

        if (this.state.qqqnews == null){
            axios.get('https://api.polygon.io/v1/meta/symbols/qqq/news?perpage=1&page=1&apiKey=UGuFwEQXJHjqRevkHueNpGxY2bREKkBF')
            .then(response => {
                this.setState({qqqnews:response.data});
            });
        }
        
        if (this.state.dianews == null){
            axios.get('https://api.polygon.io/v1/meta/symbols/dia/news?perpage=1&page=1&apiKey=UGuFwEQXJHjqRevkHueNpGxY2bREKkBF')
           .then(response => {
                this.setState({dianews:response.data});
            });
        }
        
    }

    shouldComponentUpdate(){
        if (this.state.spynews === null || this.state.qqqnews === null || this.state.dianews ===  null){
            return true
        }
        else{
            return false
        }
    }

    render() {
       let spystocks = this.state.spynews;
       let qqqstocks = this.state.qqqnews;
       let diastocks = this.state.dianews;
       
        if (spystocks !== null){
          spystocks = (
              <div className="homenews">
                  {this.state.spynews.map((stock, index) => {
                    return <Newspanel
                    id = {this.state.spynews[index].symbols[0]} 
                    image={this.state.spynews[index].image}
                    title={this.state.spynews[index].title}
                    url={this.state.spynews[index].url}/>  
                  })}
              </div>
          );

        }

        if (qqqstocks !== null){
            qqqstocks = (
                <div className="homenews">
                    {this.state.qqqnews.map((stock, index) => {
                      return <Newspanel
                      id = {this.state.qqqnews[index].symbols[0]} 
                      image={this.state.qqqnews[index].image}
                      title={this.state.qqqnews[index].title}
                      url={this.state.qqqnews[index].url}/>  
                    })}
                </div>
            );
  
        }

        if (diastocks !== null){
            diastocks = (
                <div className="homenews">
                    {this.state.dianews.map((stock, index) => {
                      return <Newspanel
                      id = {this.state.dianews[index].symbols[0]} 
                      image={this.state.dianews[index].image}
                      title={this.state.dianews[index].title}
                      url={this.state.dianews[index].url}/>  
                    })}
                </div>
            );
  
        }

        return (
           <div className="homenews-container">
               {spystocks}
               {qqqstocks}
               {diastocks}
            </div>
            
        );
    };
}

export default Homenews;


        

