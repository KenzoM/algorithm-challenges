function printNode(value){
  console.log(value);
}

function BinarySearchTree() {
  var Node = function(key){
    this.key = key;
    this.left = null;
    this.right = null;
  }
  var insertNode = function(node, newNode){
    if (newNode.key < node.key){ // check the keys values
      if (node.left === null){
        node.left = newNode;
      } else {
        insertNode(node.left, newNode)
      }
    } else {
      if (node.right === null){
        node.right = newNode;
      } else {
        insertNode(node.right, newNode)
      }
    }
  }
  var root = null;

  this.insert = function(key){
    var newNode = new Node(key);
    if (root === null){
      root = newNode;
    } else {
      insertNode(root,newNode)
    }
  }

  this.inOrderTraverse = function(callback){
    inOrderTraverseNode(root, callback)
  }

  var inOrderTraverseNode = function(node, callback){
    if (node !== null){
      inOrderTraverseNode(node.left, callback);
      callback(node.key);
      inOrderTraverseNode(node.right, callback);
    }
  }

  this.preOrderTraverse = function(callback){
    preOrderTraverseNode(root, callback);
  }

  var preOrderTraverseNode = function(node, callback){
    if (node !== null){
      callback(node.key);
      preOrderTraverseNode(node.left, callback);
      preOrderTraverseNode(node.right, callback);
    }
  }

  this.postOrderTraverse = function(callback){
    postOrderTraverseNode(root, callback)
  }

  var postOrderTraverseNode = function(node, callback){
    if (node !== null){
      postOrderTraverseNode(node.left, callback);
      postOrderTraverseNode(node.right, callback);
      callback(node.key)
    }
  }

  this.min = function(){
    return minNode(root);
  }
  var minNode = function(node){
    if (node){
      while (node && node.left !== null){
        node = node.left;
      }
      return node.key
    }
    return null
  }

  this.max = function(){
    return maxMode(root);
  }
  var maxMode = function(node){
    if (node){
      while (node && node.right !== null){
        node = node.right
      }
      return node.key;
    }
    return null
  }

  this.search = function(key){
    return searchNode(root,key)
  }
  var searchNode = function(node,key){
    if (node === null){ //base
      return false;
    }
    if (key < node.key){ //if current node's key is greater, tranverse left
      return searchNode(node.left, key);
    } else if (key > node.key){  //if current node's key is less, tranverse right
      return searchNode(node.right, key)
    } else{ // if current node's key and key are equal, return true
      return true;
    }
  }

  this.remove = function(key){
    root = removeNode(root, key) //note that root receives the return method of removeNode
  }

  var findMinNode(node){
    while (node && node.left !== null){
      node = node.left
    }
    return node;
  }

  var removeNode = function(node, key){
    if (node === null){
      return null;
    }
    if (key < node.key){
      node.left = removeNode(node.left, key)
      return node;
    } else if (key > node.key){
      node.right = removeNode(node.right, key);
      return node;
    } else { //once it is found, there are 3 cases to consider
      //case 1 - a leaf node
      if (node.left === null && node.right === null){
        node = null;
        return node;
      }
      //case 2 - a node with only 1 child
      if (node.left === null){
        node = node.right;
        return node;
      } else if (node.right === null){
        node = node.left;
        return node;
      }
      //case 3 - a node with 2 children
      var aux = findMinNode(node.right); //find the smallest value to the right subtree of the target node
      node.key = aux.key; //replace the smallest value you found to its node key
      node.right = removeNode(node.right, aux.key); //remove the smallest value node you found in the subtree
      return node;
    }
  }
}
