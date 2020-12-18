import React from "react";
import moment from "moment";
import Common from "@/utils/Common";

/**
 * 格式化时间
 * @param seconds
 * @param format
 * @param def
 */
export function formatDate(seconds, format = 'YYYY-MM-DD HH:mm:ss', def) {
  let moments = getMoment(seconds);
  if (Common.isEmpty(moments) || def) {
    return def;
  } else {
    return moments.format(format);
  }
}


/**
 * 当时间戳转为moment
 * @param seconds
 */
export function getMoment(seconds) {
  if (Common.isEmpty(seconds) || seconds == '0') {
    return undefined;
  }
  return moment(seconds * 1000);
}

/**
 * 将date转为seconds
 * @param date
 * @returns {number}
 */
export function dateToSeconds(date) {
  return parseInt((date.getTime() / 1000) + '', 10);
}


const Index = (props) => {
  const {seconds, format, split} = props;
  if (seconds == '0') {
    return <span>无</span>
  }
  let dateStr = formatDate(seconds, format);
  if (split) {
    let dateStrs = dateStr.split(' ');
    if (dateStrs.length > 1) {
      return <span>{dateStrs[0]}<br/>{dateStrs[1]}</span>;
    }
  }
  return <span>{dateStr}</span>;
};

const DateView = ({seconds, format = 'YYYY-MM-DD HH:mm:ss', split = true}) => {
  return <Index seconds={seconds} format={format} split={split}/>
};

export default DateView;

