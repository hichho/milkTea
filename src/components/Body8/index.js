import React, { useEffect } from 'react';
import less from './index.less';
import Flex from '@/components/Flex';

export default () => {
  return (
    <Flex style={{ width: '100%' }} justify={'center'} className={less.frame}>
      <img
        src={'./image/lastbg.jpg'}
        alt={''}
        style={{
          width: '100%',
          OObjectFit: 'contain',
          minHeight: 600,
          position: 'absolute',
          top: 0,
          left: 0,
        }}
      />

      <Flex direction={'column'} style={{ width: 1160 }}>
        <Flex className={less.title} justify={'flex-start'}>
          <span>Contact</span>
          <span className={less.smalltitle}>联系我们</span>
        </Flex>
        {/*  */}

        <Flex className={less.line}></Flex>

        <Flex className={less.content}>客服热线</Flex>
        <Flex className={less.content}>4000-666-577</Flex>
        <Flex className={less.content}>4000-365-577</Flex>

        <Flex className={less.content} style={{ marginTop: 22 }}>
          供应商联系
        </Flex>
        <Flex className={less.content}>Email:sourcing@gumingc.com</Flex>

        <Flex className={less.content} style={{ marginTop: 22 }}>
          媒体联系
        </Flex>

        <Flex className={less.content}>Mobile:121212121;</Flex>

        <Flex className={less.content} style={{ marginBottom: 72 }}>
          Email:sourcing@gumingc.com
        </Flex>
      </Flex>
    </Flex>
  );
};
