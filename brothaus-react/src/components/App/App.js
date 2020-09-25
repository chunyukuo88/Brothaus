import React from 'react';
import Heading from '../Heading/Heading';
import Carousel from '../Carousel/Carousel';
import '../../css/common.css';
import Copyright from '../Copyright';
import { useDispatch } from 'react-redux';
import { getGlobalTemp } from '../../actions/actions';

export default function App() {
  const dispatch = useDispatch();
    return (
      <div id='app'
           data-test="component-app"
           onLoad={()=>dispatch(getGlobalTemp())}
      >
        <Heading/>
        <Carousel />
        <Copyright/>
      </div>
    );
}

