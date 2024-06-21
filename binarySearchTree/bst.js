class BSTNode {
    constructor(key){
        this.key = key;
        this.left = null
        this.right = null
    }
}

class BinarySearchTree {
    constructor(){
        this.root = null
    }

    insert(key){
        const newNode = new BSTNode(key)
        if(this.root === null){
            this.root = newNode
        }else{
            this.insertNode(this.root, newNode)
        }
    }

    insertNode(node, newNode){
        if (newNode.key < node.key) {
            if (node.left === null) {
                node.left = newNode
            } else {
                this.insertNode(node.left, newNode)
            }
        }else {
            if (node.right === null){
                node.right = newNode
            } else {
                this.insertNode(node.right, newNode)
            }
        }
    }

    delete(key){
        this.root = this.deleteNode(this.root, key)
    }

    deleteNode(node, key){
        if (node == null) {
            return null
        }

        if (key < node.key) {
            node.left = this.deleteNode(node.left, key)
        } else if (key > node.key) {
            node.right = this.deleteNode(node.right, key)
        } else {
            if (node.left === null && node.right === null) {
                return null;
              
            } else if (node.left === null) {
                return node.right
            } else if (node.right === null) {
                return node.left
            } else {
                let tempNode = this.findMinNode(node.right)
                node.key = tempNode.key
                node.right = this.deleteNode(node.right, tempNode.key)
            }

        }
        return node
    }

    findMinNode(node) {
        while (node.left !== null){
            node = node.left
        }
        return node
    }
   
    // in order traversal 

    inorderTraversal(){
        const result = []
        this.inorder(this.root, result)
        return
    }

    inorder(){
        if(node !== null){
            this.inorder(node.left, result)
            result.push(node.key)
            this.inorder(node.right, result)

        }
    }

    //preorder traversal 

    preorderTraversal(){
        const result = []
        this.preorder(this.root, result)
        return
    }

    preorder(){
        if(node !== null){
            result.push(node.key)
            this.inorder(node.left, result)
            this.inorder(node.right, result)

        }
    }

    //postorder traversal 

    postorderTraversal(){
        const result = []
        this.postorder(this.root, result)
        return
    }

    postorder(){
        if(node !== null){
           
            this.postorder(node.left, result)
            this.postorder(node.right, result)
            result.push(node.key)

        }
    }
}