<template>
    <div>
      <h1>Crear Persona</h1>
      <form @submit.prevent="submitForm">
        <div>
          <label for="nombre">Nombre:</label>
          <input v-model="nombre" id="nombre" required />
        </div>
        <div>
          <label for="correo">Correo:</label>
          <input v-model="correo" id="correo" type="email" required />
        </div>
        <div>
          <label for="edad">Edad:</label>
          <input v-model="edad" id="edad" type="number" required />
        </div>
        <button type="submit">Crear</button>
      </form>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  import { useRouter } from 'vue-router'
  import { usePersonaStore } from '../stores/personaStore'
  
  const nombre = ref('')
  const correo = ref('')
  const edad = ref('')
  
  const router = useRouter()
  const store = usePersonaStore()
  
  const submitForm = async () => {
    const data = {
      nombre: nombre.value,
      correo: correo.value,
      edad: Number(edad.value),
    }
  
    try {
      await store.createPersona(data)
      nombre.value = ''
      correo.value = ''
      edad.value = ''
      router.push({ name: 'personas' })
    } catch (error) {
      console.error('Error al crear persona:', error)
    }
  }
  </script>
  