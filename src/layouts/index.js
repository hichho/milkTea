import React, {useEffect, useState} from "react";
import Flex from "../components/Flex";
import {Carousel, LocaleProvider, Input} from "antd";
import zh_CN from 'antd/es/locale-provider/zh_CN';
import Header from "@/components/Header";


export default (props) => {
  const {pathname, query} = props.location;








  return <LocaleProvider locale={zh_CN}>
    <div>


        <Header/>







      <div style={{minHeight: '80vh'}}>{props.children}</div>

      {/*/footer*/}




    </div>
  </LocaleProvider>

}
