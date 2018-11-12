import React from "react";
import budgetImg from "../../images/budget_room.jpg";
import singleImg from "../../images/single.JPG";
import doubleImg from "../../images/double.png";
import twinImg from "../../images/twin.png";
import tripleAImg from "../../images/tripleA.JPG";
import budgetRoomImg1 from "../../images/budget/budget_room_1.JPG";
import budgetRoomImg2 from "../../images/budget/budget_room_2.JPG";
import budgetRoomImg3 from "../../images/budget/budget_room_3.JPG";
import singleRoomImg1 from "../../images/single/single_room_6.JPG";
import singleRoomImg2 from "../../images/single/single_room_7.JPG";
import doubleRoomImg1 from "../../images/double/double_room_b.jpg";
import doubleRoomImg2 from "../../images/double/double_room_b2.jpg";
import twinRoomImg1 from "../../images/twin/twin_room_b.jpg";
import twinRoomImg2 from "../../images/twin/twin_room_b2.JPG";
import tripleRoomImg1 from "../../images/triple/triple_room_4.jpg";
import tripleRoomImg2 from "../../images/triple/triple_room_8.JPG";

const RoomsCollection = () => {
  return (
    <div>
      <ul className="collection">
        <li className="collection-item ">
          <div className="row">
            <div className="col s16  l4">
              <img
                src={budgetRoomImg1}
                alt="SingleRoomIMG"
                className="responsive-img materialboxed"
              />
            </div>

            <div className="col s16 m4 l4">
              <img
                src={budgetRoomImg2}
                alt="SingleRoomIMG"
                className="responsive-img materialboxed"
              />
            </div>

            <span className="title">
              <bold>Budget Single</bold>
            </span>
            <p>
              First Line <br />
              Second Line
            </p>
          </div>
        </li>

        <li className="collection-item ">
          <div className="row">
            <div className="col s16  l4">
              <img
                src={singleRoomImg1}
                alt="SingleRoomIMG"
                className="responsive-img materialboxed"
              />
            </div>

            <div className="col s16 m4 l4">
              <img
                src={singleRoomImg2}
                alt="SingleRoomIMG"
                className="responsive-img materialboxed"
              />
            </div>

            <span className="title">
              <bold>Single Room</bold>
            </span>
            <p>
              First Line <br />
              Second Line
            </p>
          </div>
        </li>

        <li className="collection-item ">
          <div className="row">
            <div className="col s16  l4">
              <img
                src={doubleRoomImg1}
                alt="SingleRoomIMG"
                className="responsive-img materialboxed"
              />
            </div>

            <div className="col s16 m4 l4">
              <img
                src={doubleRoomImg2}
                alt="SingleRoomIMG"
                className="responsive-img materialboxed"
              />
            </div>

            <span className="title">
              <bold>Double Room</bold>
            </span>
            <p>
              First Line <br />
              Second Line
            </p>
          </div>
        </li>

        <li className="collection-item ">
          <div className="row">
            <div className="col s16  l4">
              <img
                src={twinRoomImg1}
                alt="SingleRoomIMG"
                className="responsive-img materialboxed"
              />
            </div>

            <div className="col s16 m4 l4">
              <img
                src={twinRoomImg2}
                alt="SingleRoomIMG"
                className="responsive-img materialboxed"
              />
            </div>

            <span className="title">
              <bold>Twin</bold>
            </span>
            <p>
              First Line <br />
              Second Line
            </p>
          </div>
        </li>
        <li className="collection-item ">
          <div className="row">
            <div className="col s16  l4">
              <img
                src={tripleRoomImg1}
                alt="SingleRoomIMG"
                className="responsive-img materialboxed"
              />
            </div>

            <div className="col s16 m4 l4">
              <img
                src={tripleRoomImg2}
                alt="SingleRoomIMG"
                className="responsive-img materialboxed"
              />
            </div>

            <span className="title">
              <bold>Triple</bold>
            </span>
            <p>
              First Line <br />
              Second Line
            </p>
          </div>
        </li>
      </ul>
      {/****************************************** */}
      <ul className="collection">
        <li className="collection-header">
          <h4>Our Rooms</h4>
        </li>
        <li className="collection-item ">
          <div className="row">
            <div className="col s12 l8">
              <img
                src={budgetImg}
                alt="SingleRoomIMG"
                className="responsive-img"
              />
            </div>
            <span className="title">Budget Room</span>
            <p>
              First Line <br />
              Second Line
            </p>
            <a href="#!" className="secondary-content">
              <i className="material-icons">grade</i>
            </a>
          </div>
        </li>
        <li className="collection-item">
          {" "}
          <div className="row">
            <div className="col s12 l8">
              <img
                src={singleImg}
                alt="SingleRoomIMG"
                className="responsive-img"
              />
            </div>
            <span className="title">Title</span>
            <p>
              First Line <br />
              Second Line
            </p>
            <a href="#!" className="secondary-content">
              <i className="material-icons">grade</i>
            </a>
          </div>
        </li>
        <li className="collection-item">
          {" "}
          <div className="row">
            <div className="col s12 l8">
              <img src={doubleImg} alt="DoubleIMG" className="responsive-img" />
            </div>
            <span className="title">Title</span>
            <p>
              First Line <br />
              Second Line
            </p>
            <a href="#!" className="secondary-content">
              <i className="material-icons">grade</i>
            </a>
          </div>
        </li>
        <li className="collection-item">
          {" "}
          <div className="row">
            <div className="col s12 l8">
              <img src={twinImg} alt="TwinRoomIMG" className="responsive-img" />
            </div>
            <span className="title">Title</span>
            <p>
              First Line <br />
              Second Line
            </p>
            <a href="#!" className="secondary-content">
              <i className="material-icons">grade</i>
            </a>
          </div>
        </li>
        <li className="collection-item">
          {" "}
          <div className="row">
            <div className="col s12 l8">
              <img
                src={tripleAImg}
                alt="TripleRoomIMG"
                className="responsive-img"
              />
            </div>
            <span className="title">Title</span>
            <p>
              First Line <br />
              Second Line
            </p>
            <a href="#!" className="secondary-content">
              <i className="material-icons">grade</i>
            </a>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default RoomsCollection;
