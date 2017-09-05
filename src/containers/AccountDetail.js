import React, { Component } from "react";
import { connect } from "react-redux";
import { selectUser, selectAccount, withdrawFunds } from "../actions/index";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import Transactions from "./Transactions";
//make sure action created flows through all reducers
import { bindActionCreators } from "redux";

class AccountDetail extends Component {
  render() {
    if (!this.props.account) {
      return <div>no account</div>;
    }
    const { id, accountID } = this.props.match.params;
    return (
      <div className="col-md-6">
        <div className="card">
          <div className="card-block">
            <h4 className="card-title">Account Information</h4>
            <h6 className="card-subtitle mb-2 text-muted">
              {this.props.user.name}
            </h6>
            <h6 className="card-subtitle mb-2 text-muted">
              {this.props.account.accountType}

            </h6>
            <h6 className="card-subtitle mb-2 text-muted">
              {this.props.account.balance}

            </h6>

          </div>
          <Transactions />
        </div>

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
  return bindActionCreators({}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(AccountDetail);
