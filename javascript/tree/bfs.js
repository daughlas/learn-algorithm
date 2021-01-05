/**
 * 广度优先遍历
 * 1. 新建一个队列，把根节点入队
 * 2. 把队头出队并访问
 * 3. 把对头的 children 挨个入队
 * 4. 重复第二、三步，知道队列唯恐
 */
const tree = {
  val: 'a',
  children: [
      {
          val: 'b',
          children: [
              {
                  val: 'd',
                  children: [],
              },
              {
                  val: 'e',
                  children: [],
              }
          ],
      },
      {
          val: 'c',
          children: [
              {
                  val: 'f',
                  children: [],
              },
              {
                  val: 'g',
                  children: [],
              }
          ],
      }
  ],
};

const bfs = function(root) {
  const queue = [root]
  while(queue.length>0) {
    const n = queue.shift();
    n.children.forEach(child => {
      queue.push(child)
    })
  }
}

bfs(tree);