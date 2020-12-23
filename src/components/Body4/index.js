import React, { useEffect, useState } from 'react';
import 'swiper/swiper.less';
import less from './index.less';
import Flex from '@/components/Flex';
import { Carousel } from 'antd-mobile';

import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import './navigation.less';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

export default () => {
  const [slideIndex, setIndex] = useState('');
  const [imgHeight, setImgHeight] = useState('');
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(['./image/shop1.jpg', './image/shop2.jpg', './image/shop3.jpg']);
    setImgHeight(176);
    setIndex(0);
  }, [1]);

  return (
    <Flex
      style={{ width: '100%', backgroundColor: '#d6d6d6', overflow: 'hidden' }}
      justify={'center'}
    >
      <Flex className={less.all} direction={'column'}>
        <Flex className={'title'}>
          <span className={'bigtitle'}>Image</span>
          <span className={'smalltitle'}>门店照片</span>
          <Flex className={less.line}></Flex>
        </Flex>

        <div className={less.swiperframe}>
          <Carousel
            className="space-carousel"
            frameOverflow="visible"
            cellSpacing={10}
            slideWidth={0.8}
            // autoplay
            infinite
            beforeChange={(from, to) =>
              console.log(`slide from ${from} to ${to}`)
            }
            afterChange={index => setIndex(index)}
          >
            {data.map((val, index) => (
              <img
                src={val}
                alt=""
                style={{ width: '100%', verticalAlign: 'top' }}
                onLoad={() => {
                  window.dispatchEvent(new Event('resize'));
                  setImgHeight({ imgHeight: 'auto' });
                }}
              />
            ))}
          </Carousel>
        </div>
      </Flex>
    </Flex>
  );
};
