import React, { Component } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import { Button } from "reactstrap";

class newpost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      address: "",
      title: "",
      extraInfo: "",
    };
  }

  handleAddressChange = (event) => {
    this.setState({
      address: event.target.value,
    });
  };

  handleTitleChange = (event) => {
    this.setState({
      title: event.target.value,
    });
  };

  handleInfoChange = (event) => {
    this.setState({
      extraInfo: event.target.value,
    });
  };

  handleSubmit = (event) => {
    alert(`${this.state.address} ${this.state.title} ${this.state.extraInfo}`);
    event.preventDefault();
  };

  render() {
    const { address, title, extraInfo } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>Property Address </label>
        </div>
        <div>
          <input
            type="text"
            value={address}
            onChange={this.handleAddressChange}
          />
        </div>
        <div>
          <label>Property Title </label>
        </div>
        <div>
          <input type="text" value={title} onChange={this.handleTitleChange} />
        </div>
        <div>
          <label>Describe more about your property</label>
        </div>
        <div>
          <textarea value={extraInfo} onChange={this.handleInfoChange} />
        </div>
        <div className="button">
          <Link to="/Test">
            <Button> POST </Button>
          </Link>
        </div>
      </form>
    );
  }
}

export default newpost;
