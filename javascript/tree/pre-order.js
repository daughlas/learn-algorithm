const bt = require('./bt.js')

const preOrder= (root) => {
  if (!root) return
  console.log(root.val)
  preOrder(root.left)
  preOrder(root.right)
}

const preOrderNotRecursion = (root) => {
  if (!root) return
  const stack = [root]
  while(stack.length) {
    const n = stack.pop()
    console.log(n.val)
    if (n.right) stack.push(n.right)
    if (n.left) stack.push(n.left)
  }
}

console.log('recursion: ')
preOrder(bt)
console.log('not recursion: ')
preOrderNotRecursion(bt)


