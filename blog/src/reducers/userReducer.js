export default (state = [], action) => {
  switch (action.type) {
    case "FETCH_USER":
      console.log(action.payload.id);
      return [
        ...state,
        {
          id: action.payload.id,
          name: action.payload.name,
          email: action.payload.email
        }
      ];
    default:
      return state;
  }
};
