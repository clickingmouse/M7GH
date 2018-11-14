import React, { Component } from "react";
import Newest from "./Newest";
import GuidesList from "./GuidesList";

export class Guides extends Component {
  render() {
    return (
      <div class="guides container">
        <p>A Guides</p>
        <div className="row">
          <div className="col s12 m6">
            <GuidesList />
          </div>
          <div className="col s12 m5 offset-m1">
            <Newest />
          </div>
        </div>
      </div>
    );
  }
}

export default Guides;
