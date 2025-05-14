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
    
    insert(data , node = this.root){

        if (!node) {
            if (this.root === null) {
                this.root = new Node(data);  
            };
            return new Node(data);
        }

            if(data < node.data){
                node.left = this.insert(data, node.left);
                
            }else{
                node.right = this.insert(data, node.right);          
            }
        return node

    }

    
    find(data, node = this.root){

        if(node === null)return null;

            if(node.data === data)return node ;

                if(data < node.data ){
                    return this.find(data, node.left);
                }
                if(data > node.data){
                    return this.find(data, node.right);
        }
    }


    sortedInOrder(node = this.root, result =[]){
        if(node){
            this.sortedInOrder(node.left, result);
        result.push(node.data);
            this.sortedInOrder(node.right, result);
        }
        return result 
    }


    sortedInvert(node = this.root, result=[]){
        if(node){
            this.sortedInvert(node.right, result)
            result.push(node.data)
            this.sortedInvert(node.left, result)
        }
        return result
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

tree.insert(10)
tree.insert(50)
tree.insert(6)

console.log(tree.toString()); 
console.log(tree.find(9))
console.log(tree.sortedInOrder()); 
console.log(tree.sortedInvert());