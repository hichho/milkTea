import React, {useEffect, useState} from "react";
import Flex from "@/components/Flex";
import styles from "./index.less";
import AppHelper from "@/utils/AppHelper";
import LinkApi from "@/https/apis/LinkApi";
import {JumptoInfo} from "@/pages/info";




export default () => {

  const [data, setData] = useState([])
  const getLinkData = () => {
    LinkApi.getLink(6).then(res => {
      if (res.code === 200) {
        setData(res.data)
      } else {
        AppHelper.showRespError(res);
      }
    })
  }

  useEffect(()=>{
    getLinkData();
  },[1]);


  return <Flex wrap={"wrap"} className={styles.module} justify={"center"}>
    {data.map((item, index) => {
      return <Flex
        direction={"column"} justify={"center"} alignItems={"center"} key={index}
        className={styles.itemFrame}
        onClick={() => {
         JumptoInfo(item)
        }}>
        <Flex><img alt={''} src={item.cover}/></Flex>
        <Flex style={{marginTop:4}}>{item.title}</Flex>
      </Flex>
    })}
  </Flex>

}

