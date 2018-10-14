import React, { Component } from "react";
import dimsumImg from "../../images/around/DimSum.jpg";
import bakeryImg from "../../images/around/BakeryF.jpg";
import eggtartImg from "../../images/around/EggTart.jpg";
import hkbakeryImg from "../../images/around/Hong Kong Bakery.jpg";
import buddhaImg from "../../images/around/hong-kong-buddha.jpg";
import peakImg from "../../images/around/the-peak.jpg";

export class AroundUsSummary extends Component {
  render() {
    return (
      <div class="aroundus ">
        <p>What's Around Us</p>
        <div class="row">
          <div class="col s3">
            <img src={peakImg} class="responsive-img" />
          </div>
          <div class="col s3">BBB</div>
          <div class="col s3">
            <img src={buddhaImg} class="responsive-img" />
          </div>
          <div class="col s3">DDD</div>
        </div>
        <div class="row">
          <div class="col s3">DDD</div>
          <div class="col s3">
            <img src={bakeryImg} class="responsive-img" />
          </div>
          <div class="col s3">BBB</div>
          <div class="col s3">
            <img src={eggtartImg} class="responsive-img" />
          </div>

          <div class="row">
            <div class="col s3">
              <img src={hkbakeryImg} class="responsive-img" />
            </div>
            <div class="col s3">BBB</div>
            <div class="col s3">
              <img src={dimsumImg} class="responsive-img" />
            </div>
            <div class="col s3">DDD</div>
          </div>
        </div>
      </div>
    );
  }
}

export default AroundUsSummary;
