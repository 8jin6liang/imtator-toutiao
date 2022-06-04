// 增加本地存储
const setItem = (key, value) => {
  // 如果要存储的值是对象或数组，先做处理再进行存储
  if (typeof value === 'object') {
    value = JSON.stringify(value)
  }
  window.localStorage.setItem(key, value)
}
// 读取本地存储
const getItem = (key) => {
  const con = window.localStorage.getItem(key)
  // 如果可以使用JSON.parse进行处理，证明是JSON格式字符串，反之也不需要处理，直接返回即可
  try {
    return JSON.parse(con)
  } catch (error) {
    return con
  }
}
// 删除本地存储
const removeItem = (key) => {
  window.localStorage.removeItem(key)
}

export {
  setItem, getItem, removeItem
}
