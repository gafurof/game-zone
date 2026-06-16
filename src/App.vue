<template>
  <TopNavigation class="hidden-sm-and-down"/>
  <router-view class="hidden-sm-and-down"/>
  <BottomNavigation class="hidden-md-and-up"/>
</template>

<script lang='ts' setup>
import BottomNavigation from '@/components/layout/BottomNavigation.vue'
import TopNavigation from '@/components/layout/TopNavigation.vue'
</script>

<style>
html, body {
  margin: 0;
  padding: 0;
  width: 100%;
  min-height: 100vh;
  
  scrollbar-width: none; 
  
  -ms-overflow-style: none; 
}

html::-webkit-scrollbar,
body::-webkit-scrollbar {
  display: none;
  width: 0 !important;
  height: 0 !important;
}
</style>
