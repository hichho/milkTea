import React, { useEffect } from 'react';
import less from './index.less';
import Flex from '@/components/Flex';

export default () => {
  const itemData = [
    {
      time: '2010',
      info: [<Flex>第1家合作门店开业【古茗开始连锁经营模式】</Flex>],
    },
    {
      time: '2010',
      info: [
        <Flex>第1家合作门店开业【古茗开始连锁经营模式】</Flex>,
        <Flex>
          经过一年半的整改和口味的突破，古茗升级第2代，单店单天出杯突破
          <span style={{ color: '#c6ac82' }}>1000杯</span>
        </Flex>,
      ],
    },
    { time: '2010', info: [<Flex>第一家古茗营业</Flex>, <Flex></Flex>] },
    { time: '2010', info: [<Flex>第一家古茗营业</Flex>, <Flex></Flex>] },
    { time: '2010', info: [<Flex>第一家古茗营业</Flex>, <Flex></Flex>] },
    {
      time: '2010',
      info: [
        <Flex>第1家合作门店开业【古茗开始连锁经营模式】</Flex>,
        <Flex>
          经过一年半的整改和口味的突破，古茗升级第2代，单店单天出杯突破
          <span style={{ color: '#c6ac82' }}>1000杯</span>
        </Flex>,
      ],
    },
    { time: '2010', info: [<Flex>第一家古茗营业</Flex>, <Flex></Flex>] },
    { time: '2010', info: [<Flex>第一家古茗营业</Flex>, <Flex></Flex>] },
    {
      time: '2010',
      info: [
        <Flex>第1家合作门店开业【古茗开始连锁经营模式】</Flex>,
        <Flex>
          经过一年半的整改和口味的突破，古茗升级第2代，单店单天出杯突破
          <span style={{ color: '#c6ac82' }}>1000杯</span>
        </Flex>,
      ],
    },
    { time: '2010', info: [<Flex>第一家古茗营业</Flex>, <Flex></Flex>] },
  ];

  const renderItem = () => {
    return (
      <Flex direction={'column'} className={less.itemFrame}>
        {itemData.map((item, index) => {
          return (
            <Flex alignItems={'center'} className={less.item}>
              {/*时间*/}
              <Flex className={less.time}>{item.time}</Flex>
              {/*  点*/}
              <Flex
                className={less.border}
                justify={'center'}
                alignItems={'center'}
              >
                <Flex
                  className={less.circle}
                  justify={'center'}
                  alignItems={'center'}
                >
                  <Flex className={less.in}></Flex>
                </Flex>
              </Flex>
              {/*  内容*/}
              <Flex direction={'column'}>
                {item.info.map((unit, idx) => {
                  return (
                    <Flex className={less.content} alignItems={'center'}>
                      <Flex className={less.contentLine}></Flex>
                      <Flex className={less.contentValue}>{unit}</Flex>
                    </Flex>
                  );
                })}
              </Flex>
            </Flex>
          );
        })}
      </Flex>
    );
  };

  return (
    <Flex className={less.frame} alignItems={'center'} direction={'column'}>
      {/*title*/}

      {/*  title*/}
      <Flex className={less.title} justify={'flex-start'}>
        <span>Progress</span>
        <span className={less.smalltitle}>古茗历程</span>
      </Flex>

      <Flex direction={'column'} className={less.bodyFrame}>
        {/*  柱子*/}
        <Flex className={less.line}></Flex>

        {renderItem()}
      </Flex>
    </Flex>
  );
};
