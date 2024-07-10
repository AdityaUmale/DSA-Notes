/* 
Given two nodes (start and dest) in  a deirected asyclic graph
 (DAG), return true if there is a directed path from start to
 dest, oherwise return false.

 Example 1: 

 Input: start = 1, dest = 3
 Output: true
 explanation: there is a directed path 1 -> 2 -> 3.
 
 Example 2: 

 Input: start = 1, dest = 4
 Output: false
 Explanation: There is no path from 1 to 4.

 */


function hasPathDFS(graph, start, dest){
    const stack = [ start ]
    const visited = new Set()

    while(stack.length > 0){
        const node = stack.pop()
        if (node === dest) {
            return true
        }
        if (!visited.has(node)) {
            visited.add(node)
            for (const neighbour of graph[node]) {
                stack.push(neighbour)
            }
        }
    }
    return false
 }

function hasPathBFS(graph, start, dest) {
    const queue = [ start ]
    const visited = new Set()

    while(queue.length > 0){
        const node = queue.shift()
        if (node === dest) return true
        if (!visited.has(node)) {
            visited.add(node)
            for (const neighbour of graph[node]) {
                queue.push(neighbour)
            }
        }
    }

    return false
}

function hasPathRec(graph, start, dest){
    if (start === dest) return true

    for (const neighbour of graph[start]) {
        if (hasPathRec(graph, neighbour, dest) === true) {
            return true
        }
    }
    return false

}
