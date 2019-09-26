import React from 'react'
import AwesomeSlider from 'react-awesome-slider'

import imageHello from '../../assets/slides/slide-hello.jpg'
import imageCircle from '../../assets/slides/slide-circle.jpg'
import imagePlay from '../../assets/slides/slide-play.jpg'

import AwsSliderStyles from 'react-awesome-slider/src/styles';

import './slider.styles.scss'

const Slider = () => {
  return (
    <AwesomeSlider cssModule={AwsSliderStyles} className='custom-slider' >
      <div data-src={imageHello} />
      <div data-src={imageCircle} />
      <div data-src={imagePlay} />
    </AwesomeSlider>
  )
}

export default Slider
