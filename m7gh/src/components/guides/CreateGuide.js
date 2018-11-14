import React, { Component } from "react";

class CreateGuide extends Component {
  state = {
    title: "",
    content: ""
  };
  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state);
  };
  render() {
    return (
      <div>
        <div className="container">
          <form onSubmit={this.handleSubmit} className="white">
            <h5 className="grey-text text-darken-3">Create Guide</h5>
            <div className="input-field">
              <label htmlFor="text">Title</label>
              <input type="text" id="title" onChange={this.handleChange} />
            </div>

            <div className="input-field">
              <label htmlFor="content">Guide Content</label>
              <textarea
                name="content"
                id="content"
                cols="30"
                rows="10"
                className="materialize-textarea"
                onChange={this.handleChange}
              />
            </div>
            <div className="input-field">
              <button className="btn pink lighten-1 z-depth-0">Submit</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default CreateGuide;
