import React, { useEffect, useState } from 'react';
import Flex from '@/components/Flex';
import less from './index.less';

export default () => {
  useEffect(() => {}, [1]);

  return (
    <Flex justify={'center'} itemGrow={1} className={less.all}>
      <Flex
        justify={'space-between'}
        className={less.content}
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

        <Flex>
          <img
            src={'./image/scan1.jpg'}
            alt={''}
            style={{ width: 120, height: 120 }}
          />
        </Flex>
      </Flex>
    </Flex>
  );
};
