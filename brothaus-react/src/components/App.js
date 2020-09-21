import React from 'react';
import Heading from './Heading';
import Carousel from './Carousel/Carousel';
import '../css/common.css';
import Copyright from './Copyright';
import { useDispatch } from 'react-redux';
import getFotoCount from "./Carousel/fotoCount";

export default function App () {
  const dispatch = useDispatch();

  let photoCount;
  function dispatchCount(data) {
    photoCount = data;
    dispatch(photoCount)
  }

  return (
    <div id='app' data-test="component-app" onLoad={()=>getFotoCount().then(dispatchCount())}>
      <Heading/>
      <Carousel />
      <Copyright/>
    </div>
  );
}

