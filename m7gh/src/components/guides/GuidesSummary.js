import React from "react";
import moment from "moment";

const GuidesSummary = ({ guide }) => {
  return (
    <div className="card z-depth-0 guide-list-summary">
      <div className="card-content grey-text text-darken-3">
        <span className="card-title">{guide.title}</span>
        <p>
          Posted by M7 {guide.authorFirstName} {guide.authorLastName}
        </p>
        <p className="grey-text">
          {moment(guide.createdAt.toDate()).calendar()}
        </p>
      </div>
    </div>
  );
};
export default GuidesSummary;
