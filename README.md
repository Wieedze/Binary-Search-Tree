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

## Usage

- Crée une instance de la classe `Tree`.
- Insère des valeurs avec la méthode `insert`.
- Recherche un nœud avec la méthode `find`.
- Traverse l’arbre en ordre croissant ou décroissant avec `sortedInOrder` et `sortedInvert`.

```javascript
// Crée une nouvelle instance de l’arbre
const tree = new Tree();

// Insère des valeurs dans l’arbre
[4, 2, 9, 5, 1, 8, 3].forEach(value => tree.insert(value));

// Insère d'autres nœuds
tree.insert(10);
tree.insert(50);
tree.insert(6);

// Affiche la structure de l’arbre
console.log(tree.toString());

// Recherche un nœud par sa valeur
console.log(tree.find(9)); // Renvoie le nœud avec la valeur 9

// Récupère un tableau trié (ordre croissant)
console.log(tree.sortedInOrder()); // [1, 2, 3, 4, 5, 6, 8, 9, 10, 50]

// Récupère un tableau trié (ordre décroissant)
console.log(tree.sortedInvert()); // [50, 10, 9, 8, 6, 5, 4, 3, 2, 1]





