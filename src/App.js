import React, { Component } from 'react';
import './App.css';
import PromiseInput from './components/PromiseInput/PromiseInput';
import PromiseList from'./components/PromiseList/PromiseList';
import PromiseHeader from'./components/PromiseHeader/PromiseHeader';
import {connect} from 'react-redux';
import { addPromise } from './store/actions';
import PropTypes from 'prop-types'

class App extends Component {

  componentDidMount() {
    console.log('this.props.promiseList app.js', this.props.promiseList);
  }

  componentDidCatch(error, info){
    console.log('error:', error, 'info:', info);
  }

  render() {
    return (
      <div className="App">
        <PromiseHeader className="promise-header"></PromiseHeader>
        <PromiseInput className="promise-top" callbackPromiseParent={(prom) => this.props.receivePromiseToAdd(prom)}></PromiseInput>
        <PromiseList promiseList={this.props.promises} className="promise-bottom"></PromiseList>
      </div>
    );
  }
}

function mapStateToProps(state) { 
  return {
      promises: state.promises
    };
} 

function mapDispatchToProps(dispatch) {
  return { 
      receivePromiseToAdd: promise => {
        dispatch(addPromise(promise))
      }
    };
} 

export default connect( 
  mapStateToProps, 
    mapDispatchToProps 
)(App);
