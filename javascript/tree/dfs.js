/**
 * 深度优先遍历的树
 * 1. 访问根节点
 * 2. 对根节点的 children 挨个进行深度优先便利
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

const dfs = function(root) {
  console.log(root.val)
  if (root.children && root.children.length) {
    root.children.forEach(item => dfs(item))
  }
}

dfs(tree);