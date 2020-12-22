import React, { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, {
  Navigation,
  Scrollbar,
  A11y,
  Thumbs,
  Autoplay,
} from 'swiper';
import less from './index.less';

SwiperCore.use([Navigation, Scrollbar, A11y, Thumbs, Autoplay]);

export default () => {
  return (
    <div className={'swiper-container'}>
      <Swiper
        loop={true}
        autoplay={{
          autoPlay: true,
          delay: 3000,
          autoplayDisableOnInteraction: false,
        }}
        // pagination={{
        //   el: '.swiper-pagination1',
        //   clickable: true,
        //
        // }}
      >
        <SwiperSlide virtualIndex={'1'}>
          <img className={'bg'} src={'./image/demobg1.jpg'} alt={''} />
        </SwiperSlide>
        <SwiperSlide virtualIndex={'2'}>
          <img className={'bg'} src={'./image/demobg2.jpg'} alt={''} />
        </SwiperSlide>
        <div className="swiper-pagination1"></div>
      </Swiper>
    </div>
  );
};
