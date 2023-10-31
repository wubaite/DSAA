/*
 * @Author: Tiga 526380248@qq.com
 * @Date: 2023-10-31 17:14:09
 * @LastEditors: Tiga 526380248@qq.com
 * @LastEditTime: 2023-10-31 17:53:25
 * @FilePath: /DSAA/Queue.js
 * @Description: 基于数组实现队列
 */

/**
 * 队列的特点：
 * 1、是一种受限的线性表，遵循“先入先出”的原则（FIFO，first in first out）
 * 2、受限之处：
 *  - 只允许在表的前端进行删除操作。
 *  - 只允许在表的后端进行插入操作。
 *
 * 生活中类似队列结构的场景：
 *  - 排队买票、上厕所排队。
 * 队列在程序中的应用：
 *  - 计算机打印文件，打印队列。
 *  - 线程队列，当开启多线程时，资源不足时，新的线程就会放入线程队列。
 *
 * 队列常见的操作：
 *  - enqueue()
 */

/** 基于数组实现栈 */
function Queue() {

  this.items = [];

  Queue.prototype.unqueue = function (element) {
    this.items.push(element);
  }

  Queue.prototype.dequeue = function () {
    return this.items.shift();
  }

  Queue.prototype.front = function () {
    return this.items[0];
  }

  Queue.prototype.isEmpty = function () {
    return this.items.length === 0;
  }

  Queue.prototype.size = function () {
    return this.items.length;
  }

  Queue.prototype.toString = function () {
    let result = "";
    for (let i = 0; i < this.items.length; i++) {
      result += this.items[i] + " ";
    }
    return result;
  }

}


let queue = new Queue();
queue.unqueue("a");
queue.unqueue("b");
queue.unqueue("c");
queue.unqueue("d");
console.log(queue);

console.log(queue.front());

queue.dequeue();
// queue.dequeue();
console.log(queue.dequeue());

console.log(queue.isEmpty());
console.log(queue.toString());
