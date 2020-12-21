import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/swiper-bundle.css';
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
import './index.less';
import Flex from '@/components/Flex';
// import 'swiper/swiper.scss';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay]);

export default () => {
  let mySwiper;

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
        loop={true}
        autoplay={{
          autoPlay: true,
          delay: 150000,
          autoplayDisableOnInteraction: false,
        }}
        pagination={{
          el: '.swiper-pagination',
          clickable: true,
          type: 'custom',
          pagination: {
            el: '.swiper-pagination',
            clickable: true,
            //自定义分页类型
            type: 'custom',
            //自定义分页
            renderBullet: function(index, className) {
              console.log(index);
              if (index === 1) {
                return '<div class="swiper-pagination-bullet ubolt-black"></div>';
              } else {
                return '<div class="swiper-pagination-bullet ubolt-white"></div>';
              }
            },
          },
          // renderCustom: function(swiper, current, total) {
          //   var customPaginationHtml = "";
          //   for (var i = 0; i < total; i++) {
          //     //判断哪个分页器此刻应该被激活
          //     if (i == current - 1) {
          //       customPaginationHtml +=
          //         '<span class="swiper-pagination-customs swiper-pagination-customs-active"></span>';
          //     } else {
          //       customPaginationHtml +=
          //         '<span class="swiper-pagination-customs"></span>';
          //     }
          //   }
          //   return '<span class="swiperPag">'+customPaginationHtml+'</span>';
          // }
        }}
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
        {/*<div className="swiper-pagination"></div>*/}
        <div className="swiper-pagination ubolt-swiper-pagination">
          <span className="swiper-pagination-bullet ubolt-black"></span>
          <span className="swiper-pagination-bullet ubolt-white"></span>
        </div>
      </Swiper>

      <Flex>测试</Flex>
    </div>
  );
};
