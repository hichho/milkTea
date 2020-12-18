import React, {useEffect, useState} from "react";
import Flex from "../components/Flex";
import less from './index.less';
import {Carousel, LocaleProvider, Input} from "antd";
import BannerApi from "@/https/apis/BannerApi";
import AppHelper from "@/utils/AppHelper";
import ColumnApi from "@/https/apis/ColumnApi";
import zh_CN from 'antd/es/locale-provider/zh_CN';
import {goSearch} from "@/pages/search";
import Redirect from "@/components/Redirect";

const {Search} = Input;

export default (props) => {
  const {pathname, query} = props.location;

  const [pageState, setPageStat] = useState(-1);
  const [banner, setBanner] = useState([]);
  const [columns, setColumns] = useState([]);
  const [config, setConfig] = useState({});//保存首页图片数据

  useEffect(() => {
    getConfig();
    getBannerList();
    getColumnList();
  }, [1]);


  /////////////////////////////////////////

  const getBannerList = () => {
    BannerApi.getAllBanner(0).then(res => {
      if (res.code === 200) {
        setBanner(res.data);
      } else {
        AppHelper.showRespError(res);
      }
    })
  };


  const getConfig = () => {
    ColumnApi.getConfig().then(res => {
      if (res.code === 200) {
        setPageStat(res.data.web_config_warning);
        setConfig(res.data)
        sessionStorage.setItem('config', JSON.stringify(res.data))
      } else {
        AppHelper.showRespError(res);
      }
    })
  }

  const getColumnList = () => {
    ColumnApi.getColumn(1).then(res => {
      if (res.code === 200) {
        setColumns(res.data);
      } else {
        AppHelper.showRespError(res);
      }
    })
  };


  if (pageState == -1) {
    // 页面初始化中
    return '';
  }

  if (pageState == 1) {
    // 网站维护中，跳转到维护页面
    return <Redirect/>
  }

  return <LocaleProvider locale={zh_CN}>
    <div>

      <Carousel autoplay className={less.carousel} effect={"fade"}>
        {banner.map(item => {
          return <img key={item.id} className={less.cover} alt={''} src={item.image}/>
        })}
      </Carousel>


      <Flex className={less.menu} justify={"center"} alignItems={"center"} wrap={"wrap"}>
        <Flex className={pathname == '/' ? less.menuItemSel : less.menuItem}
              onClick={() => AppHelper.routerPush('/')}>首页</Flex>

        {columns.map(item => {
          return <Flex
            key={item.id} className={query.columnId == item.id ? less.menuItemSel : less.menuItem}
            onClick={() => AppHelper.routerPush('/column', {columnId: item.id})}
          >{item.name}</Flex>
        })}
        <Flex className={pathname == '/about-us' ? less.menuItemSel : less.menuItem}
              onClick={() => AppHelper.routerPush('/about-us')}>关于我们</Flex>

        <Search defaultValue={props.location.query.searchValue} style={{width: 200, margin: 8}} bordered={false}
                enterButton onSearch={(value) => goSearch(value)}/>

      </Flex>


      <div style={{minHeight: '80vh'}}>{props.children}</div>


      <Flex className={less.footer} alignItems={"center"} justify={"center"} wrap={"wrap"}>

        <Flex style={{margin: 24}}>
          <Flex><img className={less.logo} src={'./home/logo.png'} alt={''}/></Flex>
          <Flex direction={"column"} justify={"center"} style={{marginLeft: 24}}>
            <Flex style={{fontSize: 33, marginTop: 12}}>国民健康护理网</Flex>
            <Flex style={{marginTop: 12}}>NATIONAL HEALTH CARE NETWORK</Flex>
          </Flex>
        </Flex>

        <Flex direction={"column"} style={{margin: 16}}>
          <Flex>{config.web_config_bottom_1}</Flex>
          <Flex>{config.web_config_bottom_2}</Flex>
          <Flex>{config.web_config_bottom_3}</Flex>
          <Flex>{config.web_config_bottom_4}</Flex>
        </Flex>
      </Flex>


      <Flex
        style={{width: '100%', padding: '5px 0', bottom: 0, zIndex: 10, backgroundColor: '#084888', color: '#939393'}}
        justify={"center"} alignItems={"center"}>
        <a target={"_blank"} href={"http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=11010602060212"}
           style={{height: 20, lineHeight: '20px', color: '#939393'}}>
          <img src={'./home/police.jpg'} style={{width: 16, height: 16, zIndex: 10, marginRight: 5, marginTop: -3}}/>
          京公网安备
          11010602060212号
        </a>
      </Flex>

    </div>
  </LocaleProvider>

}
