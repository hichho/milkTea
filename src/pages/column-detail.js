import React, {useEffect, useState} from 'react';
import Flex from "@/components/Flex";
import AppHelper from "@/utils/AppHelper";
import {Breadcrumb, Card} from "antd";
import less from './column-detail.less';
import UeditorPrview from "@/components/UeditorPreview";
import ArticleApi from "@/https/apis/ArticleApi";
import RelatedArticle from "@/components/RelatedArticle";
import Common from "@/utils/Common";

/**
 * 打开文章详情
 * @param item
 */
export function openColumnDetail(item) {
  if (!Common.isEmpty(item.url)) {
    window.open(item.url);
  } else {
    AppHelper.routerPush('/column-detail', {
      columnId: item.column_parent_id, id: item.id
    });
  }
}

export default (props) => {
  const {location} = props;

  const [detail, setDetail] = useState({});

  /**
   * 获取详情
   */
  const getArticleDetail = () => {
    ArticleApi.getArticleDetail(location.query.id).then(res => {
      if (res.code === 200) {
        setDetail(res.data);
      } else {
        AppHelper.showRespError(res);
      }
    })
  };

  useEffect(() => {
    getArticleDetail();
  }, [location.query.id]);

  return <Card bordered={false} className={less.expert}>
    <Flex direction={"column"}>
      <Breadcrumb separator=">">
        <Breadcrumb.Item href={'/'}>首页</Breadcrumb.Item>
        <Breadcrumb.Item>{detail.column_parent_name}</Breadcrumb.Item>
        <Breadcrumb.Item>{detail.column_name}</Breadcrumb.Item>
      </Breadcrumb>

      <div className={less.content}>
        <UeditorPrview html={detail.content}/>
      </div>

      {
        !Common.isEmpty(detail.url) &&
        <Flex style={{marginTop: 24, fontSize: 14}}>
          <a href={detail.url} target={'__blank'}>原文链接：{detail.url}</a>
        </Flex>
      }

      <RelatedArticle columnId={location.query.columnId} aId={location.query.id}/>

    </Flex>
  </Card>;
}
