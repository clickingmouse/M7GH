import React from "react";
import budgetImg from "../../images/budget_room.jpg";
import singleImg from "../../images/single.JPG";
import doubleImg from "../../images/double.png";
import twinImg from "../../images/twin.png";
import tripleAImg from "../../images/tripleA.JPG";

const RoomsCollection = () => {
  return (
    <div>
      <ul class="collection">
        <li class="collection-header">
          <h4>Our Rooms</h4>
        </li>
        <li class="collection-item ">
          <div class="row">
            <div class="col s12 l8">
              <img src={budgetImg} alt="SingleRoomIMG" class="responsive-img" />
            </div>
            <span class="title">Budget Room</span>
            <p>
              First Line <br />
              Second Line
            </p>
            <a href="#!" class="secondary-content">
              <i class="material-icons">grade</i>
            </a>
          </div>
        </li>
        <li class="collection-item">
          {" "}
          <div class="row">
            <div class="col s12 l8">
              <img src={singleImg} alt="SingleRoomIMG" class="responsive-img" />
            </div>
            <span class="title">Title</span>
            <p>
              First Line <br />
              Second Line
            </p>
            <a href="#!" class="secondary-content">
              <i class="material-icons">grade</i>
            </a>
          </div>
        </li>
        <li class="collection-item">
          {" "}
          <div class="row">
            <div class="col s12 l8">
              <img src={doubleImg} alt="DoubleIMG" class="responsive-img" />
            </div>
            <span class="title">Title</span>
            <p>
              First Line <br />
              Second Line
            </p>
            <a href="#!" class="secondary-content">
              <i class="material-icons">grade</i>
            </a>
          </div>
        </li>
        <li class="collection-item">
          {" "}
          <div class="row">
            <div class="col s12 l8">
              <img src={twinImg} alt="TwinRoomIMG" class="responsive-img" />
            </div>
            <span class="title">Title</span>
            <p>
              First Line <br />
              Second Line
            </p>
            <a href="#!" class="secondary-content">
              <i class="material-icons">grade</i>
            </a>
          </div>
        </li>
        <li class="collection-item">
          {" "}
          <div class="row">
            <div class="col s12 l8">
              <img
                src={tripleAImg}
                alt="TripleRoomIMG"
                class="responsive-img"
              />
            </div>
            <span class="title">Title</span>
            <p>
              First Line <br />
              Second Line
            </p>
            <a href="#!" class="secondary-content">
              <i class="material-icons">grade</i>
            </a>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default RoomsCollection;
