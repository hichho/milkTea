import React, { useEffect } from 'react';
import less from './index.less';
import Flex from '@/components/Flex';

export default () => {
  const data = [
    {
      src: './image/brand1.png',
      title: '原创研发',
      content:
        '专业产品研发团队、以时令、原液、现萃、健康、标准为原则，' +
        '通过原液茶、鲜果、鲜奶等纯天然食材的组合创新呈现出值得等待的美味',
    },
    {
      src: './image/brand2.png',
      title: '原创研发',
      content:
        '专业产品研发团队、以时令、原液、现萃、健康、标准为原则，' +
        '通过原液茶、鲜果、鲜奶等纯天然食材的组合创新呈现出值得等待的美味',
    },
    {
      src: './image/brand3.png',
      title: '原创研发',
      content:
        '专业产品研发团队、以时令、原液、现萃、健康、标准为原则，' +
        '通过原液茶、鲜果、鲜奶等纯天然食材的组合创新呈现出值得等待的美味',
    },
    {
      src: './image/brand4.png',
      title: '原创研发',
      content:
        '专业产品研发团队、以时令、原液、现萃、健康、标准为原则，' +
        '通过原液茶、鲜果、鲜奶等纯天然食材的组合创美味',
    },
  ];

  return (
    <Flex
      style={{ width: '100%', backgroundColor: '#d6d6d6' }}
      justify={'center'}
    >
      <Flex className={less.frame} direction={'column'}>
        {/*title*/}
        <Flex className={'title'}>
          <span className={'bigtitle'}>Branded Advantages</span>
          <span className={'smalltitle'}>品牌优势</span>
        </Flex>
        {/*  content*/}

        <Flex className={less.cardFrame} wrap={'wrap'} justify={'center'}>
          {data.map((item, index) => {
            return (
              <Flex
                key={index}
                direction={'column'}
                className={less.itemFrame}
                alignItems={'center'}
              >
                <img src={item.src} className={less.img} />

                <Flex className={less.title} justify={'center'}>
                  {item.title}
                </Flex>

                <Flex className={less.content} justify={'center'}>
                  {item.content}
                </Flex>
              </Flex>
            );
          })}
        </Flex>
      </Flex>
    </Flex>
  );
};
