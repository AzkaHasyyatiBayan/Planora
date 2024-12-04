<script setup>
import { defineComponent } from 'vue'
import { RouterLink } from 'vue-router'
import navbar from './components/navbar.vue';
</script>

<template>
  <div id="app">
    <navbar></navbar> 
    <router-view></router-view>
  </div>
</template>