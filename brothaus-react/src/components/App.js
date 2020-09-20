import React from 'react';
import Heading from './Heading';
import Carousel from './Carousel/Carousel';
import '../css/common.css';
import Copyright from './Copyright';
import { updateFotoCount } from '../actions';
import { useDispatch } from 'react-redux';

export default function App () {
  const dispatch = useDispatch();
  return (
    <div id='app' data-test="component-app" onLoad={()=>dispatch(updateFotoCount())}>
      <Heading/>
      <Carousel />
      <Copyright/>
    </div>
  );
}

