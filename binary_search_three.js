class Node {
    constructor(data){
        this.data = data
        this.right = null
        this.left = null
    }
}

class Tree { 
    constructor(){
        this.root = null
    }
    
    insert(data){
        const newNode = new Node(data)
        if(!this.root){
            this.root = newNode;
            return;
        }

    let current = this.root

    while(true) {
        if (data < current.data){

            if(!current.left){
                current.left = newNode;
                return
            }
                current = current.left;
            }else{

            if(!current.right){
                current.right = newNode;
                return
            }
                current = current.right;
            }
        }
    }
    
    toFind(data){

        let current = this.root

        while(current){
            if (data === current.data)
                return true 
            if (data < current.data)
                current = current.left 
            else 
                current = current.right 
        } 
        return false 
    }

    toString(node = this.root ,indent ="", pointer = "root"){
        if(!node) return ;
        let result = `${indent}${pointer}: ${node.data}\n`;
    
        const hasleft = node.left !==null
        const hasright = node.right !==null
    
        if(!hasleft && !hasright) return result;
    
        const indentchild = indent + "    "
        if(hasleft){
            result+= this.toString(node.left , indentchild, "L");
        }
        if(hasright){
            result+= this.toString(node.right, indentchild , "R")
        }
        return result 
    }
}


const tree = new Tree();
[4, 2, 9, 5, 1, 8, 3].forEach(value => tree.insert(value));

console.log(tree.toString()); 
console.log(tree.toFind(5))
