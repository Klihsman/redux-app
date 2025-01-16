const initialState = { value: 0, color: 'black' };

const changeColor = (state = initialState, action) => {
  switch (action.type) {
    case 'CHANGE_COLOR':
      return { ...state, color: action.payload };
    default:
      return state;
  }
};

export default changeColor;