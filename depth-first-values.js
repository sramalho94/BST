const depthFirstValues = (root) => {
  const stack = [root]

  while (stack.length) {
    const current = stack.pop()
    console.log(current.val)

    // push right to stack
    if (current.right) {
      stack.push(current.right)
    }
    // if left is pushed second, the traversal will start at the left side
    if (current.left) {
      stack.push(current.left)
    }
  }
}
