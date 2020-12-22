import React, { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import SwiperCore, {
  Navigation,
  Scrollbar,
  A11y,
  Thumbs,
  Autoplay,
} from 'swiper';

SwiperCore.use([Navigation, Scrollbar, A11y, Thumbs, Autoplay]);

export default () => {
  return (
    <div
      className="swiper-container"
      style={{
        width: '100%',
        marginTop: 52,
        disableOnInteraction: false,
      }}
    >
      <Swiper
        loop={true}
        autoplay={{
          autoPlay: true,
          delay: 15000,
          autoplayDisableOnInteraction: false,
        }}
      >
        <SwiperSlide virtualIndex={'1'}>
          <img
            src={'./image/demobg1.jpg'}
            alt={''}
            style={{ width: '100%', objectFit: 'contain' }}
          />
        </SwiperSlide>
        <SwiperSlide virtualIndex={'2'}>
          <img
            src={'./image/demobg2.jpg'}
            alt={''}
            style={{ width: '100%', objectFit: 'contain' }}
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
