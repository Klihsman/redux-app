import React from 'react';
import { useDispatch } from 'react-redux';
import { increment, decrement, changeColor } from '../../redux/actions';

const CounterComponent = () => {
  const dispatch = useDispatch();

  const handleChangeColor = (newColor: any) => {
    dispatch(changeColor(newColor));
  };

  return (
    <div>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => handleChangeColor('red')}>Red</button>
      <button onClick={() => handleChangeColor('blue')}>Blue</button>
      <button onClick={() => handleChangeColor('green')}>Green</button>
    </div>
  );
};

export default CounterComponent;
