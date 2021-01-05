const bt = require('./bt.js')

const centerOrder= (root) => {
  if (!root) return
  centerOrder(root.left)
  console.log(root.val)
  centerOrder(root.right)
}

centerOrder(bt)
