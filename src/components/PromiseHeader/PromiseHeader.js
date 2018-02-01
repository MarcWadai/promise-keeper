import React, { Component } from 'react';
import Button from 'material-ui/Button';
import './PromiseHeader.css';

class PromiseHeader extends Component {
    render() {
      return (
        // <div class="header">
          <div className="promise-header-wrapper">
           <h1 className="header-title">
             PROMISE CHAIN
           </h1>
           <span className="header-subtitle">Keep all your promises on the blockchain, they will stay here forever ! </span>
          </div>
        // </div>
       
      );
    }
  }

export default PromiseHeader;