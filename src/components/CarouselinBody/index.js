import React, { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Thumbs,
} from 'swiper';
import 'swiper/components/navigation/navigation.less';
import 'swiper/components/pagination/pagination.less';
import 'swiper/components/scrollbar/scrollbar.less';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Thumbs]);

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
        autoplay={true}
        simulateTouch={true}
        pagination={{ clickable: true }}
        paginationType={'custom'}
        Pagination={true}
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
