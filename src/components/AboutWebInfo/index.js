import React, {useEffect, useState} from "react";
import Flex from "@/components/Flex";
import less from "./index.less";
import ArticleApi from "@/https/apis/ArticleApi";
import AppHelper from "@/utils/AppHelper";
import Ellipsis from "@/components/Ellipsis";
import Common from "@/utils/Common";

function saveToLocal(obj) {
  sessionStorage.setItem('AboutUs', JSON.stringify(obj));
}

function getFormLocal() {
  let res = sessionStorage.getItem('AboutUs');
  return Common.parseJSON(res, {})
}


export default () => {

  const [detail, setDetail] = useState(getFormLocal());

  const getDetail = () => {
    ArticleApi.getAboutUs().then(res => {
      if (res.code === 200) {
        saveToLocal(res.data)
        setDetail(res.data)
      } else {
        AppHelper.showRespError(res)
      }
    })
  };

  useEffect(() => {
    getDetail();
  }, [1]);


  return <Flex direction={"column"} className={less.type1} itemGrow={1}
               onClick={() => AppHelper.routerPush('/about-us')}>
    <Flex className={less.title} justify={"space-between"} alignItems={"center"}>
      <Flex style={{fontSize:16}}>关于护理网</Flex>
      <Flex>更多>></Flex>

    </Flex>
    <Flex direction={"column"} className={less.content}>
      <Flex itemGrow={1} style={{height: 0}}>
        <img src={detail.cover} alt={''} style={{height: '100%', objectFit: "cover", width: '100%'}}/>
      </Flex>
      <Flex
        style={{fontSize: 14, width: '100%', padding: '12px'}}>
        <Ellipsis lines={3}>{detail.title}</Ellipsis>
      </Flex>
    </Flex>
  </Flex>
}

