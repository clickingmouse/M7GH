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
    firestore
      .collection("guides")
      .add({
        ...guide,
        authorFirstName: "K",
        authorLastName: "K.",
        authorId: 123,
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
