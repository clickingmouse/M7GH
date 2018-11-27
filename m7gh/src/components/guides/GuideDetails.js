import React from "react";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";

const GuideDetails = props => {
  const id = props.match.params.id;
  //console.log("YYYYY");
  //console.log(props);
  const { guide } = props;

  if (guide) {
    return (
      <div className="container section guide-details">
        <div className="card z-depth-0">
          <div className="card-content">
            <span className="card-title">
              {guide.title} - {id}
            </span>
            <p>{guide.content}</p>
          </div>
          <div className="card-action grey lighten-4 grey-text">
            <div>
              Posted by {guide.authorFirstName} {guide.authorLastName}
            </div>
            <div>post date</div>
          </div>
        </div>
      </div>
    );
  } else {
    return <div className="container center">...loading</div>;
  }
};

const mapStateToProps = (state, ownProps) => {
  console.log(state);
  const id = ownProps.match.params.id;
  const guides = state.firestore.data.guides;
  const guide = guides ? guides[id] : null;
  return { guide: guide };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: "guides" }])
)(GuideDetails);
