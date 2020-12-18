import React from "react";
import styles from './index.less';

export default class Flex extends React.PureComponent {

  render() {
    const {
      direction, wrap, justify, alignItems,
      itemOrder, itemSelf, itemGrow, onClick,
      className, style = {}, average
    } = this.props;
    let newStyle = {};
    if (direction) {
      newStyle['flexDirection'] = direction;
      newStyle['WebkitFlexDirection'] = direction;
    }
    if (wrap) {
      newStyle['flexWrap'] = wrap;
      newStyle['WebkitFlexWrap'] = wrap;
    }
    if (justify) {
      newStyle['justifyContent'] = justify;
      newStyle['WebkitJustifyContent'] = justify;
    }
    if (alignItems) {
      newStyle['alignItems'] = alignItems;
      newStyle['WebkitAlignItems'] = alignItems;
    }
    if (itemSelf) {
      newStyle['alignSelf'] = itemSelf;
      newStyle['WebkitAlignSelf'] = itemSelf;
    }
    if (itemOrder) {
      newStyle['order'] = itemOrder;
    }
    newStyle['flexGrow'] = itemGrow || 0;
    newStyle['WebkitFlexGrow'] = itemGrow || 0;
    newStyle['flexShrink'] = 0;
    newStyle['WebkitFlexShrink'] = 0;
    if (average) {
      newStyle['width'] = 0;
    }

    let newClazzName = styles.flex;
    if (className) {
      newClazzName = className + ' ' + styles.flex;
    }
    return <div
      className={newClazzName} style={{...newStyle, ...style}} onClick={onClick}
    >{this.props.children}</div>
  }

}





