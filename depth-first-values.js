class Node {
  constructor(val) {
    this.val = val
    this.left = null
    this.right = null
  }
}

const depthFirstValues = (root) => {
  if (root === null) return []
  const result = []
  const stack = [root]

  while (stack.length) {
    const current = stack.pop()
    result.push(current.val)

    // push right to stack
    if (current.right) {
      stack.push(current.right)
    }
    // if left is pushed second, the traversal will start at the left side
    if (current.left) {
      stack.push(current.left)
    }
  }

  return result
}
