/*
 * @Author: Tiga 526380248@qq.com
 * @Date: 2023-10-31 17:14:09
 * @LastEditors: Tiga 526380248@qq.com
 * @LastEditTime: 2023-11-02 10:57:54
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

// let queue = new Queue();
// queue.unqueue("a");
// queue.unqueue("b");
// queue.unqueue("c");
// queue.unqueue("d");
// console.log(queue);
//
// console.log(queue.front());
//
// queue.dequeue();
// console.log(queue.dequeue());
//
// console.log(queue.isEmpty());
// console.log(queue.toString());


/**
 * 使用队列实现小游戏“击鼓传花”
 * @param {*} list 原数据
 * @param {*} number 当前
 */
function passGame(list, number) {
  // 声明一个新的队列，存放所有的数据
  const queue = new Queue();

  for (let i = 0; i < list.length; i++) {
    queue.unqueue(list[i]);
  }

  while (queue.size() > 1) {
    // 将队列中的元素一次移出队列，再添加到队列尾部
    for (let k = 0; k < number - 1; k++) {
      queue.unqueue(queue.dequeue());
    }
    // 当前第一个元素就是原数组中，索引为number元素
    queue.dequeue();
  }

  const end = queue.front();
  console.log("end ==== ", end);

  return list.indexOf(end);
}

const list = ['a', 'b', 'c', 'd', 'e'];
const endIndex = passGame(list, 4);
console.log("原来的位置 === ", endIndex);



