import React, { useEffect } from 'react';
import 'swiper/swiper.less';
import { Swiper, SwiperSlide } from 'swiper/react';
import less from './index.less';
import Flex from '@/components/Flex';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import './navigation.less';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

export default () => {
  return (
    <Flex
      style={{ backgroundColor: '#d6d6d6', width: '100%' }}
      direction={'column'}
      alignItems={'center'}
    >
      {/*title*/}
      <Flex
        style={{ width: 1160, margin: '140px 0 0 0' }}
        alignItems={'center'}
      >
        <Flex className={less.title}>Image</Flex>
        <Flex className={less.righttitle}>门店照片</Flex>
      </Flex>

      <Flex style={{ marginTop: 120, width: '100%' }} itemGrow={1}>
        <Swiper
          spaceBetween={12}
          slidesPerView={3}
          navigation
          // onSwiper={swiper => console.log(swiper)}
          // onSlideChange={() => console.log('slide change')}
        >
          <SwiperSlide key={'1'} tag={'div'} zoom={false}>
            <Flex>
              <img
                src={'./image/shop1.jpg'}
                alt={''}
                style={{
                  width: '320px',
                  height: '320px',
                  objectFit: 'contain',
                }}
              />
            </Flex>
          </SwiperSlide>

          <SwiperSlide key={'2'} tag={'div'} zoom={false}>
            <Flex>
              <img
                src={'./image/shop2.jpg'}
                alt={''}
                style={{
                  width: '320px',
                  height: '320px',
                  objectFit: 'contain',
                }}
              />
            </Flex>
          </SwiperSlide>

          <SwiperSlide key={'3'} tag={'div'} zoom={false}>
            <Flex>
              <img
                src={'./image/shop3.jpg'}
                alt={''}
                style={{
                  width: '320px',
                  height: '320px',
                  objectFit: 'contain',
                }}
              />
            </Flex>
          </SwiperSlide>
        </Swiper>
      </Flex>
    </Flex>
  );
};
