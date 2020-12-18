import React, {useEffect, useState} from 'react';
import Flex from "@/components/Flex";
import AppHelper from "@/utils/AppHelper";
import UeditorPrview from "@/components/UeditorPreview";
import LinkApi from "@/https/apis/LinkApi";


export default (configKey) => {

  const [detail, setDetail] = useState({});

  /**
   * 获取详情
   */
  const getRedirectDetail = () => {
    LinkApi.getRedict({type:'8'}).then(res => {
      if (res.code === 200) {
        if(Array.isArray(res.data)){
          setDetail(res.data[0]);
        }
      } else {
        AppHelper.showRespError(res);
      }
    })
  };



  useEffect(() => {
    getRedirectDetail();
  }, [1]);

  return <Flex direction={"column"} style={{width:'100%',height:'100%'
    ,minHeight:'100vh',minWidth:'100vw'
  }} justify={"center"} alignItems={"center"}>
    <UeditorPrview html={detail.content}/>
  </Flex>;
}
