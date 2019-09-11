/**
 * 转换时间格式
 * @param {timestamp} date 时间戳
 */
function timetrans(date) {
  var date = new Date(date); //如果date为13位不需要乘1000
  var Y = date.getFullYear() + "-";
  var M =
    (date.getMonth() + 1 < 10
      ? "0" + (date.getMonth() + 1)
      : date.getMonth() + 1) + "-";
  var D = (date.getDate() < 10 ? "0" + date.getDate() : date.getDate()) + " ";
  var h =
    (date.getHours() < 10 ? "0" + date.getHours() : date.getHours()) + ":";
  var m =
    (date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes()) +
    ":";
  var s = date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();
  return Y + M + D + h + m + s;
}

/**
 * 忽略img设置了固定高度
 * @param {string} str 要处理的字符串
 */
function imgRemoveHeight(str) {
  let res = str;
  res = res.replace(/height="/g, 'ignore="')
  return res;
}

/**
 * 处理promise对象
 * @param {Promise} promise 
 */
function to(promise) {
  return promise.then(res => [null, res]).catch(err => [err, null])
}


//字符串转base64
function encode(str) {
  // 对字符串进行编码
  var encode = encodeURI(str);
  // 对编码的字符串转化base64
  var base64 = btoa(encode);
  return base64;
}

// base64转字符串
function decode(base64) {
  // 对base64转编码
  var decode = atob(base64);
  // 编码转字符串
  var str = decodeURI(decode);
  return str;
}

module.exports = {
  timetrans, imgRemoveHeight, to, decode, encode
}