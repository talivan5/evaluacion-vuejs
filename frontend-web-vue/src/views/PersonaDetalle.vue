<template>
    <div>
      <h1>Detalle de Persona</h1>
      <div v-if="persona">
        <p><strong>Nombre:</strong> {{ persona.nombre }}</p>
        <p><strong>Correo:</strong> {{ persona.correo }}</p>
        <p><strong>Edad:</strong> {{ persona.edad }}</p>
      </div>
      <div v-else>
        <p>Cargando...</p>
      </div>
    </div>
  </template>
  
  <script setup>
  import { onMounted, computed } from 'vue'
  import { usePersonaStore } from '../stores/personaStore'
  
  const props = defineProps({
    id: {
      type: String,
      required: true
    }
  })
  
  const store = usePersonaStore()
  
  onMounted(() => {
    store.fetchPersona(props.id)
  })
  
  const persona = computed(() => store.persona)
  </script>
  