import React from "react";
import Flex from "@/components/Flex";

const EmptyView = ({description = '暂无数据', style}) => {

  return <Flex direction={"column"} justify={"center"} style={style} alignItems={"center"}>
    <img style={{width: 64, height: 64, objectFit: 'contain'}} alt={''} src={'./home/icon_empty.png'}/>
    <Flex>{description}</Flex>
  </Flex>
};


export default EmptyView;
