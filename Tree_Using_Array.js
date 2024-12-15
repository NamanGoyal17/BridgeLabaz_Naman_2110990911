class BinaryTree {
    constructor() {
      this.tree = []; // Array to store tree nodes
    }
  
    // Add a value to the tree
    add(value) {
      this.tree.push(value);
    }
  
    // Get value of the node at a specific index
    get(index) {
      if (index >= this.tree.length) {
        return null; // If index is out of bounds, return null
      }
      return this.tree[index];
    }
  
    // Get left child of the node at a specific index
    getLeftChild(index) {
      const leftChildIndex = 2 * index + 1;
      return this.get(leftChildIndex);
    }
  
    // Get right child of the node at a specific index
    getRightChild(index) {
      const rightChildIndex = 2 * index + 2;
      return this.get(rightChildIndex);
    }
  
    // Print the tree structure 
    printTree() {
      console.log(this.tree);
    }
  }
  
  
  const binaryTree = new BinaryTree();
  binaryTree.add(10); 
  binaryTree.add(20); 
  binaryTree.add(30); 
  binaryTree.add(40); 
  binaryTree.add(50); 
  
  console.log("Tree:", binaryTree.tree); 
  console.log("Root:", binaryTree.get(0)); 
  console.log("Left child of root:", binaryTree.getLeftChild(0)); 
  console.log("Right child of root:", binaryTree.getRightChild(0)); 
  console.log("Left child of 20:", binaryTree.getLeftChild(1)); 
  binaryTree.printTree();
  