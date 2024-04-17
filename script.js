// Establish what are the legal coordinates (Our rules)
    // Each of these coordinates are essentially 'nodes' in our graph
    // How do I create this Graph???
    
// What we're doing is choosing a node to start from and doing a breadth-first traversal until we reach the node we desire
    // Track which nodes we've already visited during traversal
    
// Then we isolate the shortest path of nodes from our starting to finishing node

function findAvailableMoves(c) {
    // "C" is current coordinate (an array of two values -> x & y)

    const moves = [

        [c[0] + 1, c[1] + 2],
        [c[0] + 1, c[1] - 2],
        [c[0] - 1, c[1] + 2],
        [c[0] - 1, c[1] - 2],
        [c[0] + 2, c[1] + 2],
        [c[0] + 2, c[1] - 2],
        [c[0] - 2, c[1] + 2],
        [c[0] - 2, c[1] - 2],
        
    ]

    const legalMoves = moves.filter(move => {
        return move[0] >= 0 && move[0] < 8 && move[1] >= 0 && move[1] < 8
    })

    return legalMoves;
}

function traverseGraph(sc) {
    // "sc" is starting coordinate
    
}