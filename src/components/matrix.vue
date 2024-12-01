<template>
    <div class="matrix">
      <div class="matrix-grid">
        <div v-for="(tasks, quadrant) in quadrants" :key="quadrant" class="quadrant">
          <h3>{{ quadrantLabels[quadrant] }}</h3>
          <ul>
            <li v-for="task in tasks" :key="task.title">
              {{ task.title }} ({{ task.prioritas }}, {{ task.urgensi }})
            </li>
          </ul>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      tasks: {
        type: Array,
        required: true,
      },
    },
    computed: {
      quadrants() {
        const quadrants = {
          importantUrgent: [],
          importantNotUrgent: [],
          notImportantUrgent: [],
          notImportantNotUrgent: [],
        };
        this.tasks.forEach((task) => {
          const isImportant = task.prioritas === 'high';
          const isUrgent = task.urgensi === 'high';
          if (isImportant && isUrgent) quadrants.importantUrgent.push(task);
          else if (isImportant) quadrants.importantNotUrgent.push(task);
          else if (isUrgent) quadrants.notImportantUrgent.push(task);
          else quadrants.notImportantNotUrgent.push(task);
        });
        return quadrants;
      },
      quadrantLabels() {
        return {
          importantUrgent: 'Important & Urgent',
          importantNotUrgent: 'Important & Not Urgent',
          notImportantUrgent: 'Not Important & Urgent',
          notImportantNotUrgent: 'Not Important & Not Urgent',
        };
      },
    },
  };
  </script>
  
  <style scoped>
  .matrix-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
  }
  .quadrant {
    border: 1px solid #ccc;
    padding: 10px;
    border-radius: 5px;
    background-color: #f9f9f9;
  }
  </style>  