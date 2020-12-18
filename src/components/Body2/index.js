import React, { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/components/navigation/navigation.less';
import 'swiper/components/pagination/pagination.less';
import 'swiper/components/scrollbar/scrollbar.less';
import less from './index.less';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

export default () => {
  return (
    <Swiper
      slideClass={less.swiper}
      simulateTouch={true}
      onSwiper={swiper => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide key={'1'} tag={'div'} zoom={false}>
        <div>
          <img
            src={'./image/demobg1.jpg'}
            alt={''}
            style={{ width: '100vw', height: '48vh', objectFit: 'contain' }}
          />
        </div>
      </SwiperSlide>
      <SwiperSlide key={'2'} tag={'div'} zoom={false}>
        <img
          src={'./image/demobg2.jpg'}
          alt={''}
          style={{ width: '100vw', height: '48vh', objectFit: 'contain' }}
        />
      </SwiperSlide>
      <SwiperSlide key={'3'} tag={'div'} zoom={false}>
        <img
          src={'./image/demobg1.jpg'}
          alt={''}
          style={{ width: '100vw', height: '48vh', objectFit: 'contain' }}
        />
      </SwiperSlide>
    </Swiper>
  );
};
