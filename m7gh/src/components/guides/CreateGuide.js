import React, { Component } from "react";
import { createGuide } from "../../store/actions/guideActions";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
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
    //console.log(this.state);
    this.props.createGuide(this.state);
    this.props.history.push("/guides");
  };
  render() {
    const { auth } = this.props;
    if (!auth.uid) return <Redirect to="/signin" />;
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
//take dispatch method
//returns an object, and add a method :: createGuide to prop
// when prop.createGuide is called, calls a function to dispatch
// createGuide ActionCreator
const mapDispatchToProps = dispatch => {
  return {
    createGuide: guide => dispatch(createGuide(guide))
  };
};

const mapStateToProps = state => {
  return {
    auth: state.firebase.auth
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateGuide);
