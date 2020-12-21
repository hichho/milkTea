import React, { useEffect } from 'react';
import less from './index.less';
import Flex from '@/components/Flex';

export default () => {
  const itemData = [
    {
      title: '唯一签约地点',
      number: '01',
      src: './image/body1bg1.jpg',
      title2: '古茗茶饮总部',
      title3: '浙江省杭州市西湖区小和山',
    },
    {
      title: '合作客服热线',
      number: '02',
      src: './image/body1bg2.jpg',
      title2: '全国门店',
      title3: '全国4000多家门店为准',
    },
  ];

  const renderText = text => {
    let arr = [];
    for (let i = 0; i < text.length; i++) {
      arr.push(text[i]);
    }
    return (
      <Flex justify={'center'}>
        {arr.map((item, index) => {
          //计算偏转角度
          //计算位移距离
          let margin;
          let value;
          if (index == 0) {
            margin = '32px 4px 0 0';
            value = -36;
          } else if (index == 1) {
            margin = '14px 4px 0 0';
            value = -20;
          } else if (index == 2) {
            margin = '0px 4px 0 0';
            value = -8;
          } else if (index == 3) {
            margin = '0px 4px 0 0';
            value = 8;
          } else if (index == 4) {
            margin = '14px 4px 0 0';
            value = 20;
          } else if (index == 5) {
            margin = '32px 4px 0 0';
            value = 36;
          }
          return (
            <Flex
              className={less.text}
              style={{
                transform: 'rotate(' + value + 'deg)',
                margin,
              }}
            >
              {item}
            </Flex>
          );
        })}
      </Flex>
    );
  };

  return (
    <Flex className={less.frame} alignItems={'center'} direction={'column'}>
      {/*title*/}
      <Flex className={less.title}>
        <span>HOW</span>
        <span className={less.righttitle}>如何识别古茗 慎防诈骗</span>
        <Flex className={less.line}></Flex>
      </Flex>
      {/*中央两个图片*/}
      <Flex className={less.itemFrame} justify={'center'}>
        {itemData.map((item, index) => {
          return (
            <Flex className={less.item} direction={'column'} key={index}>
              {renderText(item.title)}

              <Flex className={less.number} justify={'center'}>
                {item.number}
              </Flex>

              <Flex
                className={less.imgFrame}
                justify={'center'}
                alignItems={'center'}
              >
                <img
                  src={item.src}
                  alt={''}
                  style={{ width: 368, height: 368 }}
                />
              </Flex>

              <Flex className={less.title2} justify={'center'}>
                {item.title2}
              </Flex>

              <Flex className={less.title3} justify={'center'}>
                {item.title3}
              </Flex>
            </Flex>
          );
        })}
      </Flex>
      {/*  手机端的两个图片*/}
      <Flex className={less.mobile} direction={'column'}>
        {itemData.map((item, index) => {
          return (
            <Flex className={less.unit} direction={'column'}>
              <img
                src={item.src}
                style={{ width: '100%', objectFit: 'contain' }}
              />

              <Flex style={{ marginTop: 24 }} alignItems={'center'}>
                <Flex
                  style={{
                    width: 8,
                    height: 8,
                    borderRadius: '100%',
                    backgroundColor: '#c6ac82',
                  }}
                />
                <Flex style={{ margin: '0 12px' }}>{item.title}</Flex>
              </Flex>

              <Flex style={{ marginTop: 12, marginBottom: 24 }}>
                {item.title2}
                {item.title3}
              </Flex>
            </Flex>
          );
        })}
      </Flex>
    </Flex>
  );
};
