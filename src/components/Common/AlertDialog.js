import React from 'react';
import Dialog, {
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
  } from 'material-ui/Dialog';
import Button from 'material-ui/Button';
import Slide from 'material-ui/transitions/Slide'
import PropTypes from 'prop-types';


function Transition(props) {
    return <Slide direction="up" {...props} />;
  }
/**
 * A modal dialog can only be closed by selecting one of the actions.
 */
export default class DialogModal extends React.Component {
  

  constructor(props) {
      super();
      this.state = {
          responseDialog: props.responseDialog,
          disableBackDrop: true
      }
  }


  handleConfirmation = (res) => {
    this.state.responseDialog(res);
  };

  render() {
      return (
        <div>
            <Dialog
            open={this.props.open}
            transition={Transition}
            keepMounted
            disableBackdropClick={this.state.disableBackDrop}
            onClose={() => this.handleConfirmation(false)}
            aria-labelledby="alert-dialog-slide-title"
            aria-describedby="alert-dialog-slide-description"
            >
                <DialogTitle id="alert-dialog-slide-title">
                    {"Promise that i really want to keep"}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-slide-description">
                    This promise will stay foerever in the blockchain, are you ready for the consequences ?
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => this.handleConfirmation(false)} color="primary">
                    Actually, let's go back
                    </Button>
                    <Button onClick={() => this.handleConfirmation(true)} color="primary">
                    Yeah let's do it and keep our promise !
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
  }
}

DialogModal.propTypes = {
    responseDialog : PropTypes.func
}

