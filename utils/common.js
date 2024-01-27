export function formatNum(num) {
  if (num >= 1000 && num < 10000) {
    return (num / 1000).toFixed(1) + 'k'
  } else if (num > 10000) {
    return (num / 10000).toFixed(1) + 'w'
  } else {
    return num
  }

}
export function formatTime(value, type = 0) {
  let time = new Date(value);
  let year = time.getFullYear();
  let month = time.getMonth() + 1;
  let date = time.getDate();
  let hour = time.getHours();
  let minute = time.getMinutes();
  let second = time.getSeconds();
  month = month < 10 ? "0" + month : month;
  date = date < 10 ? "0" + date : date;
  hour = hour < 10 ? "0" + hour : hour;
  minute = minute < 10 ? "0" + minute : minute;
  second = second < 10 ? "0" + second : second;
  let arr = [
    year + "-" + month + "-" + date,
    year + "-" + month + "-" + date + " " + hour + ":" + minute + ":" + second,
    year + "年" + month + "月" + date,
    year + "年" + month + "月" + date + " " + hour + ":" + minute + ":" + second,
    hour + ":" + minute + ":" + second,
    month + "-" + date,
    year + "/" + month + "/" + date + " " + hour + ":" + minute
  ]
  return arr[type];
}