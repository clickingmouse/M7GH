export const createGuide = guide => {
  //return an action
  //return {
  //  type: 'ADD_GUIDE',
  //  guide : guide
  //}
  // instead we return a function
  // pausing dispatch
  //dispatch function dispatches an action to reducer
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    //make async call
    const firestore = getFirestore();
    const profile = getState().firebase.profile;
    const authorId = getState().firebase.auth.uid;
    firestore
      .collection("guides")
      .add({
        ...guide,
        authorFirstName: profile.firstName,
        authorLastName: profile.lastName,
        authorId: authorId,
        createdAt: new Date()
      })
      .then(() => {
        dispatch({
          type: "CREATE_GUIDE",
          guide: guide
        });
      })
      .catch(err => {
        dispatch({
          type: "CREATE_GUIDE_ERR",
          err
        });
      });
  };
};

//export default createGuide;
