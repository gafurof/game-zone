<template>
  <nav class="top-nav">
    <div class="top-nav__logo">MyApp</div>

    <div class="top-nav__items">
      <button
        v-for="item in navItems"
        :key="item.value"
        class="top-nav__btn"
        :class="{ active: activeTab === item.value }"
        @click="activeTab = item.value"
      >
        <v-icon size="20">{{ item.icon }}</v-icon>
        <span>{{ item.label }}</span>
      </button>
    </div>

    <div class="top-nav__right">
      <v-icon size="22" style="color: rgba(255, 255, 255, 0.6); cursor: pointer"
        >mdi-magnify</v-icon
      >
    </div>
  </nav>
</template>

<script lang="ts" setup>
import { ref } from "vue";

const activeTab = ref("home");

const navItems = [
  { value: "home", icon: "mdi-home", label: "Bosh" },
  { value: "map", icon: "mdi-map", label: "Xarita" },
  { value: "bron", icon: "mdi-lock", label: "Bron" },
  { value: "account", icon: "mdi-account", label: "Akkaunt" },
];
</script>

<style scoped>
.top-nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 24px;
  background: #1c1c1e;
  box-sizing: border-box;
  z-index: 100;
}

.top-nav__logo {
  font-size: 16px;
  font-weight: 600;
  color: #fff;
  min-width: 80px;
}

.top-nav__items {
  display: flex;
  align-items: center;
  gap: 4px;
}

.top-nav__btn {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 7px 16px;
  border: none;
  border-radius: 50px;
  background: transparent;
  cursor: pointer;
  transition: background 0.15s;
  color: rgba(255, 255, 255, 0.45);
}

.top-nav__btn span {
  font-size: 13px;
  font-weight: 500;
  color: inherit;
}

.top-nav__btn .v-icon {
  color: inherit;
}

.top-nav__btn:hover {
  background: #3a3a3c;
  color: rgba(255, 255, 255, 0.75);
}

.top-nav__btn.active {
  background: #3a3a3c;
  color: #ffffff;
}
</style>
