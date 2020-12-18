import React, {useEffect} from "react";
import less from './index.less';
import {Carousel} from 'antd';


export default () => {


  const banner = [
    {id: '1', image: './image/demobg1.jpg'},
    {id: '2', image: './image/demobg2.jpg'},
  ]

  return <div className={less.frame}>
    <Carousel
      autoplay
      className={less.carousel} effect={"fade"}>
      {banner.map(item => {
        return <img
          key={item.id}
          className={less.cover}
          alt={""}
          src={item.image}
        />
      })}
    </Carousel>
  </div>
}

