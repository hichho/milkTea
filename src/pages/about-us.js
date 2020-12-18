import React, {useEffect, useState} from 'react';
import Flex from "@/components/Flex";
import AppHelper from "@/utils/AppHelper";
import {Breadcrumb, Card} from "antd";
import less from './about-us.less';
import UeditorPrview from "@/components/UeditorPreview";
import ArticleApi from "@/https/apis/ArticleApi";

export default (props) => {

  const [detail, setDetail] = useState({});

  /**
   * 获取详情
   */
  const getAboutUs = () => {
    ArticleApi.getAboutUs().then(res => {
      if (res.code === 200) {
        setDetail(res.data);
      } else {
        AppHelper.showRespError(res);
      }
    })
  };

  useEffect(() => {
    getAboutUs();
  }, [1]);

  return <Card bordered={false} className={less.expert}>
    <Flex direction={"column"}>
      <Breadcrumb separator=">">
        <Breadcrumb.Item href={'/'}>首页</Breadcrumb.Item>
        <Breadcrumb.Item>关于我们</Breadcrumb.Item>
      </Breadcrumb>

      <div className={less.content}>
        <UeditorPrview html={detail.content}/>
      </div>

    </Flex>
  </Card>;
}
