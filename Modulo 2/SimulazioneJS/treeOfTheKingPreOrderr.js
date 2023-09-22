let tree = {
    "value": "Arwen",
    "left": {
        "value": "Earendil",
        "left": {
            "value": "Nimloth the Fair",
            "left": null,
            "right": null
        },
        "right": {
            "value": "Galadriel",
            "left": {
                "value": "Eowyn",
                "left": null,
                "right": null
            },
            "right": null
        }
    },
    "right": {
        "value": "Shelob",
        "left": null,
        "right": null
    },
}

function treeOfTheKing(tree, valueToFind) {
    // In a preorder traversal, the algorithm visits the current node first, 
    // then recursively traverses the left subtree, 
    // and finally recursively traverses the right subtree. 
    //This results in a sequence where the current node is visited before its children.

    // Pseudo code
    
    // Initialise a stack space to store results.
    // Add the parent node to the resultant stack.
    // Recursive traverse through the left node.
    // Recursive traverse through the right node.

    function preorder(tree, out, count){
        if(tree === null) return;
        count++
        out.push([tree.value, count])
        tree.left &&  preorder(tree.left, out, count)
        tree.right &&  preorder(tree.right, out, count)
    }

    let output = []
    preorder(tree, output, 0)
    console.log(output)
    for (let i = 0; i < output.length; i++) {
            if (output[i][0] === valueToFind) {
                return output[i][1]
        }
    }
    return -1
}

console.log(treeOfTheKing(tree, "Eowyn"))