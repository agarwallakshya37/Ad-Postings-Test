import React, { Component } from "react";

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

  navigateToMap=(event)=>{
    
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
        <button onClick={this.navigateToMap} type="submit">Submit</button>
      </form>
    );
  }
}

export default newpost;
