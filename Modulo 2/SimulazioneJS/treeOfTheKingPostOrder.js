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

    // In a Postorder traversal, the algorithm recursively traverses the left subtree, 
    // recursively traverses the right subtree and then finally visits the root node. 
    // This results in a sequence where the current node is traversed after its children.

    // Pseudo code
    
    // Initialise a stack space to store results.
    // Recursively traverse through the left node.
    // Add the parent node to the resultant stack.
    // Recursively traverse through the right node.

    function postorder(tree, out, count) {
        if (tree === null) return
        count++
        tree.left && postorder(tree.left, out, count)
        tree.right && postorder(tree.right, out, count)
        out.push([tree.value, count])
    }

    let output = []
    postorder(tree, output, 0)
    console.log(output)
    for (let i = 0; i < output.length; i++) {
            if (output[i][0] === valueToFind) {
                return output[i][1]
        }
    }
    return -1
}

console.log(treeOfTheKing(tree, "Nimloth the Fair"))