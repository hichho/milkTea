import React, { useEffect } from 'react';
import less from './index.less';
import Flex from '@/components/Flex';

export default () => {
  return (
    <Flex className={less.frame} direction={'column'}>
      {/*title*/}

      {/*  title*/}
      <Flex className={less.title} justify={'flex-start'}>
        <span>Distribution</span>
        <span className={less.smalltitle}>连锁布局</span>
      </Flex>

      {/*  map*/}
      <Flex justify={'space-between'} style={{ width: 1160, marginTop: 120 }}>
        <img src={'./image/map.png'} alt={''} style={{}} />
        <Flex direction={'column'} style={{ marginTop: 64 }}>
          <Flex className={less.righttitle}>
            古茗茶饮历时10年，全国门店4000余家
          </Flex>

          <Flex className={less.line}></Flex>

          <Flex className={less.content}>
            分布于浙江、福建、江苏、江西、安徽、四川、重庆、湖北、河南、广东......
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};
