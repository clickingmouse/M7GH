const initialState = {
  //guides property state
  guides: [
    { id: "1", title: "airport", content: "a21" },
    { id: "2", title: "chinese food", content: "dimsum" },
    { id: "3", title: "view", content: "peak" }
  ]
};

const guideReducer = (state = initialState, action) => {
  return state;
};
export default guideReducer;
