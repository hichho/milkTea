import React, {useEffect, useState} from "react";
import Flex from "@/components/Flex";
import less from "./index.less";
import AppHelper from "@/utils/AppHelper";
import ActivityApi from "@/https/apis/ActivityApi";
import 'swiper/swiper.less';
import {Swiper, SwiperSlide} from 'swiper/react';
import './navigation.less';

import SwiperCore, {Navigation, Pagination, Scrollbar, A11y} from 'swiper';
import Common from "@/utils/Common";

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);


export default () => {

  const [activity, setActivity] = useState([]);

  const [isInMobile, setMobile] = useState(false); //是否小于768px;


  const getActivity = () => {
    ActivityApi.getActivity().then(res => {
      if (res.code === 200) {
        setActivity(res.data)
      } else {
        AppHelper.showRespError(res)
      }
    })
  }

  //实时获取浏览器大小
  const getWidth = () => {
    if (Common.getWidth(768)) {
      setMobile(true)
    } else {
      setMobile(false)
    }
  }


  useEffect(() => {
    getActivity();
    window.addEventListener('resize', getWidth) //添加屏幕宽度监听事件
    return () => window.removeEventListener('resize', getWidth) // 移除
  }, [1]);


  return <Flex className={less.all}>
    <img className={less.bg} alt={''} src={'./home/webinfo.jpg'}/>

    <Flex className={less.body} direction={"column"} justify={"space-between"} alignItems={"center"}>
      {/*<Flex className={less.title} justify={"center"}>——活动项目——</Flex>*/}
      <Flex justify={"space-between"} alignItems={"center"} itemGrow={1} style={{height: 0, width: '100%'}}>
        <Swiper
          spaceBetween={36}
          slidesPerView={isInMobile ? 3 : 5}
          navigation
        >
          {activity.map((item, index) => {
            return <SwiperSlide key={index}>
              <Flex
                justify={"space-between"} alignItems={"center"}
                direction={"column"}
                className={less.card}
                onClick={() => {
                  AppHelper.routerPush('/activity', {id: item.id})
                }}>
                {/*<div className={less.imgFrame}>*/}
                <img alt={''} src={item.cover} className={less.img}/>
                {/*</div>*/}
                <div className={less.name}>
                  {item.name}
                </div>
              </Flex>
            </SwiperSlide>
          })}
        </Swiper>
      </Flex>
    </Flex>
  </Flex>
}

