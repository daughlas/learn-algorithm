// 数组去重
let ary = [12, 23, 12, 15, 25, 23, 25, 14, 16];

/* 方案1 SET */ 
// let arr = [...new Set(ary)]
// let arr = Array.from(new Set(ary))


/* 方案2 拿出当前项和后面的内容进行比较 */
// 用当前项和后面的项去比较
// 双重 for 循环
/* 方案2.1 */ 
// for (let i = 0; i< ary.length - 1; i++) {
//   let item = ary[i]
//   let left  = ary.slice(i+1)
//   if (left.indexOf(item) >= 0) {
//     // splice 删除的问题：
//     // 1. 数组塌陷
//     // 2. 性能不好
//     ary.splice(i, 1)
//     i--
//   }
// }

/* 方案2.2 */
// 每一个新数组都是一个堆
// let arr = []
// for (let i = 0; i<= ary.length - 1; i++) {
//   let item = ary[i]
//   let left  = ary.slice(i+1)
//   if (left.indexOf(item) === -1) {
//     arr.push(item)
//   }
// }

/* 方案2.3 */
// 赋值为 null 再 filter 一下
// for (let i = 0; i< ary.length - 1; i++) {
//   let item = ary[i]
//   let left  = ary.slice(i+1)
//   if (left.indexOf(item) >= 0) {
//     ary[i] = null
//   }
// }
// let arr = ary
// arr = ary.filter(item => item !== null)

/* 方案2.4 */
// 用最后一项替换
// for (let i = 0; i< ary.length - 1; i++) {
//   let item = ary[i]
//   let left  = ary.slice(i+1)
//   if (left.indexOf(item) >= 0) {
//     ary[i] = ary[ary.length - 1]
//     ary.length
//     i--
//   }
// }
// let arr = ary

/* 方案3 */
// 创建空容器，拿出一项，放到空容器中，之前看看还有没有
/* 方案3.1 对象键值对 */
// let obj = {}
// for (let i = 0; i < ary.length; i++) {
//   let item = ary[i]
//   if(typeof obj[item] !== 'undefined') {
//     ary[i] = ary[ary.length - 1]
//     ary.length--
//     i--
//     continue
//   }
//   obj[ary[i]] = ary[i]
// }
// obj = null
// let arr = ary

/* 方案3.2 数组 */
// let arr = []
// for (let i = 0; i < ary.length; i++) {
//   let item = ary[i]
//   if (arr.indexOf(item) === -1) {
//     arr.push(item)
//   }
// }

/* 方案4 先排序，相邻项比较，给予正则 */ 

/* 方案 */ 
/* 方案 */ 
/* 方案 */ 
/* 方案 */ 
/* 方案 */ 
/* 方案 */ 
/* 方案 */ 
/* 方案 */ 
/* 方案 */ 

console.log(arr)