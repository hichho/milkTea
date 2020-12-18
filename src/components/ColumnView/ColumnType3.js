import React, {useEffect, useState} from "react";
import Flex from "@/components/Flex";
import less from './index.less';
import Common from "@/utils/Common";
import LinkApi from "@/https/apis/LinkApi";
import AppHelper from "@/utils/AppHelper";
import {JumptoInfo} from "@/pages/info";


function saveToLocal(type, obj) {
    sessionStorage.setItem('ColumnType3_' + type, JSON.stringify(obj));
}

function getFormLocal(type) {
    let res = sessionStorage.getItem('ColumnType3_' + type);
    return Common.parseJSON(res, [])
}


export default ({title, type, style = {}}) => {

    //数据数组
    const [data, setData] = useState(getFormLocal(type));


//获取data:模块，链接
    const getColumnData = (type) => {
        let pagination = {pageSize: 10, current: 1};
        LinkApi.getLink(type, pagination).then(res => {
            if (res.code === 200) {
                saveToLocal(type, res.data);
                setData(res.data)
            } else {
                AppHelper.showRespError(res);
            }
        })
    };


    const setGrow = () => {
        if (type == '3') {
            return 3;
        } else {
            return 1;
        }
    }

    useEffect(() => {
        getColumnData(type);
    }, [1]);

    return <Flex direction={"column"} className={less.type3} style={style} itemGrow={setGrow()}>

        <Flex className={less.title} style={{width: "100%"}} justify={"space-between"} alignItems={"center"}>
            <Flex style={{margin: '0 8px'}}>{title}</Flex>
            <Flex style={{fontSize: 13, cursor: 'pointer'}}
                  onClick={() => AppHelper.routerPush('/station', {type, page: 1})}>
                更多>>
            </Flex>
        </Flex>


        <Flex className={less.content} wrap={"wrap"} justify={"flex-start"}>
            {data.map((item, index) => {
                let width = 100 / data.length + '%';
                return <Flex className={less.itemheadline} key={index} onClick={() => JumptoInfo(item)}
                             style={{minWidth: width}}>
                    {item.title}
                </Flex>
            })}
        </Flex>
    </Flex>
}
