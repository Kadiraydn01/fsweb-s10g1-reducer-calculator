import {
  ADD_ONE,
  APPLY_NUMBER,
  CHANGE_OPERATION,
  RESET,
  MEMORY,
  RESETMEMORY,
  ADDMEMORY,
} from "./../actions";

export const initialState = {
  total: 0,
  operation: "*",
  memory: 0,
};

const calculateResult = (num1, num2, operation) => {
  if (num1 == 0 && operation == "*") {
    return num2;
  }
  switch (operation) {
    case "+":
      return num1 + num2;
    case "*":
      return num1 * num2;
    case "-":
      return num1 - num2;
    default:
      return;
  }
};

const reducer = (state, action) => {
  switch (action.type) {
    case ADD_ONE:
      return {
        ...state,
        total: state.total + 1,
      };

    case APPLY_NUMBER:
      return {
        ...state,
        total: calculateResult(state.total, action.payload, state.operation),
      };

    case CHANGE_OPERATION:
      return {
        ...state,
        operation: action.payload,
      };
    case RESET:
      return {
        ...state,
        total: initialState.total,
        operation: initialState.operation,
        memory: initialState.memory,
      };
    case MEMORY:
      return {
        ...state,
        memory: state.total,
      };
    case RESETMEMORY:
      return {
        ...state,
        memory: 0,
      };
    case ADDMEMORY:
      return {
        ...state,
        total: state.total + state.memory,
      };
    default:
      return state;
  }
};

export default reducer;
