<template>
  <div class="home-page">
    <div class="home-header">
      <div>
        <div class="greeting-sub">Salom,</div>
        <div class="greeting-name">Jasur</div>
      </div>
      <v-btn icon variant="tonal" color="primary" size="small">
        <v-icon>mdi-bell-outline</v-icon>
      </v-btn>
    </div>

    <div class="px-4 pb-3">
      <v-text-field
        placeholder="Cyberzone qidirish..."
        prepend-inner-icon="mdi-magnify"
        variant="solo-filled"
        flat
        hide-details
        density="compact"
        rounded="lg"
        bg-color="grey-lighten-4"
      />
    </div>

    <div class="chips-row px-4 pb-4">
      <v-chip
        v-for="chip in chips"
        :key="chip.value"
        :prepend-icon="chip.icon"
        :color="activeChip === chip.value ? 'primary' : undefined"
        :variant="activeChip === chip.value ? 'tonal' : 'outlined'"
        size="small"
        @click="activeChip = chip.value"
      >
        {{ chip.label }}
      </v-chip>
    </div>

    <div class="px-4">
      <div class="section-header">
        <span class="section-label">Mashhur joylar</span>
      </div>

      <v-row dense class="mb-4">
        <v-col v-for="zone in featuredZones" :key="zone.id" :cols="6" :sm="4" :md="3">
          <v-card rounded="lg" border flat>
            <div class="zone-img" :style="{ background: zone.bg }">
              <v-icon size="36" :color="zone.iconColor">{{ zone.icon }}</v-icon>
            </div>
            <v-card-text class="pa-3">
              <div class="zone-name">{{ zone.name }}</div>
              <div class="zone-meta">
                <v-icon size="13" color="amber-darken-2">mdi-star</v-icon>
                {{ zone.rating }} · {{ zone.distance }}
              </div>
              <v-chip
                :color="zone.open ? 'primary' : 'error'"
                size="x-small"
                variant="tonal"
                class="mt-2"
              >
                {{ zone.open ? "Ochiq" : "Band" }}
              </v-chip>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>

      <div class="section-header">
        <span class="section-label">Aktiv bronlar</span>
        <v-btn variant="text" color="primary" size="x-small" class="pa-0"
          >Hammasi</v-btn
        >
      </div>

      <v-card
        v-for="bron in activeBrons"
        :key="bron.id"
        rounded="lg"
        border
        flat
        class="mb-2"
      >
        <v-list-item :prepend-icon="bron.icon" density="compact" class="py-3">
          <template #prepend>
            <v-avatar rounded="lg" color="primary" variant="tonal" size="40">
              <v-icon size="20">{{ bron.icon }}</v-icon>
            </v-avatar>
          </template>
          <v-list-item-title class="text-body-2 font-weight-medium">
            {{ bron.title }}
          </v-list-item-title>
          <v-list-item-subtitle class="text-caption">
            {{ bron.time }}
          </v-list-item-subtitle>
          <template #append>
            <v-chip :color="bron.color" size="x-small" variant="tonal">
              {{ bron.status }}
            </v-chip>
          </template>
        </v-list-item>
      </v-card>

      <div class="section-header mt-4">
        <span class="section-label">Yaqin atrofda</span>
        <v-btn variant="text" color="primary" size="x-small" class="pa-0"
          >Xaritada</v-btn
        >
      </div>

      <v-card
        v-for="place in nearbyPlaces"
        :key="place.id"
        rounded="lg"
        border
        flat
        class="mb-2"
        @click="() => {}"
      >
        <v-list-item density="compact" class="py-3">
          <template #prepend>
            <v-avatar
              rounded="circle"
              color="primary"
              variant="tonal"
              size="38"
            >
              <v-icon size="18">mdi-map-marker-outline</v-icon>
            </v-avatar>
          </template>
          <v-list-item-title class="text-body-2 font-weight-medium">
            {{ place.name }}
          </v-list-item-title>
          <v-list-item-subtitle class="text-caption">
            {{ place.meta }}
          </v-list-item-subtitle>
          <template #append>
            <v-icon size="18" color="grey">mdi-chevron-right</v-icon>
          </template>
        </v-list-item>
      </v-card>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";

const activeChip = ref("nearby");

const chips = [
  { value: "nearby", icon: "mdi-map-marker-outline", label: "Yaqin" },
  { value: "top", icon: "mdi-star-outline", label: "Top rated" },
  { value: "h24", icon: "mdi-clock-outline", label: "24/7" },
  { value: "vr", icon: "mdi-virtual-reality", label: "VR bor" },
];

const featuredZones = [
  {
    id: 1,
    name: "CyberPro",
    rating: "4.8",
    distance: "0.3 km",
    icon: "mdi-monitor",
    iconColor: "blue",
    bg: "#E6F1FB",
    open: true,
  },
  {
    id: 2,
    name: "GameHub X",
    rating: "4.6",
    distance: "0.7 km",
    icon: "mdi-gamepad-variant",
    iconColor: "green",
    bg: "#EAF3DE",
    open: true,
  },
  {
    id: 3,
    name: "VR Arena",
    rating: "4.9",
    distance: "1.1 km",
    icon: "mdi-headset",
    iconColor: "amber-darken-2",
    bg: "#FAEEDA",
    open: false,
  },
  {
    id: 4,
    name: "EliteZone",
    rating: "4.7",
    distance: "1.5 km",
    icon: "mdi-trophy-outline",
    iconColor: "deep-purple",
    bg: "#EEEDFE",
    open: true,
  },
  {
    id: 5,
    name: "Phonix Gaming",
    rating: "4.8",
    distance: "1 km",
    icon: "mdi-monitor",
    iconColor: "deep-orange",
    bg: "#FDEEEA",
    open: true,
  },
  // {
  //   id: 6,
  //   name: "Seven Gaming",
  //   rating: "5",
  //   distance: "0.5 km",
  //   icon: "mdi-monitor",
  //   iconColor: "deep-orange",
  //   bg: "#FDEEEA",
  //   open: true,
  // },
];

const activeBrons = [
  {
    id: 1,
    icon: "mdi-monitor",
    title: "CyberPro · Stol #4",
    time: "Bugun, 18:00 – 20:00",
    status: "Faol",
    color: "primary",
  },
  {
    id: 2,
    icon: "mdi-headset",
    title: "VR Arena · Kabina #1",
    time: "Ertaga, 14:00 – 15:30",
    status: "Kutilmoqda",
    color: "warning",
  },
];

const nearbyPlaces = [
  { id: 1, name: "NetCafe Plus", meta: "200 m · 12 ta bo'sh joy" },
  { id: 2, name: "PixelZone", meta: "450 m · 5 ta bo'sh joy" },
  { id: 3, name: "GameZone 24", meta: "800 m · 24/7 · 8 ta bo'sh" },
];
</script>

<style scoped>
.home-page {
  padding-bottom: 80px;
}

.home-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 16px 12px;
}

.greeting-sub {
  font-size: 12px;
  color: rgba(0, 0, 0, 0.5);
}

.greeting-name {
  font-size: 17px;
  font-weight: 500;
}

.chips-row {
  display: flex;
  gap: 8px;
  overflow-x: auto;
  flex-wrap: nowrap;
}

.chips-row::-webkit-scrollbar {
  display: none;
}

.section-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
}

.section-label {
  font-size: 13px;
  font-weight: 500;
  color: rgba(0, 0, 0, 0.55);
}

.zone-img {
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.zone-name {
  font-size: 13px;
  font-weight: 500;
}

.zone-meta {
  font-size: 12px;
  color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  gap: 3px;
  margin-top: 2px;
}
</style>
