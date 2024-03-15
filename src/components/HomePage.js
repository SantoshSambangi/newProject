import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {increment, decrement} from '../redux/slices/counterSlice';

const HomePage = () => {
    
        const data = useSelector((state) => state.counter.counter)
        const dispatch = useDispatch();

  return (
    <div>
        <h1>HomePage</h1>
        <h2>my Counter : {data}</h2>
        <button onClick={()=> dispatch(increment())}>Increment</button> &nbsp;
        <button onClick={()=> dispatch(decrement())}>Decrement</button>
    </div>
  )
}

export default HomePage;