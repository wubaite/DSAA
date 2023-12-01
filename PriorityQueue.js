/*
 * @Author: Tiga 526380248@qq.com
 * @Date: 2023-12-01 08:58:59
 * @LastEditors: Tiga 526380248@qq.com
 * @LastEditTime: 2023-12-01 09:59:59
 * @FilePath: /DSAA/PriorityQueue.js
 * @Description: 基于数组实现优先级队列
 */

/**
 * 优先级队列：
 *  1、每个元素不再只是一个数据，还包含数据的优先级；
 *  2、在添加数据过程中，根据优先级放入到正确的位置;
 *  3、其他方法跟普通队列一致；
 *
 */


function PriorityQueue() {

  this.item = [];

  function Element(element, priority) {
    // 数据
    this.element = element;
    // 优先级
    this.priority = priority;
  }

  PriorityQueue.prototype.unqueue = function (element, priority) {
    let ele = new Element(element, priority);

    if (this.item.length === 0) {
      // 队列中没有值
      this.item.push(ele);
    } else {
      // 找出对应的优先级位置，添加到对应位置
      for (let i = 0; i < this.item.length; i++) {
        if (ele.priority < this.item[i].priority) {
          this.item.splice(i, 0, ele);
          return;
        }
      }
      // 如果其优先级为最大，直接添加到队列末尾
      this.item.push(ele);
    }

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


const pq = new PriorityQueue();
pq.unqueue("8Plus", 100);
pq.unqueue("6Plus", 10);
pq.unqueue("XSMax", 101);
pq.unqueue("7Plus", 10);
pq.unqueue("3GS", 1);


console.log('====================================');
console.log(pq.item);
console.log('====================================');

