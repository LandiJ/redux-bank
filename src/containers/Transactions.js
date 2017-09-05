import React from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { connect } from "react-redux";
import { selectUser, selectAccount, withdrawFunds } from "../actions/index";

//make sure action created flows through all reducers
import { bindActionCreators } from "redux";
class Transactions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  render() {
    let withdraw = value => {
      this.toggle();
      this.props.withdrawFunds(value);
    };
    return (
      <div>
        <Button color="danger" onClick={this.toggle}>
          {this.props.buttonLabel}
        </Button>
        <Modal
          isOpen={this.state.modal}
          toggle={this.toggle}
          className={this.props.className}
        >
          <ModalHeader toggle={this.toggle}> Make a withdrawl</ModalHeader>
          <ModalBody>

            Please pick an amount to withdraw from your credit account. Your current balance is.
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={() => withdraw(5)}>
              $5
            </Button>
            {" "}
            <Button color="success" onClick={() => withdraw(10)}>
              $10
            </Button>
            <Button color="info" onClick={() => withdraw(20)}>
              $20
            </Button>
            {" "}
            <Button color="danger" onClick={() => withdraw(0)}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    user: state.selectedUser,
    account: state.selectedAccount
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      withdrawFunds: withdrawFunds
    },
    dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Transactions);
