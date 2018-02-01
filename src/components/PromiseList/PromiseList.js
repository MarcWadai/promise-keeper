import React, { Component } from 'react';
import './PromiseList.css';
import Card, { CardActions, CardContent } from 'material-ui/Card';
import Typography from 'material-ui/Typography';
import PropTypes from 'prop-types';

export default class PromiseList extends Component {
  constructor(props){
    super();
  }


  updatePromiseList() {

  }
    render() {
      return (
        <div className="promise-list-wrapper">
        {this.props.promiseList.map( onePromise =>
          <Card className="card-wrapper">
            <CardContent>
              <Typography type="headline" component="h2">
                {onePromise}
              </Typography>
              <Typography component="p">
                well meaning and kindly.<br />
              </Typography>
            </CardContent>
          </Card> 
          
        )}
        </div>
      );
    }
}

PromiseList.propType = {
  list: PropTypes.array
}