<template>
  <div>
    <h3>Matrix Tugas</h3>
    <p>Lihat tugas mana yang sebaiknya dikerjakan terlebih dahulu</p>
    <div class="task-quadrant">
      <div class="quadrant" v-for="(tasksList, index) in quadrants" :key="index">
        <h6>{{ quadrantTitles[index] }}</h6>
        <ul>
          <li v-for="task in tasksList" :key="task.id || task.title">
            {{ task.number }}. {{ task.title }} - {{ task.status }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';

export default {
  name: 'MatrixPage',
  setup() {
    const tasks = ref([]);
    const quadrants = ref([]);
    const quadrantTitles = [
      'Penting & Mendesak',
      'Penting & Tidak Mendesak',
      'Tidak Penting & Mendesak',
      'Tidak Penting & Tidak Mendesak',
    ];

    const trainingData = [
      { urgensi: 'Penting', prioritas: 'Tinggi', quadrant: 'importantUrgent' },
      { urgensi: 'Kurang Penting', prioritas: 'Tinggi', quadrant: 'importantNotUrgent' },
      { urgensi: 'Penting', prioritas: 'Rendah', quadrant: 'notImportantUrgent' },
      { urgensi: 'Kurang Penting', prioritas: 'Rendah', quadrant: 'notImportantNotUrgent' },
    ];

    const calculateDistance = (task, training) => {
      const urgensiScore = task.urgensi === 'Penting' ? 1 : 0;
      const prioritasScore = task.prioritas === 'Tinggi' ? 1 : 0;

      const trainingUrgensiScore = training.urgensi === 'Penting' ? 1 : 0;
      const trainingPrioritasScore = training.prioritas === 'Tinggi' ? 1 : 0;

      return Math.sqrt(
        Math.pow(urgensiScore - trainingUrgensiScore, 2) +
          Math.pow(prioritasScore - trainingPrioritasScore, 2)
      );
    };

    const classifyTask = (task) => {
      const distances = trainingData.map((training) => ({
        quadrant: training.quadrant,
        distance: calculateDistance(task, training),
      }));

      distances.sort((a, b) => a.distance - b.distance);
      return distances[0].quadrant;
    };

    const classifyTasksToQuadrants = () => {
      const classifiedQuadrants = {
        importantUrgent: [],
        importantNotUrgent: [],
        notImportantUrgent: [],
        notImportantNotUrgent: [],
      };

      let taskCounter = 1;

      tasks.value.forEach((task) => {
        task.number = taskCounter++;
        const quadrant = classifyTask(task);
        classifiedQuadrants[quadrant].push(task);
      });

      return [
        classifiedQuadrants.importantUrgent,
        classifiedQuadrants.importantNotUrgent,
        classifiedQuadrants.notImportantUrgent,
        classifiedQuadrants.notImportantNotUrgent,
      ];
    };

    onMounted(() => {
      const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
      tasks.value = storedTasks.map((task) => ({
        ...task,
        number: task.number || 0,
      }));

      quadrants.value = classifyTasksToQuadrants();
    });

    return {
      quadrantTitles,
      quadrants,
    };
  },
};
</script>

<style scoped>
.task-quadrant {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}

.quadrant {
  width: 45%;
  height:fit-content;
  margin: 10px;
  padding: 15px;
  border: 1px solid #ddd;
  background-color: #9370DB;
  border-radius: 7px;
}

h3 {
  text-align: left;
  color: black;
}

h6 {
  text-align: left;
  font-style: italic;
  font-weight: bold;
  color: #333;
}

p {
  margin-top: 0;
  text-align: left;
  font-weight: lighter;
  color: grey;
}

ul {
  margin-top: 0;
  list-style-type: none;
  padding: 0;
  text-align: left;
}

li {
  font-size: medium;
  font-style: oblique;
  margin: 5px 0;
  color: black;
}

body.dark h3 {
  color: white;
}
</style>