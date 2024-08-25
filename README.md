# JavaScript Programs

## 1. [BFS](./BFS.js)

- Step 1: create a prototype for a node

- Step 2: create a prototype for the binary search tree with root node pointing to null

- Step 3: insert function:

  - create a newNode using the prototype
  - if root points to null then it equals to the newNode
  - let temporary variable hold the root node
  - a while loop is run until a return statement is encountered
    - for BST we should have nodes less than or greater than the current node in this case, therefore, if a newNode has a value equal to the current node, return undefined
    - if a newNode is less than the current node, attach it to its left if there is space otherwise update temporary variable to point to the left of current node and repeat the while loop to compare with newNode
    - if a newNode is greater than the current node, attach it to its right if there is space otherwise update temporary variable to point to the right of current node and repeat the while loop to compare with newNode

- Step 4: contains function:

  - if root points to null then there is no tree and return false
  - let a temporary variable hold the root
  - a while loop is run until temporary variable becomes null (i.e., there is no match for the node is found)
    - if the given value is less than the value pointed by temp, let temp point to its left and repeat loop
    - if the given value is greater than the value pointed by temp, let temp point to its right and repeat loop
    - if the given value is equal to the value pointed by temp, return true

- Step 5: BFS function:

  - queue array holds nodes
  - results array holds the values in sequence
  - while queue is not empty
    - currentNode will hold the first element of the queue array
    - results array will push the value of currentNode
    - the left and right nodes of currentNode, if present, are pushed to queue array respectively

## 2. [DFS](./DFS.js)

- Step 1 to Step 4: same as in [BFS](./BFS.js)

- Step 5: DFSPreOrder function:

  - (1) traversal starts with the root as currentNode
  - (2) value of the currentNode is pushed to the results array
  - (3) if left node is present, then it becomes the currentNode and point (2) onwards is repeated
  - (4) if right node is present, then it becomes the currentNode and point (2) onwards is repeated
  - (5) results array is returned

- Step 6: DFSPostOrder function:

  - (1) traversal starts with the root as currentNode
  - (2) if left node is present, then it becomes the currentNode and point (2) onwards is repeated
  - (3) if right node is present, then it becomes the currentNode and point (2) onwards is repeated
  - (4) value of the currentNode is pushed to the results array
  - (5) results array is returned

- Step 7: DFSInOrder function:

  - (1) traversal starts with the root as currentNode
  - (2) if left node is present, then it becomes the currentNode and point (2) onwards is repeated
  - (3) value of the currentNode is pushed to the results array
  - (4) if right node is present, then it becomes the currentNode and point (2) onwards is repeated
  - (5) results array is returned

## 3. [Selection Sort](<./Selection Sort.js>)

- Step 1: Let the first index be the min_index (index holding minimum array element)
- Step 2: Compare each subsequent element with the element at min_index
- Step 3: Update the min_index
- Step 4: Swap the first element with the element at min_index
- Step 5: Repeat from Step 1 to 4 for next index
