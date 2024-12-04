<template> 
    <div>
      <h3>Input Tugas</h3>
      <form @submit.prevent="addTask">
        <label for="title">Judul: </label>
        <input id="title" v-model="title" placeholder="Judul" style="height: 100%" required />
        
        <label for="status">Status: </label>
        <select id="status" v-model="status" required>
            <option value="Sedang Dikerjakan">Sedang Dikerjakan</option>
            <option value="Belum Dikerjakan">Belum Dikerjakan</option>
        </select>

        <label for="prioritas">Prioritas: </label>
        <select id="prioritas" v-model="prioritas" required>
            <option value="Tinggi">Tinggi</option>
            <option value="Sedang">Sedang</option>
            <option value="Rendah">Rendah</option>
        </select>

        <label for="urgensi">Urgensi: </label>
        <select id="urgensi" v-model="urgensi" required>
            <option value="Penting">Penting</option>
            <option value="Kurang Penting">Kurang Penting</option>
        </select>
        <button type="submit">Tambahkan Tugas</button>
      </form>
      <h3>Daftar Tugas</h3>
      <table>
        <thead>
          <tr>
            <th>No</th>
            <th>Judul</th>
            <th>Status</th>
            <th>Prioritas</th>
            <th>Urgensi</th>
            <th>Aksi</th>
          </tr>
        </thead>
        <tbody>
          <tr v-if="tasks.length === 0">
            <td colspan="6" style="text-align: center; font-style: italic; color: gray;">
              Belum ada tugas saat ini.
            </td>
          </tr>
          <tr v-for="(task, index) in tasks" :key="index" v-else>
            <td>{{ index + 1 }}</td>
            <td>{{ task.title }}</td>
            <td>{{ task.status }}</td>
            <td>{{ task.prioritas }}</td>
            <td>{{ task.urgensi }}</td>
            <td>
              <button @click="deleteTask(index)">Selesai</button>
            </td>
          </tr>
        </tbody>
      </table>
      <button @click="goToMatrix" style="text-align: center; justify-content: center; width: fit-content; height: 40%; margin-top: 20px; padding: 5px 10px; display: flex;">Lihat Matrix Tugas</button>
    </div>
  </template>
  
  <script>
  import { ref } from 'vue'
  import { useRouter } from 'vue-router';
  
  export default {
    name: 'matrixpage',
    setup() {
      const router =useRouter();

      const goToMatrix = () => {
        router.push('/matrix');
      }

      const title = ref('')
      const status = ref('')
      const prioritas = ref('')
      const urgensi = ref('')
      const tasks = ref(JSON.parse(localStorage.getItem('tasks')) || [])
  
      const addTask = () => {
        const task = {
          title: title.value,
          status: status.value,
          prioritas: prioritas.value,
          urgensi: urgensi.value,
        }
        tasks.value.push(task)
        localStorage.setItem('tasks', JSON.stringify(tasks.value))
        
        title.value = ''
        status.value = ''
        prioritas.value = ''
        urgensi.value = ''
      }
  
      const deleteTask = (index) => {
        tasks.value.splice(index, 1)
        localStorage.setItem('tasks', JSON.stringify(tasks.value))
      }
  
      return {
        goToMatrix,
        title,
        status,
        prioritas,
        urgensi,
        tasks,
        addTask,
        deleteTask
      }
    }
  }
  </script>
  
  <style scoped>
  * {
    justify-content: left;
    text-align: left;
    box-sizing: border-box;
  }

  th {
    background-color: transparent;
    color: black;
  }

  form {
    min-height: 50px;
    display: flex;
    flex-direction: row;
    gap: 15px;
    margin-bottom: 0;
    margin-top: 20px;
  }

  @media (max-width: 768px) {
    form {
      flex-direction: column;
      align-items: stretch; 
    }

    form input,
    form select {
      width: 100%;
    }

    div {
      padding: 10px;
    }

  }

  form label {
    display: block;
    margin-bottom: 5px;
    margin-left: 10px;
    color: #000000;
  }

  body.dark form label,
  body.dark form h3 {
    color: white;
  }

  form input,
  form select {
    margin: 5px 0;
    height: 40% !important;
    padding: 10px;
    border-radius: 5px;
    background-color: whitesmoke;
    color: black;
    font-size: 16px;
  }

  form button {
    margin: 5px;
    padding: 10px 20px; 
    font-size: 16px;
    height: 40%;
    text-align: center;
  }

  body.dark form input,
  body.dark form select {
    color: white;
  }

  body.dark form select,
  body.dark form input {
    background-color: #333;
    color: white;
    border: 1px solid black;
  }

  body.dark form select option {
    background-color: #333;
    color: white;
  }

  body.dark form select option:hover {
    background-color: #444;
    color: #ddd;
  }

  table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 0;
    border-radius: 20px;
  }

  body.dark table th,
  body.dark table td {
    border: 1px solid #333;
  }

  table th {
    background-color: #9370DB;
  }

  table th, table td {
    margin-top: 0;
    padding: 8px;
    border: 1px solid #000000;
    text-align: left;
    color: black;
  }

  div {
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin: 0;
    padding: 0;
  }

  button {
    padding: 5px 10px;
    background-color: #6a0dad;
    color: white;
    border: none;
    cursor: pointer;
  }

  h3 {
    color: #333;
  }

  body.dark h3 {
    color: white;
  }

  button:hover {
    background-color: darkmagenta;
  }

  body.dark table th,
  body.dark table td {
    color: white;
  }

  body.dark table th {
    background-color: #9370DB;
  }

  body.dark p {
    color: white;
  }
  </style>  