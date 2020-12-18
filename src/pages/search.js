import React, {useEffect, useState} from 'react';
import Flex from "@/components/Flex";
import AppHelper from "@/utils/AppHelper";
import {Card, Pagination} from "antd";
import less from './search.less';
import BaseApi from "@/https/apis/BaseApi";
import EmptyView from "@/components/EmptyView";
import {openColumnDetail} from "@/pages/column-detail";
import Ellipsis from "@/components/Ellipsis";
import {formatDate} from "@/components/DateView";

/**
 * 打开文章详情
 * @param item
 */
export function goSearch(value) {
  AppHelper.routerPush('/search', {
    searchValue: value
  });
}

export default (props) => {
  const {location} = props;

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const [page, setPage] = useState({
    pageSize: 10,
    current: 1,
    total: 0
  });

  page.onChange = (current, pageSize) => {
    page.current = current;
    page.pageSize = pageSize;
    setPage({...page});
  };

  /**
   * 获取详情
   */
  const getSearchResult = (value) => {
    setLoading(true)
    BaseApi.getSearchResult(value, page).then(res => {
      if (res.code === 200) {
        setData(res.data);
        page.total = res.recordsTotal;
        setPage({...page});
        setLoading(false)
      } else {
        AppHelper.showRespError(res);
      }
    })
  };

  useEffect(() => {
    getSearchResult(location.query.searchValue);
  }, [location.query.searchValue,  page.current, page.pageSize]);

  return <Card bordered={false} loading={loading}>

    <Flex justify={"center"} alignItems={"center"} style={{width: '100%', marginTop: 12, color: "#808080"}}>
      <Flex>搜索关键字:{props.location.query.searchValue}</Flex>
    </Flex>

    <Flex direction={"column"} className={less.article}>
      {data.length == 0
        ?
        <Flex style={{width: '100vw', height: "100vh"}} justify={"center"} alignItems={"center"}>
          <EmptyView style={{marginTop: 56}} description={'未查找到相关内容，请更换关键字重试'}/>
        </Flex>
        : <Flex direction={"column"}>
          {data.map(item => {
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
          })}


        </Flex>
      }
      {page.total != 0 && <Flex justify={"flex-end"} style={{marginTop: 24}}>
        <Pagination
          showQuickJumper pageSize={page.pageSize} current={page.current}
          total={page.total} pageSizeOptions={['5', '10', '20']}
          showTotal={(total, current) => {
            return "共 " + total + ' 条数据';
          }}
          onChange={(current, pageSize) => {
            setPage({...page, current, pageSize})
          }}
        />
      </Flex>}


    </Flex>
  </Card>;
}
