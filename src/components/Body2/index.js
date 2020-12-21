import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from 'swiper';
import 'swiper/components/navigation/navigation.less';
import 'swiper/components/pagination/pagination.less';
import 'swiper/components/scrollbar/scrollbar.less';
import less from './index.less';
import Flex from '@/components/Flex';
// import 'swiper/swiper.scss';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay]);

export default () => {
  const renderCustom = (swiper, current, total) => {
    console.log(swiper, current, total);

    let paginationHtml = '';
    let text = ['等级专属券', '免邮特权', '生日礼券'];
    for (let i = 1; i <= total; i++) {
      if (i == current) {
        paginationHtml = <div>1</div>;
      } else {
        paginationHtml = <div>12</div>;
      }
    }
    console.log(paginationHtml);
    return paginationHtml;
  };

  return (
    <div
      className="swiper-container"
      style={{
        width: '100%',
        height: '500px',
        disableOnInteraction: false,
      }}
    >
      <Swiper
        // simulateTouch={true}
        loop={true}
        autoplay={{
          autoPlay: true,
          delay: 1500,
          autoplayDisableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          // renderCustom: function () {
          //   return <span>fsfs</span>
          // },
          renderBullet: function(index, className) {
            console.log(index, className);
            console.log('<span class="' + 'special' + '">' + index + '</span>');
            return '<span class="' + 'special' + '">' + index + '</span>';
          },
        }}
        onSwiper={swiper => {
          console.log(swiper);
        }}
        onSlideChange={() => console.log('slide change')}
      >
        <SwiperSlide virtualIndex={'1'}>
          <img
            src={'./image/demobg1.jpg'}
            alt={''}
            style={{ width: '100%', height: '500px', objectFit: 'cover' }}
          />
        </SwiperSlide>
        <SwiperSlide virtualIndex={'2'}>
          <img
            src={'./image/demobg2.jpg'}
            alt={''}
            style={{ width: '100%', height: '500px', objectFit: 'cover' }}
          />
        </SwiperSlide>
        <SwiperSlide virtualIndex={'3'}>
          <img
            src={'./image/demobg1.jpg'}
            alt={''}
            style={{ width: '100%', height: '500px', objectFit: 'cover' }}
          />
        </SwiperSlide>
      </Swiper>

      <Flex>测试</Flex>
    </div>
  );
};
