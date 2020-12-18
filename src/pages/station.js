import React, {useEffect, useState} from 'react';
import Flex from "@/components/Flex";
import AppHelper from "@/utils/AppHelper";
import {Breadcrumb, Card, Pagination} from "antd";
import less from './column-detail.less';
import LinkApi from "@/https/apis/LinkApi";
import {JumptoInfo} from "@/pages/info";
import Common from "@/utils/Common";
import EmptyView from "@/components/EmptyView";


const Type = {
  '1': "专家工作室",
  '2': "城市工作站",
  '3': "合作共建单位",
}

export default (props) => {
  const {location} = props;

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [total, setTotal] = useState(0);


  /**
   * 获取详情
   */
  const getColumnData = (type) => {
    setLoading(true);
    let newPage = {pageSize: 10, current: Common.initValue(location.query.page, 1)}
    LinkApi.getLink(type, newPage).then(res => {
      if (res.code === 200) {
        setTotal(res.recordsTotal);
        setLoading(false);
        setData(res.data)
      } else {
        AppHelper.showRespError(res);
      }
    })
  };

  useEffect(() => {
    getColumnData(location.query.type);
  }, [location.query]);


  return <Card bordered={false} className={less.expert}>
    <Flex direction={"column"}>
      <Breadcrumb separator=">">
        <Breadcrumb.Item href={'/'}>首页</Breadcrumb.Item>
        <Breadcrumb.Item>{Type[location.query.type]}</Breadcrumb.Item>
      </Breadcrumb>

      <Flex className={less.content} wrap={"wrap"}>
        {data.length == 0 ? <EmptyView style={{marginTop: 56}} description={'暂时还没有发布文章'}/> :
          data.map((item, index) => {
            return <Flex style={{padding: 8, cursor: 'pointer'}} key={index} onClick={() => JumptoInfo(item)}>
              {item.title}
            </Flex>
          })}
      </Flex>

      {total != 0 && <Flex justify={"flex-end"} style={{marginTop: 24}}>
        <Pagination
          showQuickJumper pageSize={10} current={parseInt(Common.initValue(location.query.page, 1), 10)}
          total={total}
          showTotal={(total, current) => {
            return "共 " + total + ' 条数据';
          }}
          onChange={(current, pageSize) => {
            AppHelper.routerPush('/station', {...location.query, page: current})
          }}
        />
      </Flex>}


    </Flex>
  </Card>;
}
