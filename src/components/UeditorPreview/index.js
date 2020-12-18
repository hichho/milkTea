import React, {useEffect} from "react";
import less from './index.less';


const UeditorPrview = ({html}) => {

  useEffect(() => {
    window.uParse('#preview', {
      rootPath: './',
      chartContainerHeight: 500
    })
  }, [1]);

  return <div className={less.preview}>
    <div id={'preview'} dangerouslySetInnerHTML={{__html: html}}/>
  </div>

};


export default UeditorPrview;
