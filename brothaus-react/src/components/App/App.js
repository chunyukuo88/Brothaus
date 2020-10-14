import React, { useEffect } from 'react';
import Heading from '../Heading/Heading';
import Carousel from '../Carousel/Carousel';
import '../../css/common.css';
import Copyright from '../Copyright/Copyright';
import { useDispatch } from 'react-redux';
import { getGlobalHumidity, getGlobalTemp } from '../../actions/actions';
import ReactGa from 'react-ga';

export default function App() {

  useEffect(() => {
    ReactGa.initialize('UA-168681251-1');
    //Report page views from page root:
    ReactGa.pageview('/');
  }, []);

  const dispatch = useDispatch();
    return (
      <div id='app'
           data-test="component-app"
           onLoad={()=>dispatchTempAndHumidity(dispatch)}
      >
        <Heading/>
        <Carousel />
        <Copyright/>
      </div>
    );
}

const dispatchTempAndHumidity = (dispatcher) => {
  dispatcher(getGlobalTemp());
  dispatcher(getGlobalHumidity());
}
