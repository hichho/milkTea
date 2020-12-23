import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, {
  Navigation,
  Scrollbar,
  A11y,
  Thumbs,
  Autoplay,
} from 'swiper';
import less from './index.less';
import { Carousel } from 'antd-mobile';
import Flex from '@/components/Flex';

SwiperCore.use([Navigation, Scrollbar, A11y, Thumbs, Autoplay]);

export default () => {
  const [slideIndex, setIndex] = useState('');
  const [imgHeight, setImgHeight] = useState('');
  const [data, setData] = useState([]);
  useEffect(() => {
    setData(['./image/demobg1.jpg', './image/demobg2.jpg']);
    setImgHeight(176);
    setIndex(0);
  }, [1]);

  return (
    <Flex style={{ width: '100%', height: '100%', overflow: 'hidden' }}>
      <div className={less.swiperframe}>
        <Carousel
          autoplay={false}
          infinite
          beforeChange={(from, to) =>
            console.log(`slide from ${from} to ${to}`)
          }
          afterChange={index => console.log('slide to', index)}
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
  );
};
