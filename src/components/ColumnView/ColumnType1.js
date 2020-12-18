import Flex from "@/components/Flex";
import React, {useEffect, useState} from "react";
import less from './index.less';
import AppHelper from "@/utils/AppHelper";
import ColumnApi from "@/https/apis/ColumnApi";
import {formatDate} from "@/components/DateView";
import {openColumnDetail} from "@/pages/column-detail";
import Ellipsis from "@/components/Ellipsis";
import Common from "@/utils/Common";
import {Card} from "antd";
import EmptyView from "@/components/EmptyView";


function saveToLocal(type, obj) {
  sessionStorage.setItem('ColumnType_' + type, JSON.stringify(obj));
}

function getFormLocal(type) {
  let res = sessionStorage.getItem('ColumnType_' + type);
  return Common.parseJSON(res, {articles: [], sonColumns: [], id: ''})
}

export default ({type, itemValue}) => {

  const [data, setData] = useState(getFormLocal(type));
  const [sonColumnId, setSonid] = useState('');
  const [loading, setLoading] = useState(false);



  const getColumnData = (type, sonColumnId) => {
    setLoading(true)
    ColumnApi.getItemContent({position: type, sonColumnId}).then(res => {
      if (res.code === 200) {
        setData(res.data);
        saveToLocal(type, res.data);
        setLoading(false);
      } else {
        AppHelper.showRespError(res);
      }
    })
  };



  const renderSon = (data) => {
    function setCss(value) {
      if (value == sonColumnId) {
        return {color: 'red', padding: '0 12px', fontSize: 13, cursor: 'pointer'}
      } else {
        return {padding: '0 12px', fontSize: 13, cursor: 'pointer'};
      }
    }
    return <Flex alignItems={"center"} style={{fontSize:14}}>
      {data.sonColumns.map((item, index) => {
        return <Flex style={setCss(item.id)} key={index} onClick={() => {
          if (item.is_link == '1') {
            window.open(item.url)
          } else {
            setSonid(item.id)
          }
        }} alignItems={"center"}>
          {item.name}
        </Flex>
      })}
    </Flex>
  }


  useEffect(() => {
    getColumnData(type, sonColumnId);
  }, [type, sonColumnId]);

  return <Flex direction={"column"} className={less.type1} itemGrow={itemValue}>
    <Flex className={less.title} justify={"space-between"}>
      <Flex style={{cursor:'pointer',fontSize:16,marginRight:8}} alignItems={"center"} onClick={() => setSonid('')}>
        {data.name}
      </Flex>

      <Flex itemGrow={1} style={{width: 0, overflow: 'hidden', marginRight: 12}} alignItems={"center"}>
        {renderSon(data)}
      </Flex>

      <Flex className={less.more} style={{fontSize: 13,cursor:'pointer'}} onClick={() => {
        AppHelper.routerPush('/column', {columnId: data.id,sonColumnId})
      }}>
        更多>>
      </Flex>
    </Flex>
    <Flex direction={"column"}>
      <Card loading={loading} className={less.content}>
      {data.articles.length>0?  data.articles.map((item, index) => {
        return <Flex
          key={index} alignItems={"center"} className={less.item}
          onClick={() => {
            openColumnDetail(item);
          }}
        >
          <Flex className={'bot'}/>
          <Flex itemGrow={1} style={{width: 0, margin: '0 24px 0 4px'}} className={less.newstitle}>
            <Ellipsis lines={1}>{item.name}</Ellipsis>
          </Flex>
          <Flex className={less.date} justify={"center"} alignItems={"center"}>
            {formatDate(item.publish_time, 'YYYY-MM-DD')}
          </Flex>
        </Flex>
      }):
        <EmptyView style={{marginTop: 32, color: '#999999'}} description={'暂时还没有发布文章'}/>
      }
      </Card>
    </Flex>



    {
      data.remarkShow =='1'&&
      <Flex className={less.bottom} justify={"flex-end"}>
        <Ellipsis lines={1} style={{textAlign:'right'}}>
          {data.remark}
        </Ellipsis>
      </Flex>
    }

  </Flex>
}
