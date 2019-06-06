import React, { Component } from "react";
import Dialog from "./dialog";

class SignUpDialog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      login: ""
    };
  }

  handleChange = e => {
    this.setState({ login: e.target.value });
  };

  handleSignUp = () => {
    alert(this.state.login);
  };

  render() {
    return (
      <Dialog
        title="Mars Exploration Program"
        message="How should we refer to you?"
      >
        <input value={this.state.login} onChange={this.handleChange} />

        <button onClick={this.handleSignUp}>Sign Me Up!</button>
      </Dialog>
    );
  }
}

export default SignUpDialog;
