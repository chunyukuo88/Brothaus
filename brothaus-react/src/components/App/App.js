import React, { useEffect } from 'react';
import Heading from '../Heading/Heading';
import Carousel from '../Carousel/Carousel';
import '../../css/common.css';
import Copyright from '../Copyright/Copyright';
import { useDispatch } from 'react-redux';
import { getGlobalHumidity, getGlobalTemp } from '../../actions/actions';
import ReactGa from 'react-ga';
import idleTimer from "../../timer";

export default function App() {
  idleTimer();
  useEffect(() => {
    ReactGa.initialize(`${process.env.REACT_APP_GA}`);
    ReactGa.pageview(window.location.pathname + window.location.search);
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
