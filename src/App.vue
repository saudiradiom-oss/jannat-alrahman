<template>
  <div id="app" class="min-h-screen bg-background" :class="{ 'dark': isDarkMode }">
    <nav class="sticky top-0 z-50 bg-primary shadow-lg">
      <div class="container mx-auto px-4 py-3 flex items-center justify-between">
        <div class="flex items-center gap-2">
          <span class="text-2xl">🌿</span>
          <h1 class="text-white font-bold text-xl">جنّة الرحمن</h1>
        </div>
        <div class="flex gap-2">
          <button @click="toggleDarkMode" class="text-white p-2 hover:bg-primary-dark rounded-lg transition">
            {{ isDarkMode ? '☀️' : '🌙' }}
          </button>
          <router-link to="/settings" class="text-white p-2 hover:bg-primary-dark rounded-lg transition">⚙️</router-link>
        </div>
      </div>
    </nav>

    <main class="container mx-auto px-4 py-6">
      <router-view />
    </main>

    <footer class="bg-gray-100 text-center py-4 mt-12 text-sm text-gray-600">
      <p>جنّة الرحمن • صدقة جارية</p>
    </footer>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useSettingsStore } from './stores/settingsStore'

const settingsStore = useSettingsStore()
const isDarkMode = ref(settingsStore.isDarkMode)

const toggleDarkMode = () => {
  isDarkMode.value = !isDarkMode.value
  settingsStore.updateSetting('isDarkMode', isDarkMode.value)
}

onMounted(() => {
  isDarkMode.value = settingsStore.isDarkMode
})
</script>

<style scoped>
#app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

main {
  flex: 1;
}
</style>
