import React, {useEffect, useState} from "react";
import Flex from "@/components/Flex";
import {Card} from "antd";
import less from './_layout.less';
import ColumnApi from "@/https/apis/ColumnApi";
import AppHelper from "@/utils/AppHelper";


export default (props) => {

  const {query} = props.location;

  const [columns, setColumns] = useState([]);
  const [loading, setLoading] = useState(true);

  const getColumnList = () => {
    ColumnApi.getAllColumn("0").then(res => {
      if (res.code == 200) {
        setColumns(res.data);
        setLoading(false);
      } else {
        AppHelper.showRespError(res);
      }
    })
  };

  useEffect(() => {
    getColumnList();
  }, []);

  return <Card bordered={false} className={less.column} loading={loading}>
    <Flex>
      <Flex className={less.left} direction={"column"}>

        <Flex justify={"center"} className={less.home} onClick={() => AppHelper.routerPush('/')}>首页</Flex>
        <Flex><img className={less.homeDivider} src={'./home/home_divider.jpg'} alt={''}/></Flex>

        {columns.map(group => {
          let isGroupSel = query.columnId == group.id;
          return <Flex
            key={group.id} className={less.groupItem} direction={"column"}
            onClick={e => {
              e.stopPropagation();
              AppHelper.routerPush('/column', {columnId: group.id});
            }}
          >
            <Flex
              alignItems={"center"} justify={"center"}
              className={isGroupSel ? less.itemHeaderSel : less.itemHeader}
            >
              {group.sonColumn.length > 0 &&
              <img alt={''} src={'./home/icon_arrow.png'}
                   className={isGroupSel ? less.itemGroupIconSel : less.itemGroupIcon}/>
              }
              <Flex>{group.name}</Flex>
            </Flex>

            {group.sonColumn.length > 0 && <div
              className={isGroupSel ? less.apiShow : less.apiHide}
            >
              {group.sonColumn.map(api => {
                let isApiSel = (query.sonColumnId == api.id);
                return <Flex
                  key={api.id} className={isApiSel ? less.apiItemSel : less.apiItem} justify={"center"}
                  onClick={e => {
                    e.stopPropagation();
                    AppHelper.routerPush('/column', {...query, sonColumnId: api.id});
                  }}
                >
                  <Flex>{api.name}</Flex>
                </Flex>
              })}
            </div>}

          </Flex>
        })}
      </Flex>

      <Flex itemGrow={1} style={{width: 0}}>{props.children}</Flex>

    </Flex>
  </Card>

}
