import React, { Component } from 'react';
import './App.css';
import PromiseInput from './components/PromiseInput/PromiseInput';
import PromiseList from'./components/PromiseList/PromiseList';
import PromiseHeader from'./components/PromiseHeader/PromiseHeader';

class App extends Component {
  constructor() {
    super();
    this.state = {
      promiseList : []
    }
  }

  receivePromiseToAdd(promise) {
    console.log('promise to add in app.js', promise);
    this.setState({
      promiseList: this.state.promiseList.concat(promise)
    })
    
    console.log('promise to add in app.js', this.state.promiseList);
  }


  render() {
    return (
      <div className="App">
        <PromiseHeader className="promise-header"></PromiseHeader>
        <PromiseInput className="promise-top" callbackPromiseParent={(prom) => this.receivePromiseToAdd(prom)}></PromiseInput>
        <PromiseList promiseList={this.state.promiseList} className="promise-bottom"></PromiseList>
      </div>
    );
  }
}

export default App;
