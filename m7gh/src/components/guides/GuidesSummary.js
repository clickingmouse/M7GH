import React from "react";

const GuidesSummary = ({ guide }) => {
  return (
    <div className="card z-depth-0 guide-list-summary">
      <div className="card-content grey-text text-darken-3">
        <span className="card-title">{guide.title}</span>
        <p>Posted by M7</p>
        <p className="grey-text">3rd September 2AM</p>
      </div>
    </div>
  );
};
export default GuidesSummary;
