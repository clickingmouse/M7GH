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
  <ul className="collection">
    <li className="collection-item ">
    <div className="row">
    <div className="col s12  l4">
              <img src={budgetRoomImg1} alt="SingleRoomIMG" className="responsive-img materialboxed" />
            </div>
            <div className="col s12 m4 l4">
              <img src={budgetRoomImg2} alt="SingleRoomIMG" className="responsive-img materialboxed" />
            </div>
 
      <span className="title">Title</span>
      <p>First Line <br/>
         Second Line
      </p>
      </div>
      <a href="#!" className="secondary-content"><i className="material-icons">grade</i></a>
    </li>
    <li className="collection-item avatar">
      <i className="material-icons circle">folder</i>
      <span className="title">Title</span>
      <p>First Line <br/>
         Second Line
      </p>
      <a href="#!" className="secondary-content"><i classNamee="material-icons">grade</i></a>
    </li>
    <li className="collection-item avatar">
      <i className="material-icons circle green">insert_chart</i>
      <span className="title">Title</span>
      <p>First Line <br/>
         Second Line
      </p>
      <a href="#!" className="secondary-content"><i className="material-icons">grade</i></a>
    </li>
    <li className="collection-item avatar">
      <i className="material-icons circle red">play_arrow</i>
      <span className="title">Title</span>
      <p>First Line <br/>
         Second Line
      </p>
      <a href="#!" className="secondary-content"><i className="material-icons">grade</i></a>
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
              <img src={budgetImg} alt="SingleRoomIMG" className="responsive-img" />
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
              <img src={singleImg} alt="SingleRoomIMG" className="responsive-img" />
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
