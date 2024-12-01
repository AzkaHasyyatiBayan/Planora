<script>
export const calculateDistance = (task1, task2) => {
  const urgensiMap = { "Penting": 1, "Kurang Penting": 0 };
  const prioritasMap = { "Tinggi": 1, "Sedang": 0.5, "Rendah": 0 };

  const task1Vector = [
    urgensiMap[task1.urgensi],
    prioritasMap[task1.prioritas],
  ];
  const task2Vector = [
    urgensiMap[task2.urgensi],
    prioritasMap[task2.prioritas],
  ];

  return Math.sqrt(
    task1Vector.reduce((sum, val, index) => sum + Math.pow(val - task2Vector[index], 2), 0)
  );
};

export const classifyTask = (newTask, trainingData, k = 3) => {
  const distances = trainingData.map((trainTask) => ({
    task: trainTask,
    distance: calculateDistance(newTask, trainTask),
  }));

  distances.sort((a, b) => a.distance - b.distance);

  const nearestNeighbors = distances.slice(0, k);

  const quadrantCounts = nearestNeighbors.reduce((counts, neighbor) => {
    counts[neighbor.task.quadrant] = (counts[neighbor.task.quadrant] || 0) + 1;
    return counts;
  }, {});

  return Object.keys(quadrantCounts).reduce((maxQuadrant, quadrant) =>
    quadrantCounts[quadrant] > (quadrantCounts[maxQuadrant] || 0) ? quadrant : maxQuadrant
  );
};
</script>