const initialState = {
  //guides property state
  guides: [
    { id: "1", title: "airport", content: "a21" },
    { id: "2", title: "chinese food", content: "dimsum" },
    { id: "3", title: "view", content: "peak" }
  ]
};

const guideReducer = (state = initialState, action) => {
  //console.log("XXXXXXXXXXXXXXXXXXXXXXXXXXXx");
  //console.log(action.type);
  switch (action.type) {
    case "CREATE_GUIDE":
      console.log("created guide", action.guide);
      return state;
    case "CREATE_GUIDE_ERROR":
      console.log("create guide error", action.err);
      return state;
    default:
      return state;
  }
  //  return state;
};
export default guideReducer;
