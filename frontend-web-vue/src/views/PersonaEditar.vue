<!-- src/views/PersonaEditar.vue -->
<template>
    <div>
      <h1>Editar Persona</h1>
      <form @submit.prevent="submitForm" v-if="persona">
        <div>
          <label for="nombre">Nombre:</label>
          <input v-model="personaData.nombre" id="nombre" required />
        </div>
        <div>
          <label for="correo">Correo:</label>
          <input v-model="personaData.correo" id="correo" required />
        </div>
        <div>
          <label for="edad">Edad:</label>
          <input v-model="personaData.edad" id="edad" type="number" required />
        </div>
        <button type="submit">Guardar</button>
      </form>
      <div v-else>
        <p>Cargando datos...</p>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue'
  import { usePersonaStore } from '../stores/personaStore'
  import { useRoute, useRouter } from 'vue-router'
  
  const route = useRoute()
  const router = useRouter()
  const store = usePersonaStore()
  
  const personaData = ref({
    nombre: '',
    correo: '',
    edad: 0
  })
  
  const persona = ref(null)
  
  onMounted(async () => {
    await store.fetchPersona(route.params.id)
    persona.value = store.persona
    if (persona.value) {
      personaData.value = { ...persona.value }
    }
  })
  
  const submitForm = async () => {
    await store.updatePersona(route.params.id, personaData.value)
    router.push('/personas')
  }
  </script>
  