export const increment = () => {
  return {
    type: 'INCREMENT',
  };
};

export const decrement = () => {
  return {
    type: 'DECREMENT',
  };
};

export const changeColor = (color: any) => ({
  type: 'CHANGE_COLOR',
  payload: color,
});
