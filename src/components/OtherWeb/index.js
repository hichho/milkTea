import React, {useEffect, useState} from "react";
import Flex from "@/components/Flex";
import styles from "./index.less";
import LinkApi from "@/https/apis/LinkApi";
import AppHelper from "@/utils/AppHelper";
import {JumptoInfo} from "@/pages/info";


export default () => {

  const [dataArr, setData] = useState([]);

  const getLink = () => {
    LinkApi.getLink(4).then(res => {
      if (res.code === 200) {
        setData(res.data)
      } else {
        AppHelper.showRespError(res);
      }
    })
  };


  useEffect(() => {
    getLink();
  }, [1]);

  return <Flex wrap={"wrap"} justify={"center"} className={styles.web}>
    {dataArr.map((item, index) => {
      return <Flex
        justify={"center"} key={index} alignItems={"center"} className={styles.itemFrame}
        onClick={() => JumptoInfo(item)}
      >
        <img alt={''} src={item.cover} className={styles.logo}/>
      </Flex>
    })}
  </Flex>
}

