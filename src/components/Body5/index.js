import React, { useEffect } from 'react';
import less from './index.less';
import Flex from '@/components/Flex';

export default () => {
  return (
    <Flex style={{ width: '100%' }} justify={'center'}>
      <Flex className={less.frame} direction={'column'}>
        {/*  title*/}
        <Flex className={'title'}>
          <span className={'bigtitle'}>Distribution</span>
          <span className={'smalltitle'}>连锁布局</span>
        </Flex>

        {/*    mobile*/}
        <Flex direction={'column'} className={less.mobile}>
          <Flex alignItems={'center'}>
            <Flex
              style={{
                width: 4,
                height: 4,
                backgroundColor: 'black',
                borderRadius: '100%',
                margin: '0 4px',
              }}
            />
            <Flex>古茗茶饮历时10年，全国门店4000余家</Flex>
          </Flex>

          <Flex alignItems={'center'}>
            <Flex
              style={{
                width: 4,
                height: 4,
                backgroundColor: 'black',
                borderRadius: '100%',
                margin: '0 4px',
              }}
            />
            <Flex>古茗茶饮历时10年，全国门店4000余家</Flex>
          </Flex>
        </Flex>

        {/*  map*/}
        <Flex className={less.mapframe} justify={'space-between'}>
          <img src={'./image/map.png'} alt={''} className={less.img} />

          {/*webbrowser*/}
          <Flex direction={'column'} className={less.right}>
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
    </Flex>
  );
};
