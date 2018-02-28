import React, { Component } from 'react';
import './PromiseList.css';
import Card, { CardContent } from 'material-ui/Card';
import Typography from 'material-ui/Typography';
import PropTypes from 'prop-types';
import { CSSTransitionGroup } from 'react-transition-group' // ES6
import * as moment from 'moment-timezone';

export default class PromiseList extends Component {


componentWillReceiveProps(){
  console.log('this.props.promiseList componentWillReceiveProps', this.props.promiseList);
}
componentWillMount(){
  console.log('this.props.promiseList componentWillMount()', this.props.promiseList);
}
    render() {
      return (
        <div className="promise-list-wrapper">
        {this.props.promiseList.map( (onePromise, index) =>
            <CSSTransitionGroup key={index}
            transitionName="card"
            transitionEnterTimeout={2000}
            transitionLeaveTimeout={300}
            transitionAppear={true}
            transitionAppearTimeout={500}>
            <Card className="card-wrapper" key={'card_' + index}>
              <CardContent>
                <Typography type="headline" component="h2">
                  {onePromise}
                </Typography>
                <Typography component="p">
                {moment().format('YYYY-MM-DD hh:mm:ss')}<br />
                </Typography>
              </CardContent>
            </Card> 
          </CSSTransitionGroup>
        )}
        </div>
      );
    }
}

PromiseList.propType = {
  promiseList: PropTypes.array
}