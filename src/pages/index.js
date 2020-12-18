import React from 'react';
import styles from './index.less';
import Flex from "@/components/Flex";
import ColumnType1 from "@/components/ColumnView/ColumnType1";
import ColumnType2 from "@/components/ColumnView/ColumnType2";
import ColumnType3 from "@/components/ColumnView/ColumnType3";
import AboutWebInfo from "@/components/AboutWebInfo";
import OtherWeb from "@/components/OtherWeb";
import OtherModule from "@/components/OtherModule";
import Activity from "@/components/Activity";
import Common from "@/utils/Common";


export default () => {

  let config = Common.parseJSON(sessionStorage.getItem('config'), {
    web_config_education_img: '',
    web_config_nurse_img: '',
    web_config_activity_img: '',
  })


  return <Flex direction={"column"} style={{marginTop: 4}} className={styles.index} alignItems={"center"}>

    <Flex justify={"center"}>
      <Flex style={{width: 'calc(80vw + 8px)'}} wrap={"wrap"}>
        <AboutWebInfo/>
        <ColumnType1 itemValue={1} type={1}/>
        <ColumnType1 itemValue={1} type={2}/>
      </Flex>
    </Flex>


    {!Common.isEmpty(config.web_config_education_img) &&
    <img className={styles.splitImg} alt={''} src={config.web_config_education_img}/>
    }


    <Flex justify={"center"}>
      <Flex style={{width: 'calc(80vw + 8px)'}} wrap={"wrap"}>
        <ColumnType2 type={3}/>
        <ColumnType2 type={4}/>
        <ColumnType2 type={5}/>
        <ColumnType2 type={6}/>
      </Flex>
    </Flex>


    {!Common.isEmpty(config.web_config_nurse_img) &&
    <img className={styles.splitImg} alt={''} src={config.web_config_nurse_img}/>
    }

    <Flex justify={"center"}>
      <Flex style={{width: 'calc(80vw + 8px)'}} wrap={"wrap"}>
        <ColumnType2 type={7}/>
        <ColumnType2 type={8}/>
        <ColumnType2 type={9}/>
        <ColumnType2 type={10}/>
      </Flex>
    </Flex>


    <Flex justify={"center"}>
      <Flex style={{width: 'calc(80vw + 8px)'}} wrap={"wrap"}>
        <ColumnType3 title={'专家工作室'} type={'1'}/>
        <ColumnType3 title={'城市工作站'} type={'2'}/>
      </Flex>
    </Flex>


    <Flex justify={"center"} style={{width: 'calc(80vw + 8px)'}}>
      <ColumnType3 title={'合作共建单位'} type={'3'} style={{width: 0, margin: 2}}/>
    </Flex>


    {!Common.isEmpty(config.web_config_activity_img) &&
    <img className={styles.splitImg} alt={''} src={config.web_config_activity_img} style={{marginTop: 4}}/>
    }
    {/*banner*/}

    <Flex className={styles.bluebot}>活动项目</Flex>
    <Activity/>


    {/*相关链接*/}
    <Flex className={styles.bluebot}>相关链接</Flex>
    <OtherWeb/>

    {/*站务管理*/}
    <Flex className={styles.bluebot}>站务管理</Flex>
    <OtherModule/>

  </Flex>;
}
