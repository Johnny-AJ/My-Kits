// 封装常用JS代码
var kits = {};
// 随机整数的方法
kits.randonInt = function () {
  return Math.floor(Math.random() * (m - n + 1) + n);
}



// 获取的当前时间
let kits = {};
kits.formateDate = function () {
  let date = new Date();
  let y = date.getFullYear();
  let M = date.getMonth() + 1;
  let d = date.getDate();
  let h = date.getHours();
  let m = date.getMinutes();
  let s = date.getSeconds();
  M = M < 10 ? '0' + M : M;
  d = d < 10 ? '0' + d : d;
  h = h < 10 ? '0' + h : h;
  m = m < 10 ? '0' + m : m;
  s = s < 10 ? '0' + s : s;
  return y + '-' + M + '-' + d + ' ' + h + ':' + m + ':' + s;
}



// 封装一个生成随机ID的方法
kits.primarykey = function () {
  // 通过时间戳+大范围随机生成的ID
  let now = Date.now();
  // 防止在1毫秒之间生成多个ID
  let r = kits.randonInt(10000000, 999999);
  // 两个得到的结果加在一起
  return now + '' + r;
}


