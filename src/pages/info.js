import React, {useEffect, useState} from 'react';
import Flex from "@/components/Flex";
import LinkApi from "@/https/apis/LinkApi";
import AppHelper from "@/utils/AppHelper";
import {Breadcrumb, Card} from "antd";
import less from './info.less';
import UeditorPrview from "@/components/UeditorPreview";
import Common from "@/utils/Common";


export const InfoTitle = {
  '1': '专家工作室',
  '2': '城市工作站',
  '3': '合作共建单位',
  '4': '相关链接',
  '5': '关于我们',
  '6': '站务管理',
};


export const JumptoInfo = (record) => {
  if (!Common.isEmpty(record.href)) {
    window.open(record.href);
  } else {
    AppHelper.routerPush('/info', {id: record.id, type: record.type})
  }
}


export default (props) => {
  const {location} = props;

  const [detail, setDetail] = useState({});

  /**
   * 获取详情
   */
  const getExpertDetail = () => {
    LinkApi.getLinkOne(location.query.id).then(res => {
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
        <Breadcrumb.Item>{InfoTitle[location.query.type]}</Breadcrumb.Item>
      </Breadcrumb>

      <div className={less.content}>
        {!Common.isEmpty(detail.cover)&&
          <Flex style={{width:'100%',padding:'24px'}} justify={"center"}>
            <img src={detail.cover} alt={''} style={{objectFit:'contain'}}/>
          </Flex>}

        <UeditorPrview html={detail.content}/>
      </div>

    </Flex>
  </Card>;
}
