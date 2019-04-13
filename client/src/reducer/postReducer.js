const initialstat = {
  items: []
  // item: {}
};
export default function(state = initialstat, action) {
  if (action.type === "ADD_ITEM") {
    return { ...state, items: [action.payload, ...state] };
  }
  if (action.type === "SHOW_ITEM") {
    return { ...state, items: action.payload };
  }
  if (action.type === "DEL") {
    return {
      ...state,
      items: state.items.filter(buisness => {
        return buisness._id !== action.id;
      })
    };
  }

  return state;
}
