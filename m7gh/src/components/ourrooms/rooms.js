import React from "react";
import "./rooms.css";
import budgetImg from "../../images/budget_room.jpg";
import singleImg from "../../images/single.JPG";
import doubleImg from "../../images/double.png";
import twinImg from "../../images/twin.png";
import tripleAImg from "../../images/tripleA.JPG";
const rooms = () => {
  return (
    <div>
      ......
      <div class="row">
        <div class="col s12 m11">
          {/*<h2 class="header">Horizontal Card</h2>*/}
          <div class="card small horizontal">
            <div class="card-image">
              <img src={budgetImg} />
            </div>
            <div class="card-stacked">
              <div class="card-content">
                <p>
                  I am a very simple card. I am good at containing small bits of
                  information.
                </p>
              </div>
              <div class="card-action">
                <a href="#">This is a link</a>
              </div>
            </div>
          </div>

          <div class="card small horizontal">
            <div class="card-image">
              <img src={singleImg} />
            </div>
            <div class="card-stacked">
              <div class="card-content">
                <p>
                  I am a very simple card. I am good at containing small bits of
                  information.
                </p>
              </div>
              <div class="card-action">
                <a href="#">This is a link</a>
              </div>
            </div>
          </div>

          <div class="card small horizontal">
            <div class="card-image">
              <img src={doubleImg} />
            </div>
            <div class="card-stacked">
              <div class="card-content">
                <p>Double Room</p>
              </div>
              <div class="card-action">
                <a href="#">This is a link</a>
              </div>
            </div>
          </div>

          <div class="card small horizontal">
            <div class="card-image">
              <img src={twinImg} />
            </div>
            <div class="card-stacked">
              <div class="card-content">
                <p>Twin</p>
              </div>
              <div class="card-action">
                <a href="#">This is a link</a>
              </div>
            </div>
          </div>

          <div class="card small horizontal">
            <div class="card-image">
              <img src={singleImg} />
            </div>
            <div class="card-stacked">
              <div class="card-content">
                <p>
                  I am a very simple card. I am good at containing small bits of
                  information.
                </p>
              </div>
              <div class="card-action">
                <a href="#">This is a link</a>
              </div>
            </div>
          </div>

          <div class="card small horizontal">
            <div class="card-image">
              <img src={tripleAImg} />
            </div>
            <div class="card-stacked">
              <div class="card-content">
                <p>Triple Room</p>
              </div>
              <div class="card-action">
                <a href="#">This is a link</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default rooms;
