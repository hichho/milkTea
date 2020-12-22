import React, { useEffect, useState } from 'react';
import { LocaleProvider } from 'antd';
import zh_CN from 'antd/es/locale-provider/zh_CN';
import Header from '@/components/Header';
import Foot from '@/components/Foot';

export default props => {
  const { pathname, query } = props.location;

  return (
    <LocaleProvider locale={zh_CN}>
      <div>
        <Header />
        <div style={{ minHeight: '80vh', width: '100%' }}>{props.children}</div>
        {/*/footer*/}

        {/*<Foot />*/}
      </div>
    </LocaleProvider>
  );
};
