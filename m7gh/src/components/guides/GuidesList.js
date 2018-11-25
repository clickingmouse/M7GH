import React from "react";
import GuidesSummary from "./GuidesSummary";

const GuidesList = ({ guides }) => {
  return (
    <div className="guide-list section">
      {guides &&
        guides.map(guide => {
          return <GuidesSummary guide={guide} key={guide.id} />;
        })}
    </div>
  );
};

export default GuidesList;
