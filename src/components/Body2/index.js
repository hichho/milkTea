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
        height: '600px',
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
          renderBullet: function(index, className) {
            const text = {
              '0': '产品研发',
              '1': '冷链系统',
              '2': '仓储系统',
              '3': '企业文化',
            };
            const text2 = {
              '0': 'Product development',
              '1': 'Cold chain system',
              '2': 'Warehouse system',
              '3': 'Corporate culture',
            };
            const src0 = {
              '0': './image/swiper10.png',
              '1': './image/swiper20.png',
              '2': './image/swiper30.png',
              '3': './image/swiper40.png',
            };
            const src1 = {
              '0': './image/swiper11.png',
              '1': './image/swiper21.png',
              '2': './image/swiper31.png',
              '3': './image/swiper41.png',
            };
            let src;
            if (className == 'swiper-pagination-bullet') {
              src = src0[index];
            } else {
              src = src1[index];
            }
            return (
              '<div class="' +
              className +
              '">' +
              '<img src="' +
              src +
              '"' +
              '/>' +
              // + '<img src="' + src1[index] + '"' + 'style=' + className1 + '/>'
              ' <div>' +
              '<span>' +
              text[index] +
              '</span> ' +
              '<p>' +
              text2[index] +
              '</p>' +
              '</div>' +
              '</div>'
            );
            // return '<div class="' + className + '">' + data[index] + '</div>';
          },
        }}
      >
        <SwiperSlide virtualIndex={'1'}>
          <img
            src={'./image/demoimg1.jpg'}
            alt={''}
            style={{ width: '100%', height: '600px', objectFit: 'cover' }}
          />
        </SwiperSlide>
        <SwiperSlide virtualIndex={'2'}>
          <img
            src={'./image/demoimg2.jpg'}
            alt={''}
            style={{ width: '100%', height: '600px', objectFit: 'cover' }}
          />
        </SwiperSlide>
        <SwiperSlide virtualIndex={'3'}>
          <img
            src={'./image/demoimg3.jpg'}
            alt={''}
            style={{ width: '100%', height: '600px', objectFit: 'cover' }}
          />
        </SwiperSlide>
        <SwiperSlide virtualIndex={'4'}>
          <img
            src={'./image/demoimg4.jpg'}
            alt={''}
            style={{ width: '100%', height: '600px', objectFit: 'cover' }}
          />
        </SwiperSlide>
        <div className="swiper-pagination"></div>
      </Swiper>
    </div>
  );
};
