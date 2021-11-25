
import carousel_image_1 from '../assets/carousel_image_1.svg';
import carousel_image_2 from '../assets/carousel_image_2.svg'
import carousel_image_3 from '../assets/carousel_image_3.svg'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/swiper-bundle.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from "./Image";
import SwiperCore, {
  } from 'swiper';
  SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);
const CarouselSlide=()=>{
    
    return(
<div className="slide-show">
<Swiper
modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      pagination={{ clickable: true }}
        slidesPerView={1}
        navigation
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>
<Image src={carousel_image_1}/>

      </SwiperSlide>
      <SwiperSlide>
          <Image src={carousel_image_2}/>
      </SwiperSlide>
      <SwiperSlide>
          <Image src={carousel_image_3}/>
      </SwiperSlide>
      ...
    </Swiper>
</div>
    )
}

export default CarouselSlide;