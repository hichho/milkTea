import React from 'react';
import styles from './index.less';
import Flex from '@/components/Flex';
import CarouselinBody from '@/components/CarouselinBody';
import Body1 from '@/components/Body1';
import DemoBody2 from '@/components/DemoBody2';
// import Body2 from '@/components/Body2';
import Body3 from '@/components/Body3';
import Body4 from '@/components/Body4';
import Body5 from '@/components/Body5';
import Body6 from '@/components/Body6';
import Body7 from '@/components/Body7';
import Body8 from '@/components/Body8';

export default () => {
  return (
    <Flex direction={'column'} className={styles.index} alignItems={'center'}>
      <CarouselinBody />

      {/*两张卡片*/}
      {/*<Body1 />*/}

      {/*swiper*/}
      {/*<Body2 />*/}

      {/*<DemoBody2 />*/}

      {/*  历程*/}
      {/*<Body3 />*/}

      {/*  门店*/}
      {/*<Body4 />*/}

      {/*连锁布局*/}
      {/*<Body5 />*/}

      {/*品牌优势*/}
      {/*<Body6 />*/}

      {/*扶持政策*/}
      {/*<Body7 />*/}

      {/*联系我们*/}
      {/*<Body8 />*/}

      {/*    空白*/}
      {/*<div style={{ height: 640 }}></div>*/}
    </Flex>
  );
};
