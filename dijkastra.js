function dijkstra(graph, source) {
    const distances = {};
    const visited = new Set();
    const priorityQueue = [];
  
    for (let vertex in graph) {
      distances[vertex] = Infinity;
    }
    distances[source] = 0;
    priorityQueue.push({ vertex: source, distance: 0 });
  
    while (priorityQueue.length > 0) {
      priorityQueue.sort((a, b) => a.distance - b.distance);
      const { vertex: current } = priorityQueue.shift();
  
      if (visited.has(current)) continue;
      visited.add(current);
  
      for (let neighbor in graph[current]) {
        const newDist = distances[current] + graph[current][neighbor];
        if (newDist < distances[neighbor]) {
          distances[neighbor] = newDist;
          priorityQueue.push({ vertex: neighbor, distance: newDist });
        }
      }
    }
  
    return distances;
  }
  
  const graph = {
    1: { 2: 4, 3: 2 },
    2: { 4: 7, 5: 1 },
    3: { 6: 5 },
    4: {},
    5: { 6: 3 },
    6: {}
  };
  
  const shortestPaths = dijkstra(graph, 1);
  console.log("Shortest Path from Source (1):", shortestPaths);
  