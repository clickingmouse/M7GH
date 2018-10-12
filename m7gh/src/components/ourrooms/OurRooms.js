import React, { Component } from "react";
import budgetImg from "../../images/budget_room.jpg";

export class OurRooms extends Component {
  render() {
    return (
      <div class="ourrooms container">
        <h5>Our Rooms</h5>

        <div class="row">
          <div class="col s12 l6" />
          <div class="card large">
            <div class="card-image">
              <img src={budgetImg} alt="" />
            </div>
            <div class="card-content">
              <span class="card-title">title</span>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Aliquam illum magni tempore quibusdam natus voluptates quidem?
                Nihil placeat sit tempore maxime repellat repellendus saepe
                voluptatum facere ex. Eum, assumenda dolores.
              </p>
            </div>
          </div>
          <div class="col s12 l6" />
        </div>
      </div>
    );
  }
}

export default OurRooms;
