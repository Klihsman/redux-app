import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement, changeColor } from '../../redux/actions';

const CounterComponent = () => {
  const dispatch = useDispatch();
  const { count, color } = useSelector(state => state.counter);

  const handleChangeColor = (newColor) => {
    dispatch(changeColor(newColor));
  };

  return (
    <div>
      <p style={{ color }}>{count}</p>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => handleChangeColor('red')}>Red</button>
      <button onClick={() => handleChangeColor('blue')}>Blue</button>
      <button onClick={() => handleChangeColor('green')}>Green</button>
    </div>
  );
};

export default CounterComponent;