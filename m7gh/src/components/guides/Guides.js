import React, { Component } from "react";
import Newest from "./Newest";
import GuidesList from "./GuidesList";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { Redirect } from "react-router-dom";
export class Guides extends Component {
  render() {
    //console.log(this.props);
    const { guides, auth } = this.props;
    if (!auth.uid) return <Redirect to="/signin" />;

    return (
      <div class="guides container">
        <p>A Guides</p>
        <div className="row">
          <div className="col s12 m6">
            <GuidesList guides={guides} />
          </div>
          <div className="col s12 m5 offset-m1">
            <Newest />
          </div>
        </div>
      </div>
    );
  }
}

//map store state to prop of this component
// takes in state of store
const mapStateToProps = state => {
  console.log(state);
  // return a property
  // represent which property are attached to props of this component
  return {
    //guides: state.guideStateOfStore.guides
    guides: state.firestore.ordered.guides,
    auth: state.firebase.auth
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: "guides" }])
)(Guides);
