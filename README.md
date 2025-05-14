# Binary Search Tree (BST) Implementation

This repository contains a simple implementation of a Binary Search Tree (BST) in JavaScript. The BST supports basic operations like insertion, search, and traversal (both in-order and reverse in-order).

## Table of Contents

- [Overview](#overview)
- [Installation](#installation)
- [Usage](#usage)
- [Functions](#functions)
- [Example](#example)
- [License](#license)

## Overview

A **Binary Search Tree** is a data structure that consists of nodes where each node contains a value and two child nodes: a left and a right child. In a BST, the left child node contains a value less than the parent node, and the right child node contains a value greater than the parent node.

This implementation supports the following operations:
- **Insert**: Insert a new node into the BST.
- **Find**: Search for a node with a specific value.
- **In-order Traversal**: Return the values of the nodes in sorted order (ascending).
- **Reverse In-order Traversal**: Return the values of the nodes in reverse sorted order (descending).

## Installation

You can clone this repository and run the code in your local environment:

git clone https://github.com/yourusername/binary-search-tree.git
cd binary-search-tree
The implementation is written in plain JavaScript and doesn't require any dependencies.

##Usage
Create an instance of the Tree class.

Insert values using the insert method.

Find a node using the find method.

Traverse the tree in ascending or descending order using the sortedInOrder and sortedInvert methods.

javascript
Copier
Modifier
// Create a new tree instance
const tree = new Tree();

// Insert values into the tree
[4, 2, 9, 5, 1, 8, 3].forEach(value => tree.insert(value));

// Insert additional nodes
tree.insert(10);
tree.insert(50);
tree.insert(6);

// Print the tree structure
console.log(tree.toString());

// Find a node by value
console.log(tree.find(9)); // Returns node with data 9

// Get sorted array (ascending)
console.log(tree.sortedInOrder()); // Returns sorted array [1, 2, 3, 4, 5, 6, 8, 9, 10, 50]

// Get reverse sorted array (descending)
console.log(tree.sortedInvert()); // Returns reverse sorted array [50, 10, 9, 8, 6, 5, 4, 3, 2, 1]
Functions
insert(data, node = this.root)
Inserts a new node with the specified data into the tree. If the tree is empty, it will set the root.

find(data, node = this.root)
Finds a node with the specified data in the tree and returns it. If the node is not found, it returns null.

sortedInOrder(node = this.root, result = [])
Returns an array of the node values in sorted (ascending) order using an in-order traversal.

sortedInvert(node = this.root, result = [])
Returns an array of the node values in reverse sorted (descending) order using a reverse in-order traversal.

toString(node = this.root, indent = "", pointer = "root")
Generates a string representation of the tree structure, showing the relationships between the nodes in a hierarchical manner.

Example
javascript
Copier
Modifier
// Create a new tree instance and insert values
const tree = new Tree();
[4, 2, 9, 5, 1, 8, 3].forEach(value => tree.insert(value));

// Print the tree structure
console.log(tree.toString()); 

// Find a node by value
console.log(tree.find(9)); 

// Get sorted array (ascending)
console.log(tree.sortedInOrder()); 

// Get reverse sorted array (descending)
console.log(tree.sortedInvert());
Output:
yaml
Copier
Modifier
root: 4
    L: 2
        L: 1
        R: 3
    R: 9
        L: 5
            R: 8
        R: 10

Node found: 9

Sorted array (ascending): [1, 2, 3, 4, 5, 6, 8, 9, 10, 50]

Reverse sorted array (descending): [50, 10, 9, 8, 6, 5, 4, 3, 2, 1]
License
This project is licensed under the MIT License - see the LICENSE file for details.

markdown
Copier
Modifier

### Explication des sections :
1. **Overview** : Une brève explication du BST et des fonctionnalités de base.
2. **Installation** : Instructions pour cloner le projet et l'utiliser localement.
3. **Usage** : Exemples d'utilisation pour insérer des valeurs, rechercher un nœud et effectuer des traversées.
4. **Functions** : Description de chaque méthode de la classe `Tree`.
5. **Example** : Exemple d'utilisation complet montrant la création d'un arbre, l'insertion de données et l'affichage des résultats.
6. **License** : Une mention de la licence sous laquelle le projet est distribué (dans ce cas, MIT).






