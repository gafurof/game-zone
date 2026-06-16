<template>
  <v-app>
    <v-main>
      <router-view/>
    </v-main>

    <nav class="bottom-nav">
      <button
        v-for="item in navItems"
        :key="item.value"
        class="nav-btn"
        :class="{ active: activeTab === item.value }"
        @click="activeTab = item.value"
      >
        <v-icon size="22">{{ item.icon }}</v-icon>
        <span>{{ item.label }}</span>
      </button>
    </nav>
  </v-app>
</template>

<script setup>
import { ref } from 'vue'

const activeTab = ref('home')

const navItems = [
  { value: 'home',    icon: 'mdi-home',    label: 'Bosh'    },
  { value: 'map',     icon: 'mdi-map',     label: 'Xarita'  },
  { value: 'bron',    icon: 'mdi-lock',    label: 'Bron'    },
  { value: 'account', icon: 'mdi-account', label: 'Akkaunt' },
]
</script>

<style scoped>
.bottom-nav {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 8px 6px 16px;
  gap: 2px;
  background: #1c1c1e;
  box-sizing: border-box;
  width: 100%;
}

.nav-btn {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2px;
  flex: 1;
  min-width: 0;
  padding: 7px 4px;
  border: none;
  border-radius: 50px;
  background: transparent;
  cursor: pointer;
  transition: background 0.15s;
  overflow: hidden;
}

.nav-btn .v-icon,
.nav-btn span {
  color: rgba(255, 255, 255, 0.45);
  transition: color 0.15s;
}

.nav-btn span {
  font-size: 9px;
  font-weight: 500;
  white-space: nowrap;
}

.nav-btn.active {
  background: #3a3a3c;
}

.nav-btn.active .v-icon,
.nav-btn.active span {
  color: #ffffff;
}
</style>