import React, { useEffect } from 'react';
import less from './index.less';
import Flex from '@/components/Flex';
import Common from '@/utils/Common';

export default () => {
  const itemData = [
    {
      time: '2010',
      info: [
        <Flex style={{ width: '100%' }}>
          第1家合作门店开业【古茗开始连锁经营模式】
        </Flex>,
      ],
    },
    {
      time: '2011',
      info: [
        <Flex style={{ width: '100%' }}>
          第1家合作门店开业【古茗开始连锁经营模式】
        </Flex>,
        <span style={{ width: '100%' }}>
          经过一年半的整改和口味的突破，古茗升级第2代，单店单天出杯突破
          <span style={{ color: '#c6ac82' }}>1000杯</span>
        </span>,
      ],
    },
    {
      time: '2014',
      info: [<Flex style={{ width: '100%' }}>第一家古茗营业</Flex>],
    },
    {
      time: '2015',
      info: [
        <Flex style={{ width: '100%' }}>
          第1家合作门店开业【古茗开始连锁经营模式】
        </Flex>,
        <Flex style={{ width: '100%' }}>
          经过一年半的整改和口味的突破，古茗升级第2代，单店单天出杯突破
          <span style={{ color: '#c6ac82' }}>1000杯</span>
        </Flex>,
      ],
    },
    {
      time: '2016',
      info: [<Flex style={{ width: '100%' }}>第一家古茗营业</Flex>],
    },
    {
      time: '2017',
      info: [<Flex style={{ width: '100%' }}>第一家古茗营业</Flex>],
    },
    {
      time: '2017',
      info: [<Flex style={{ width: '100%' }}>第一家古茗营业</Flex>],
    },
    {
      time: '2017',
      info: [<Flex style={{ width: '100%' }}>第一家古茗营业</Flex>],
    },
    {
      time: '2018',
      info: [
        <Flex style={{ width: '100%' }}>
          第1家合作门店开业【古茗开始连锁经营模式】
        </Flex>,
        <Flex style={{ width: '100%' }}>
          经过一年半的整改和口味的突破，古茗升级第2代，单店单天出杯突破
          <span style={{ color: '#c6ac82' }}>1000杯</span>
        </Flex>,
      ],
    },
    { time: '2019', info: [<Flex>第一家古茗营业</Flex>] },
    {
      time: '',
      info: [
        <Flex
          style={{
            marginLeft: 60,
            color: '#c6ac82',
            fontSize: 25,
          }}
        >
          Never Stop
        </Flex>,
      ],
    },
  ];

  const renderItem = () => {
    return (
      <Flex direction={'column'} className={less.itemFrame}>
        {itemData.map((item, index) => {
          return (
            <Flex alignItems={'center'} className={less.item} key={index}>
              {/*时间*/}
              <Flex className={less.time}>{item.time}</Flex>
              {/*  点*/}
              {!Common.isEmpty(item.time) && (
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
              )}

              {/*  内容*/}
              <Flex direction={'column'}>
                {item.info.map((unit, idx) => {
                  return (
                    <Flex
                      className={less.content}
                      alignItems={'center'}
                      key={idx}
                    >
                      {!Common.isEmpty(item.time) && (
                        <Flex className={less.contentLine}></Flex>
                      )}
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
    <Flex
      style={{ width: '100%', backgroundColor: 'white' }}
      justify={'center'}
    >
      <Flex className={less.frame} alignItems={'center'} direction={'column'}>
        {/*title*/}
        <Flex className={'title'}>
          <span className={'bigtitle'}>Progress</span>
          <span className={'smalltitle'}>古茗历程</span>
          <Flex className={less.line}></Flex>
        </Flex>

        <Flex direction={'column'} className={less.bodyFrame}>
          {/*  柱子*/}
          <Flex className={less.line}></Flex>
          {/*斜柱子*/}
          <Flex className={less.specialline}></Flex>

          {renderItem()}
        </Flex>
      </Flex>
    </Flex>
  );
};
