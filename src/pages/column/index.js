import React, {useEffect, useState} from 'react';
import less from './index.less';
import {Card, Pagination} from "antd";
import AppHelper from "@/utils/AppHelper";
import ArticleApi from "@/https/apis/ArticleApi";
import Flex from "@/components/Flex";
import {openColumnDetail} from "@/pages/column-detail";
import {formatDate} from "@/components/DateView";
import EmptyView from "@/components/EmptyView";
import Ellipsis from "@/components/Ellipsis";
import Common from "@/utils/Common";

export default (props) => {

  const {query} = props.location;


  const [dataList, setDataList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [total, setTotal] = useState(0);

  /**
   * 获取数据
   */
  const getDataList = () => {
    setLoading(true);
    let newPage = {pageSize: 5, current: Common.initValue(query.page, 1)}
    ArticleApi.getArticle(query.sonColumnId, query.columnId, '2', newPage).then(res => {
      if (res.code === 200) {
        setDataList(res.data);
        setTotal(res.recordsTotal);
        setLoading(false);
      } else {
        AppHelper.showRespError(res);
      }
    })
  };

  useEffect(() => {
    getDataList();
  }, [query]);


  return <Card bordered={false} loading={loading} className={less.article}>
    <div>

      {dataList.length == 0 ? <EmptyView style={{marginTop: 56}} description={'暂时还没有发布文章'}/> :
        dataList.map(item => {
          return <Flex
            key={item.id} className={less.item}
            onClick={() => openColumnDetail(item)}>
            <Flex><img alt={''} src={item.cover}/></Flex>
            <Flex itemGrow={1} style={{width: 0}} direction={"column"} justify={"space-around"}>
              <Ellipsis lines={2}>{item.name}</Ellipsis>
              <Ellipsis lines={2} className={less.summary}>{item.summary}</Ellipsis>
              <Flex className={less.date}>发布时间：{formatDate(item.publish_time, 'YYYY-MM-DD')}</Flex>
            </Flex>
          </Flex>
        })
      }

      {total != 0 && <Flex justify={"flex-end"} style={{marginTop: 24}}>
        <Pagination
          showQuickJumper pageSize={5} current={parseInt(Common.initValue(query.page, 1),10)}
          total={total}
          showTotal={(total, current) => {
            return "共 " + total + ' 条数据';
          }}
          onChange={(current, pageSize) => {
            AppHelper.routerPush('/column', {...query, page: current})
          }}
        />
      </Flex>}

    </div>
  </Card>
}
