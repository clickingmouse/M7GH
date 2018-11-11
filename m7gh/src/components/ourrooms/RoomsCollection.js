import React from "react";
import budgetImg from "../../images/budget_room.jpg";
import singleImg from "../../images/single.JPG";
import doubleImg from "../../images/double.png";
import twinImg from "../../images/twin.png";
import tripleAImg from "../../images/tripleA.JPG";
import budgetRoomImg1 from "../../images/budget/budget_room_1.JPG";
import budgetRoomImg2 from "../../images/budget/budget_room_2.JPG";
import budgetRoomImg3 from "../../images/budget/budget_room_3.JPG";


const RoomsCollection = () => {
  return (
    <div>
  <ul class="collection">
    <li class="collection-item ">
    <div class="row">
    <div class="col s12  l4">
              <img src={budgetRoomImg1} alt="SingleRoomIMG" class="responsive-img" />
            </div>
            <div class="col s12 m4 l4">
              <img src={budgetRoomImg2} alt="SingleRoomIMG" class="responsive-img" />
            </div>
 
      <span class="title">Title</span>
      <p>First Line <br/>
         Second Line
      </p>
      </div>
      <a href="#!" class="secondary-content"><i class="material-icons">grade</i></a>
    </li>
    <li class="collection-item avatar">
      <i class="material-icons circle">folder</i>
      <span class="title">Title</span>
      <p>First Line <br/>
         Second Line
      </p>
      <a href="#!" class="secondary-content"><i class="material-icons">grade</i></a>
    </li>
    <li class="collection-item avatar">
      <i class="material-icons circle green">insert_chart</i>
      <span class="title">Title</span>
      <p>First Line <br/>
         Second Line
      </p>
      <a href="#!" class="secondary-content"><i class="material-icons">grade</i></a>
    </li>
    <li class="collection-item avatar">
      <i class="material-icons circle red">play_arrow</i>
      <span class="title">Title</span>
      <p>First Line <br/>
         Second Line
      </p>
      <a href="#!" class="secondary-content"><i class="material-icons">grade</i></a>
    </li>
  </ul>
      {/****************************************** */}
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
