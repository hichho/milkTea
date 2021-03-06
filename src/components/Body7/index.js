import React, { useEffect } from 'react';
import less from './index.less';
import Flex from '@/components/Flex';

export default () => {
  const data = [
    {
      title: '初期选址',
      content:
        '商谈成功后，片区负责人会协助评估选址，片区负责人会协助评估选址。',
    },
    { title: '初期选址', content: '商谈成功后，片区负责人会协助评估选址。' },
    { title: '初期选址', content: '商谈成功后，片区负责人会协助评估选址。' },
    { title: '初期选址', content: '商谈成功后，片区负责人会协助评估选址。' },
  ];

  return (
    <Flex
      style={{ width: '100%', backgroundColor: 'white' }}
      justify={'center'}
    >
      <Flex className={less.frame} direction={'column'}>
        {/*title*/}

        <Flex className={'title'}>
          <span className={'bigtitle'}>Support Policies</span>
          <span className={'smalltitle'}>扶持政策</span>
        </Flex>

        {/*  content in browser*/}
        <Flex className={less.contentframe} justify={'center'} wrap={'wrap'}>
          {data.map((item, index) => {
            return (
              <Flex
                key={index}
                className={less.item}
                direction={'column'}
                alignItems={'center'}
              >
                <Flex
                  justify={'center'}
                  alignItems={'center'}
                  className={less.circle}
                >
                  {index + 1}
                </Flex>

                <Flex className={less.title2}>{item.title}</Flex>

                <Flex className={less.content} justify={'center'}>
                  {item.content}
                </Flex>
              </Flex>
            );
          })}
        </Flex>

        {/*content in mobile*/}
        <Flex
          className={less.mobile}
          direction={'column'}
          alignItems={'center'}
        >
          {data.map((item, index) => {
            return (
              <Flex key={index} className={less.card} justify={'space-between'}>
                <Flex
                  className={less.circle}
                  justify={'center'}
                  alignItems={'center'}
                >
                  {index + 1}
                </Flex>

                <Flex className={less.trinagle}></Flex>

                <Flex className={less.contentValue} direction={'column'}>
                  <span style={{ color: 'black' }}>{item.title}</span>
                  <span
                    style={{ fontSize: 12, color: '#868686', fontWeight: 400 }}
                  >
                    {item.content}
                  </span>
                </Flex>
              </Flex>
            );
          })}
        </Flex>

        {/*button  */}
        <Flex justify={'center'} style={{ width: '100%' }}>
          <Flex className={less.btn} justify={'center'} alignItems={'center'}>
            点击查看合作详情
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};
