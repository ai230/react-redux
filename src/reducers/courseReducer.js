export default function courseReducer(state = [], action) {
  switch (action.type) {
    case "CRETE_COURSE":
      //   state.push(action.course);
      //   return state;
      // Let's use ES6 spread operator
      return [...state, Object.assign({}, action.course)];
    default:
      return state;
  }
}
