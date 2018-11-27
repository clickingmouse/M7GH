import React from "react";
import GuidesSummary from "./GuidesSummary";
import { Link } from "react-router-dom";

const GuidesList = ({ guides }) => {
  return (
    <div className="guide-list section">
      {guides &&
        guides.map(guide => {
          return (
            <Link to={"/guides/" + guide.id} key={guide.id}>
              <GuidesSummary guide={guide} />
            </Link>
          );
        })}
    </div>
  );
};

export default GuidesList;
