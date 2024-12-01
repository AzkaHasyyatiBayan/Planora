<template>
    <nav class="navbar">
      <div class="navbar-left">
        <p class="brand-name">Planora</p>
      </div>
  
      <div class="navbar-center">
        <ul>
          <li><router-link to="/tasks">Tugas</router-link></li>
          <li><router-link to="/matrix">Matrix</router-link></li>
        </ul>
      </div>
  
      <div class="navbar-right">
        <button @click="toggleDarkMode" class="dark-mode-toggle">
          <span class="material-symbols-outlined">
            {{ isDarkMode ? 'flare' : 'dark_mode' }}
          </span>
        </button>
      </div>

    </nav>
  </template>
  
  <script>
  import { ref } from "vue";

  export default {
    name: "navbar",
    setup() {
      const isDarkMode = ref(false);

      const toggleDarkMode = () => {
        isDarkMode.value = !isDarkMode.value;
        const body = document.body;

        if (isDarkMode.value) {
          body.classList.add("dark");
        } else {
          body.classList.remove("dark");
        }
      };

      return {
        isDarkMode,
        toggleDarkMode,
      };
    },
  };
  </script>
  
  <style scoped>
  .navbar {
    display: flex;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1000;
    justify-content: space-between;
    align-items: center;
    width: 100vw;
    height: 60px;
    padding: 10px 20px;
    background-color: white;
    margin-bottom: 20px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
  
  .navbar-left .brand-name {
    font-size: 24px;
    font-weight: bold;
    color: #6a0dad;
  }
  
  .navbar-center ul {
    display: flex;
    gap: 15px;
    list-style: none;
    margin: 0;
    padding: 0;
  }
  
  .dark-mode-toggle {
    background: none;
    border: none;
    cursor: pointer;
    font-size: 24px;
    color: #6a0dad;
  }

  .material-symbols-outlined {
    font-size: 24px;
  }

  .dark-mode-icon {
    font-size: 24px;
  }

  body.dark .navbar {
    background-color: black;
    color: purple;
  }

  body.dark .navbar-center .brand-name{
    color: purple;
  }

  .navbar-right .dark-mode-toggle {
    font-size: 20px;
    border: none;
    background-color: transparent;
    margin-right: 45px;
  }
  
  .navbar-center a {
    color: #6a0dad;
    text-decoration: none;
    position: relative;
    transition: all 0.3s ease;
  }

  body.dark .navbar-center a {
    color: #6a0dad;
  }

  .navbar-center a:hover {
    color:darkmagenta;
    transition: 0.3s ease-in-out
  }

  body.dark .navbar-center a:hover {
    color:darkmagenta;
    transition: 0.3s ease-in-out
  }
      
  .router-link-active {
    font-weight: bold;
  }

  .router-link-active::after {
  content: "";
  position: absolute;
  bottom: -10px; 
  left: 0;
  width: 100%;
  height: 2px; 
  background-color: #6a0dad; 
}

.navbar-center a:not(.router-link-active) {
  border-bottom: none;
}

body.dark .router-link-active::after {
    background-color: #6a0dad;
}

  </style>  