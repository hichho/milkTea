import React from 'react';
import styles from './index.less';
import Flex from "@/components/Flex";
import CarouselinBody from '@/components/CarouselinBody';
import Body1 from '@/components/Body1';


export default () => {


  return <Flex direction={"column"} className={styles.index} alignItems={"center"}>
      <CarouselinBody/>

      <Body1/>


  </Flex>;
}
