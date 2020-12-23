import React, { useEffect } from 'react';
import less from './index.less';
import Flex from '@/components/Flex';

export default () => {
  return (
    <Flex
      style={{ width: '100%', height: '100%' }}
      justify={'center'}
      alignItems={'center'}
      direction={'column'}
    >
      <img className={less.bg} src={'./image/lastbg.jpg'} alt={''} />

      <img className={less.mobilebg} src={'./image/mobilebg.jpg'} />

      <Flex
        justify={'center'}
        className={less.frame}
        alignItems={'center'}
        direction={'column'}
      >
        <Flex
          direction={'column'}
          style={{ width: '100%', maxWidth: '1160px' }}
          className={less.border}
        >
          {/*title*/}
          <Flex className={'title'}>
            <span className={'bigtitle'} style={{ color: '#c6ac82' }}>
              Contact
            </span>
            <span className={'smalltitle'} style={{ color: '#c6ac82' }}>
              联系我们
            </span>
          </Flex>

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

          <Flex className={less.contents}>Email:sourcing@gumingc.com</Flex>

          <Flex className={less.mobileInfo}>
            <img src={'./image/scan1.jpg'} className={less.scan} />
            <img src={'./image/scan1.jpg'} className={less.scan} />

            <Flex alignItems={'center'} style={{ margin: '12px 0' }}>
              <span style={{ color: '#c6ac82' }}>客服热线 ｜</span>
              <span style={{ color: 'white' }}>4000-666-577 ｜</span>
              <span style={{ color: '#c6ac82' }}>4000-777-577</span>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};
