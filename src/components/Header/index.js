import React, {useEffect, useState} from "react";
import Flex from "@/components/Flex";
import {Tabs} from "antd";
import less from './index.less';

export default () => {

  const {TabPane} = Tabs;

  const TabsData = [
    {name: "首页", path: '/'},
    {name: "合作", path: '/'},
    {name: "疑问", path: '/'},
    {name: "联系我们", path: '/'},
    {name: "人才招聘", path: '/'},
  ]

  useEffect(() => {
  }, [1]);


  return <Flex justify={"center"} itemGrow={1} className={less.all}>
    <Flex className={less.frame} alignItems={"center"} justify={"space-between"}>
      {/*第一部分*/}
      <Flex alignItems={"center"}>
        {TabsData.map((item, index) => {
          return <Flex className={less.item}>
            {item.name}
          </Flex>
        })}
      </Flex>
      {/*  第二部分*/}
      <div style={{backgroundColor: 'white'}} title={'logo颜色跟bgcolor要协调一下'}>
        <img src={'./image/logo.jpg'} alt={''} className={less.logo}/>
      </div>
      {/*  第三部分*/}
      <Flex alignItems={"center"}>
        <img src={'./image/phone.png'} alt={''} style={{
          width: 20, height: 20
          , margin: '0 8px'
        }}/>
        <span style={{margin: '0 8px'}}>
           4000-666-577 | 4000-365-577
        </span>
        <img src={'./image/wechat.png'} alt={''} style={{
          width: 24, height: 24
          , margin: '0 8px'
        }}/>
        <img src={'./image/weibo.png'} alt={''} style={{
          width: 24, height: 24
          , margin: '0 8px'
        }}/>
        <img src={'./image/service.png'} alt={''} style={{
          width: 24, height: 24
          , margin: '0 8px'
        }}/>

      </Flex>


    </Flex>
  </Flex>
}

