import React from "react";
import airportIMG from "../../images/transportation/hkg.jpg";
import trainIMG from "../../images/transportation/mtr_train_photo.jpg";
import coachIMG from "../../images/transportation/coach_bus.jpg";

const GettingHereList = () => {
  return (
    <div>
      Getting Here Options
      <section className="" id="transport">
        <div className="row">
          <div className="col s12 l4">
            <img
              src={airportIMG}
              alt="airport-reference-image"
              className="responsive-img"
            />
          </div>
          <div class="col s12 l6 offset-l1">
            <h2 class="indigo-text text-darken-4">Airport</h2>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Similique beatae quasi velit dolor, ex culpa exercitationem
              provident, dicta modi consequatur perspiciatis odio neque ea
              cumque fuga adipisci? Architecto, nisi iure.
            </p>
          </div>
        </div>

        <div className="row">
          <div className="col s12 l4 push-l7 offset-l1">
            <img
              src={trainIMG}
              alt="airport-reference-image"
              className="responsive-img"
            />
          </div>
          <div class="col s12 l6 pull-l5 right-align offset-l1">
            <h2 class="indigo-text text-darken-4">MTR </h2>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Similique beatae quasi velit dolor, ex culpa exercitationem
              provident, dicta modi consequatur perspiciatis odio neque ea
              cumque fuga adipisci? Architecto, nisi iure.
            </p>
          </div>
        </div>

        <div className="row">
          <div className="col s12 l4 ">
            <img
              src={coachIMG}
              alt="airport-reference-image"
              className="responsive-img"
            />
          </div>
          <div class="col s12 l6 offset-l1">
            <h2 class="indigo-text text-darken-4">Intra-China Bus</h2>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Similique beatae quasi velit dolor, ex culpa exercitationem
              provident, dicta modi consequatur perspiciatis odio neque ea
              cumque fuga adipisci? Architecto, nisi iure.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GettingHereList;
