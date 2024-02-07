// 返回具体类型
export function typeofD(obj) {
  const typeList = ['Array', 'Date', 'RegExp', 'Object', 'Error'];
  if (obj === null) return String(null);
  if (typeof obj === 'object') {
    for (let i = 0; i < typeList.length; i++) {
      const type = Object.prototype.toString.call(obj);
      if (type === `[object ${typeList[i]}]`) {
        return typeList[i].toLowerCase();
      }
    }
  }
  return typeof obj;
}
