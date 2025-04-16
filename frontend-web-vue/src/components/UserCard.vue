<template>
    <div class="card">
        <img :src="user.avatar" alt="Avatar" />
        <h2>{{ user.nombre }} {{ user.apellido }}</h2>
        <p>{{ user.nacionalidad }}</p>
    </div>
</template>

<script setup lang="ts">
defineProps<{
  user: {
    avatar?: string;
    nombre?: string;
    apellido?: string;
    nacionalidad?: string;
  };
}>();
</script>

<style scoped>
.card {
    border: 1px solid #ccc;
    padding: 1rem;
    text-align: center;
}
</style>