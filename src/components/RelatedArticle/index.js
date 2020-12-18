import React, {useEffect, useState} from "react";
import ArticleApi from "@/https/apis/ArticleApi";
import Flex from "@/components/Flex";
import less from './index.less';
import {openColumnDetail} from "@/pages/column-detail";
import Ellipsis from "@/components/Ellipsis";


const RelatedArticle = ({columnId,aId}) => {

  const [dataList, setDataList] = useState([]);

  const getRelatedList = () => {
    ArticleApi.getOtherArticle({columnId,aId}).then(res => {
      if (res.code === 200) {
        setDataList(res.data);
      }
    })
  };

  useEffect(() => {
    getRelatedList();
  }, [columnId,aId]);

  return dataList.length == 0 ? '' : <div className={less.card}>
    <Flex className={less.title}>相关文章</Flex>

    <Flex wrap={"wrap"} justify={"center"}>
      {dataList.map(item => {
        return <Flex
          className={less.item} direction={"column"} key={item.id}
          justify={"center"} alignItems={"center"}
          onClick={() => openColumnDetail(item)}
        >
          <img alt={''} src={item.cover}/>
          <Flex style={{width: '12vw'}}>
            <Ellipsis lines={2}>{item.name}</Ellipsis>
          </Flex>
        </Flex>
      })}
    </Flex>

  </div>

};


export default RelatedArticle;
