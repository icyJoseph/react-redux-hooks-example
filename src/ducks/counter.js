export const DEC = "dec";
export const INC = "inc";
export const SET = "set";

export const increaseCounter = () => ({
  type: INC
});

export const decreaseCounter = () => ({
  type: DEC
});

export function reducer(state = 0, { type, ...action }) {
  switch (type) {
    case INC:
      return state + 1;
    case DEC:
      return state - 1;
    case SET:
      return action.payload;
    default:
      return state;
  }
}

export default reducer;
