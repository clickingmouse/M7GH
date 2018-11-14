import React from "react";

const GuideDetails = props => {
  const id = props.match.params.id;
  return (
    <div className="container section guide-details">
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title">Guide Title - {id}</span>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. At facilis
            laborum harum esse quam expedita voluptatem nisi quod hic eius
            repudiandae molestias provident voluptatibus incidunt ratione optio,
            impedit omnis atque.
          </p>
        </div>
        <div className="card-action grey lighten-4 grey-text">
          <div>Posted by M7</div>
          <div>post date</div>
        </div>
      </div>
    </div>
  );
};

export default GuideDetails;
