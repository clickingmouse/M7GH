export const createGuide = guide => {
  //return an action
  //return {
  //  type: 'ADD_GUIDE',
  //  guide : guide
  //}
  // instead we return a function
  // pausing dispatch
  //dispatch function dispatches an action to reducer
  return (dispatch, getState) => {
    //make async call
    dispatch({
      type: "CREATE_GUIDE",
      guide: guide
    });
  };
};

//export default createGuide;
