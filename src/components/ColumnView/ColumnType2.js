import React, {useEffect, useState} from "react";
import Flex from "@/components/Flex";
import less from './index.less';
import ColumnApi from "@/https/apis/ColumnApi";
import AppHelper from "@/utils/AppHelper";
import {formatDate} from "@/components/DateView";
import {Card} from "antd";
import Common from "@/utils/Common";
import {openColumnDetail} from "@/pages/column-detail";
import EmptyView from "@/components/EmptyView";
import Ellipsis from "@/components/Ellipsis";


function saveToLocal(type, obj) {
  sessionStorage.setItem('ColumnType2_' + type, JSON.stringify(obj));
}

function getFormLocal(type) {
  let res = sessionStorage.getItem('ColumnType2_' + type);
  return Common.parseJSON(res, {articles: [], sonColumns: [], id: ''})
}


export default ({type}) => {
  //数据数组
  const [data, setdata] = useState(getFormLocal(type));

  const [sonColumnId, setSonid] = useState('');

  const [loading, setLoading] = useState(false);


  const getColumnData = (type, sonColumnId) => {
    setLoading(true)
    ColumnApi.getItemContent({position: type, sonColumnId}).then(res => {
      if (res.code === 200) {
        setdata(res.data);
        saveToLocal(type, res.data)
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

    return <Flex alignItems={"center"}>
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


  if (Common.isEmpty(data.id)) {
    return ''
  }
  return <Flex direction={"column"} className={less.type2}>
    <Flex className={less.title} justify={"space-between"} alignItems={"center"}>
      <Flex alignItems={"center"} itemGrow={1} style={{width: 0}}>
        <Flex alignItems={"center"} style={{cursor: 'pointer', fontSize: 16, margin: '0 8px'}}
              onClick={() => setSonid('')}>
          {data.name}
        </Flex>
        <Flex itemGrow={1} style={{width: 0, overflow: 'hidden', marginRight: 12}} alignItems={"center"}>
          {renderSon(data)}
        </Flex>
        <Flex alignItems={"center"} style={{cursor: 'pointer', fontSize: 13}} onClick={() => {
          AppHelper.routerPush('/column', {columnId: data.id, sonColumnId})
        }}>
          更多>>
        </Flex>
      </Flex>


      {/*{renderRightTitle(data)}*/}

      {/*{!Common.isEmpty(data.cover) &&*/}
      {/*<Flex className={less.rightTitle} alignItems={"center"} justify={"center"} style={{width: 180}}>*/}
      {/*  培训机构*/}
      {/*</Flex>}*/}


    </Flex>

    {/*上部/下部*/}
    <Flex alignItems={"center"} justify={"space-between"} style={{width: '100%'}}>
      <Flex itemGrow={1} style={{width: 0}}>
        <Card loading={loading} className={less.content}>
          {data.articles.length > 0 ?
            data.articles.map((item, index) => {
              return <Flex
                key={index} alignItems={"center"} className={less.item}
                onClick={() => openColumnDetail(item)}>
                <Flex className={'bot'}/>
                <Flex itemGrow={1} style={{width: 0, margin: '0 24px 0 4px'}} className={less.newstitle}>
                  <Ellipsis lines={1}>{item.name}</Ellipsis>
                </Flex>
                <Flex className={less.date} justify={"center"} alignItems={"center"}>
                  {formatDate(item.publish_time, 'YYYY-MM-DD')}
                </Flex>
              </Flex>
            })
            :
            <EmptyView style={{marginTop: 32, color: '#999999'}} description={'暂时还没有发布文章'}/>
          }
        </Card>
      </Flex>

      {/*{renderRightBody(data)}*/}
      {!Common.isEmpty(data.cover) &&
      <Flex className={less.rightBody} style={{width: 180, height: "180px", padding: '24px', backgroundColor: 'white'}}
            justify={"center"}
            alignItems={"center"}>
        <img src={data.cover}
             style={{width: '100%', height: '100%', cursor: 'pointer'}} onClick={() => {
          window.open(data.url);
        }}/>
      </Flex>
      }
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
