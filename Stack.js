/*
 * @Author: Tiga 526380248@qq.com
 * @Date: 2023-10-27 10:11:06
 * @LastEditors: Tiga 526380248@qq.com
 * @LastEditTime: 2023-10-30 11:16:39
 * @FilePath: /DSAA/Stack.js
 * @Description: 实现栈结构
 */

/**
 * 栈特点：
 * 1、是一种受限的线性结构
 * 2、遵循 “先入后出”的特点
 * 3、栈常用的操作：
 *   - push(element) ：添加一个新元素到栈顶位置。
 *   - pop() : 移除栈顶的元素，同时返回被移除的元素。
 *   - peek() : 返回栈顶的元素，不对栈做任何修改，仅仅是返回它。
 *   - isEmpty() : 如果栈里没有任何元素，返回true，否则返回false。
 *   - size() : 返回栈顶的元素个数。这个方法就跟数组的length属性很相似。
 *   - toString() : 将栈结构的内容以字符的形式返回。
 */


function Stack() {

  this.items = [];

  Stack.prototype.push = function (element) {
    this.items.push(element);
  }

  Stack.prototype.pop = function () {
    return this.items.pop();
  }

  Stack.prototype.peek = function () {
    return this.items[this.items.length - 1];
  }

  Stack.prototype.isEmpty = function () {
    return this.items.length === 0;
  }

  Stack.prototype.size = function () {
    return this.items.length;
  }

  Stack.prototype.toString = function () {
    // es6实现
    // return this.items.join(" ");
    // es5实现
    let result = "";
    for (let i = 0; i < this.items.length; i++) {
      result += this.items[i] + " ";
    }
    return result;
  }
}


// const s = new Stack();
//
// s.push("1");
// s.push("b");
//
// console.log(s);
//
// s.pop();
// s.push("c");
// s.push("2");
//
// console.log(s);
//
// console.log(s.peek());
// console.log(s.isEmpty());
// console.log(s.size());
//
// console.log(s.toString());


// 利用栈存储十进制转二进制的过程
function dec2bin(decNumber) {

  let stack = new Stack();

  while (decNumber > 0) {
    stack.push(decNumber % 2);
    decNumber = Math.floor(decNumber / 2);
  }
  console.log(stack);

  let result = "";
  // 出栈并拼接
  while (!stack.isEmpty()) {
    result += stack.pop();
  }
  return result;
}

// 十进制转二进制结果
const binNumber = dec2bin(1000);
console.log("binNumber == ", binNumber);
