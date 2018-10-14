import React, { Component } from "react";
import budgetImg from "../../images/budget_room.jpg";
//"../../images/budget_room.jpg";
import Rooms from "./rooms";
import RoomsCollection from "./RoomsCollection";

export class OurRooms extends Component {
  render() {
    return (
      <div class="ourrooms container">
        <h5>Our Rooms</h5>
        <RoomsCollection />
      </div>
    );
  }
}

export default OurRooms;
