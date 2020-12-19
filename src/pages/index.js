import React from 'react';
import styles from './index.less';
import Flex from '@/components/Flex';
import CarouselinBody from '@/components/CarouselinBody';
import Body1 from '@/components/Body1';
import Body2 from '@/components/Body2';
import Body3 from '@/components/Body3';
import Body4 from '@/components/Body4';

export default () => {
  return (
    <Flex direction={'column'} className={styles.index} alignItems={'center'}>
      <CarouselinBody />

      {/*两张卡片*/}
      <Body1 />

      {/*swiper*/}
      {/*<Body2/>*/}

      {/*  历程*/}
      <Body3 />

      {/*  门店*/}
      <Body4 />

      {/*    空白*/}
      <div style={{ height: 640 }}></div>
    </Flex>
  );
};
