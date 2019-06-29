// 封装常用JS代码
var kits = {};
// 随机整数的方法
kits.randonInt = function () {
    return Math.floor(Math.random() * (m - n + 1) + n);
}