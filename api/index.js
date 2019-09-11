const fetch = require("isomorphic-unfetch")
const { to } = require('../utils')
const { apiPrefix } = require('_config')
const apiObjects = require('./apis')
const initHeaders = {}

/**
 * 
 * @param {string} url 请求地址
 * @param {object} options 请求的参数和头部
 */
const http = (url, options = {}) => {
  return new Promise((resolve, reject) => {
    fetch(url, { ...options, headers: { ...options.headers, ...initHeaders } })
      .then(res => res.json())
      .then(res => resolve(res))
      .catch(err => reject(err))
  })
}

//生成api方法
const genApis = params => {
  let url = apiPrefix + params;
  let method = "GET"

  const paramsArray = params.split(' ');
  if (paramsArray.length === 2) {
    method = paramsArray[0]
    url = apiPrefix + paramsArray[1]
  }

  return function (options) {
    return to(http(url, { ...options, method }))
  }
}


let APIFunction = {}
for (const key in apiObjects) {
  APIFunction[key] = genApis(apiObjects[key])
}

module.exports = APIFunction