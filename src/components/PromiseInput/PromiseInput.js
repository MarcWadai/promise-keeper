import React, { Component } from 'react';
import Button from 'material-ui/Button';
import './PromiseInput.css';
import PropTypes from 'prop-types';
import DialogModal from '../Common/AlertDialog';

export default class PromiseInput extends Component {

  constructor() {
    super();
    this.state = {
      promiseText: "",
      openAlert: false 
    };
  }

  openDialog() {
    this.setState({
      openAlert: true
    }) 
  }

  onPromiseChange(e){
      this.setState({
      promiseText: e.target.value
    });
  }

  reallyAddPromise(reallyAdd) {

    if (reallyAdd) {
      this.props.callbackPromiseParent(this.state.promiseText);
    }
    this.setState({
      openAlert: false
    });
  }

    render() {
      return (
          <div className="promise-input-wrapper">
            <textarea value={this.state.promiseText} onChange={(event) => this.onPromiseChange(event)} className="promise-text" placeholder="Enter your promise" name="promise-text" />
            <Button onClick={this.openDialog.bind(this)} className="promise-button" raised color="primary">
                Add Promise
           </Button>
           <DialogModal open={this.state.openAlert} responseDialog={(reallyAdd) => this.reallyAddPromise(reallyAdd)}></DialogModal>
          </div>
      );
    }
  }

  PromiseInput.propTypes = {
    callbackPromiseParent: PropTypes.func
  }