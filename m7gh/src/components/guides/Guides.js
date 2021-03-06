import React, { Component } from "react";
import Newest from "./Newest";
import GuidesList from "./GuidesList";
import { connect } from "react-redux";
export class Guides extends Component {
  render() {
    //console.log(this.props);
    const { guides } = this.props;
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
  // return a property
  // represent which property are attached to props of this component
  return {
    guides: state.guideStateOfStore.guides
  };
};

export default connect(mapStateToProps)(Guides);
