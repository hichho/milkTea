import React, { useEffect, useState } from 'react';
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
import less from './index.less';
import Flex from '@/components/Flex';
// import 'swiper/swiper.scss';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Thumbs]);

export default () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  const renderCustom = (swiper, current, total) => {
    console.log(swiper, current, total);

    let paginationHtml = '';
    let text = ['等级专属券', '免邮特权', '生日礼券'];
    for (let i = 1; i <= total; i++) {
      if (i == current) {
        paginationHtml += `<div class='pagination pagination_active'>
                            <span class='pagination_icon icon${i}'></span>
                            <span class='pagination_text'>${text[i - 1]}</span>
                          </div>`;
      } else {
        paginationHtml += `<div class='pagination'>
                            <span class='pagination_icon icon${i}'></span>
                            <span class='pagination_text'>${text[i - 1]}</span>
                          </div>`;
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
      }}
    >
      <Swiper
        autoplay={true}
        simulateTouch={true}
        thumbs={{ swiper: thumbsSwiper }}
        pagination={{ clickable: true }}
        paginationType={'custom'}
        Pagination={true}
        onSwiper={swiper => {
          console.log(swiper);
          setThumbsSwiper();
        }}
        onSlideChange={() => console.log('slide change')}
        renderCustom={renderCustom}
      >
        <SwiperSlide virtualIndex={'1'}>
          <img
            src={'./image/demobg1.jpg'}
            alt={''}
            style={{ width: '100%', height: '500px', objectFit: 'contain' }}
          />
        </SwiperSlide>
        <SwiperSlide virtualIndex={'2'}>
          <img
            src={'./image/demobg2.jpg'}
            alt={''}
            style={{ width: '100%', height: '500px', objectFit: 'contain' }}
          />
        </SwiperSlide>
        <SwiperSlide virtualIndex={'3'}>
          <img
            src={'./image/demobg1.jpg'}
            alt={''}
            style={{ width: '100%', height: '500px', objectFit: 'contain' }}
          />
        </SwiperSlide>
      </Swiper>

      <Flex>测试</Flex>
    </div>
  );
};
