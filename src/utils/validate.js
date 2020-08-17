/**
 * 
 * @param {string} path 判断字符串是否是https?:|mailto:|tel: 开头的
 * @returns {Boolean}
 * test()用于检测一个字符串是否匹配某个模式。如果字符串中有匹配的值返回true，否则返回false
 */
export function isExternal(path){
  return /^(https?:|mailto:|tel:)/.test(path)
}


/**
 * @param {string} str 检验字符串是否是admin editor
 * @returns {Boolean}
 */
export function validUsername(str){
    const valid_map = ['admin','editor'];
    return valid_map.indexOf(str.trim())>=0
}