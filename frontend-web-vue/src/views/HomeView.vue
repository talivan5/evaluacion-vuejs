<template>
  <div>
    <input v-model="search" placeholder="Buscar por nombre o nacionalidad" />
    <pre>{{ search }}</pre>
    <div v-if="loading">Cargando...</div>
    <div v-else class="grid">
      <UserCard
        v-for="user in filteredUsers"
        :key="user.id"
        :user="user"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref, computed } from 'vue';
import { useUserStore } from '@/stores/userStore';
import UserCard from '@/components/UserCard.vue';

const store = useUserStore();
const search = ref('');

onMounted(() => store.fetchUsers());

const filteredUsers = computed(() =>
  store.users.filter(
    u =>
      u.nombre.toLowerCase().includes(search.value.toLowerCase()) ||
      u.nacionalidad.toLowerCase().includes(search.value.toLowerCase())
  )
);
const loading = computed(() => store.loading);
</script>

<style scoped>
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  padding: 1rem;
}

input {
  width: 100%;
  max-width: 500px;
  padding: 0.75rem 1rem;
  margin-bottom: 1.5rem;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 0.5rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease-in-out;
}

input:focus {
  outline: none;
  border-color: #007bff;
  box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.2);
}

div {
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem;
}

pre {
  font-size: 0.9rem;
  color: #666;
}

@media (max-width: 600px) {
  .grid {
    grid-template-columns: 1fr;
  }
}
</style>

