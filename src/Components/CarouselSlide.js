import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import carousel_image_1 from '../assets/carousel_image_1.svg';
import carousel_image_2 from '../assets/carousel_image_2.svg'
import carousel_image_3 from '../assets/carousel_image_3.svg'

import Image from "./Image";
const CarouselSlide=()=>{
    return(
<div className="slide-show">
    <AliceCarousel autoPlay autoPlayInterval="3000" activeIndex="0">
        <Image src={carousel_image_1} alt={'Carousel image'}/>
        <Image src={carousel_image_2} alt={'Carousel image'}/>
        <Image src={carousel_image_3} alt={'Carousel image'}/>
    </AliceCarousel>
</div>
    )
}

export default CarouselSlide;