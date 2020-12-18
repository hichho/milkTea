import React, {useEffect, useState} from 'react';
import Flex from "@/components/Flex";
import AppHelper from "@/utils/AppHelper";
import {Breadcrumb, Card} from "antd";
import less from './info.less';
import UeditorPrview from "@/components/UeditorPreview";
import ActivityApi from "@/https/apis/ActivityApi";

export default (props) => {
  const {location} = props;

  const [detail, setDetail] = useState({});

  /**
   * 获取详情
   */
  const getExpertDetail = () => {
    ActivityApi.getActivityOne(location.query.id).then(res => {
      if (res.code === 200) {
        setDetail(res.data);
      } else {
        AppHelper.showRespError(res);
      }
    })
  };

  useEffect(() => {
    getExpertDetail();
  }, [location.query.id]);

  return <Card bordered={false} className={less.expert}>
    <Flex direction={"column"}>
      <Breadcrumb separator=">">
        <Breadcrumb.Item href={'/'}>首页</Breadcrumb.Item>
        <Breadcrumb.Item>活动项目</Breadcrumb.Item>
      </Breadcrumb>

      <div className={less.content}>
        <UeditorPrview html={detail.content}/>
      </div>

    </Flex>
  </Card>;
}
