import React, { useEffect, useState } from 'react';
import Flex from '@/components/Flex';
import less from './index.less';

export default () => {
  useEffect(() => {}, [1]);

  return (
    <Flex justify={'center'} itemGrow={1} className={less.all}>
      {/*browser*/}
      <Flex
        justify={'space-between'}
        className={less.content1}
        alignItems={'center'}
      >
        <img
          src={'./image/logo.jpg'}
          style={{ height: 220, objectFit: 'contain' }}
        />

        <Flex direction={'column'} className={less.text}>
          <Flex style={{ margin: '6px 0' }}>
            Copyright 浙江古茗科技有限公司
          </Flex>

          <Flex style={{ margin: '6px 0' }}>Frachise division</Flex>

          <Flex>浙ICP备19008165号-1</Flex>
        </Flex>

        <img
          className={less.img}
          src={'./image/scan1.jpg'}
          alt={''}
          style={{ width: 120, height: 120 }}
        />
      </Flex>

      {/*  mobile*/}
      <Flex className={less.content2} direction={'column'}>
        <Flex direction={'column'}>
          <Flex>Copyright 浙江古茗科技有限公司</Flex>
          <Flex>Frachise division</Flex>
          <Flex>浙ICP备19008165号-1</Flex>
        </Flex>

        <Flex
          className={less.btnarea}
          justify={'space-between'}
          alignItems={'center'}
        >
          <Flex className={less.btn} justify={'center'} alignItems={'center'}>
            可合作区域
          </Flex>

          <Flex className={less.btn} justify={'center'} alignItems={'center'}>
            申请合作
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};
