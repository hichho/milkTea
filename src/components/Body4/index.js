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
      style={{ width: '100%', backgroundColor: '#d6d6d6' }}
      justify={'center'}
    >
      <Flex
        className={less.all}
        style={{ backgroundColor: '#d6d6d6', width: '100%' }}
        direction={'column'}
      >
        {/*title*/}
        <Flex
          className={less.frame}
          style={{ margin: '140px 0 0 0' }}
          alignItems={'center'}
        >
          <Flex className={less.title}>Image</Flex>
          <Flex className={less.righttitle}>门店照片</Flex>
        </Flex>

        <Flex itemGrow={1} className={less.swiperframe}>
          <Swiper
            spaceBetween={12}
            slidesPerView={3}
            // navigation
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
    </Flex>
  );
};
