import Carousel_image_1 from '../assets/carousel_image_1.svg'
import Carousel_image_2 from '../assets/carousel_image_2.svg'
import Carousel_image_3 from '../assets/carousel_image_3.svg'
import Carousel_mobile_image_1 from '../assets/carousel_image_mobile_1.svg'
import Carousel_mobile_image_2 from '../assets/carousel_image_mobile_2.svg'
import Carousel_mobile_image_3 from '../assets/carousel_image_mobile_3.svg'
import Image from './Image'
import AwesomeSlider from 'react-awesome-slider';
import AwesomeSliderStyles from 'react-awesome-slider/src/styles';
import 'react-awesome-slider/dist/styles.css';
const slider = ()=>{
  return(
    <>
    <div className="desktop-carousel">
  <AwesomeSlider cssModule={AwesomeSliderStyles}>
    <div><Image src={Carousel_image_1}/></div>
    <div><Image src={Carousel_image_2}/></div>
    <div><Image src={Carousel_image_3}/></div>
  </AwesomeSlider>
  </div>
  <div className="mobile-carousel">
  <AwesomeSlider cssModule={AwesomeSliderStyles}>
    <div><Image src={Carousel_mobile_image_1}/></div>
    <div><Image src={Carousel_mobile_image_2}/></div>
    <div><Image src={Carousel_mobile_image_3}/></div>
  </AwesomeSlider>
    </div>
  </>
  )
}

export default slider;