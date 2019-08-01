//数组删除某一项
let arr = [{ id: 1, name: 'lili' }, { id: 2, name: 'lilei' }]
// 方法1  性能好些
arr.splice(1, 1) // this.arr.splice(1,1)
console.log(arr)
// 方法2  不操作原数据
let newarr = arr.filter(item => item.id != 1);
console.log(newarr)


// 数组添加
let arr3 = [
  { id: 1, name: 'lili' }
]
let xinren = [{ id: 3, name: '小张' }, { id: 4, name: '小明' }]
// 方法1
arr3.push(xinren)
// 方式2  es6  与concat效果一样
let newarr3 = [...arr3, ...xinren]
console.log(newarr3)
