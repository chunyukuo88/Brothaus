import React, { Component } from 'react';
import '../../css/FotoPublic.css';
import Foto from '../Foto';
import { connect } from 'react-redux';

class Carousel extends Component{

  populateCarousel(props) {
      const fotoCountAsArray = arrayFromFotoCount(8); //TODO: Have this use getFotoCount() or Redux.
      return fotoCountAsArray.map(fotoNumber => <Foto key={fotoNumber} {...{fotoNumber: fotoNumber}}/>);
      console.log('REDUX:', props.fotoCount);
  }

  render(){
    return(
        <div className="carousel" data-flickity='{"lazyLoad": true, "freeScroll": true, "dragThreshold": 6, "wrapAround": true}'>
          {this.populateCarousel()}
       </div>
    );
  }
}

function arrayFromFotoCount (int) {
  const arr = [];
  for (let i = 1; i < (int+1); i++){
    arr.push(i);
  }
  console.log('array: ', arr);
  return arr;
}

function mapStateToProps(state){
  return { fotoCount: state.fotoCount }
}

export default connect(mapStateToProps)(Carousel);
