<template>
  <div>
    <h1>Lista de Personas</h1>
    <button @click="createPersona">Crear Persona</button>
    <ul>
      <li v-for="persona in personas" :key="persona._id">
        <router-link :to="{ name: 'personaDetalle', params: { id: persona._id } }">
          {{ persona.nombre }} - {{ persona.correo }}
        </router-link>
        <button @click="editPersona(persona)">Editar</button>
        <button @click="deletePersona(persona._id)">Eliminar</button>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { usePersonaStore } from '../stores/personaStore'

const router = useRouter()
const store = usePersonaStore()

const personas = store.personas

onMounted(() => {
  store.fetchPersonas()
})

const createPersona = () => {
  router.push({ name: 'personaCrear' })
}

const editPersona = (persona) => {
  router.push({ name: 'personaEditar', params: { id: persona._id } })
}

const deletePersona = async (id) => {
  try {
    await store.deletePersona(id)
    await store.fetchPersonas()
  } catch (error) {
    console.error('Error al eliminar persona:', error)
    alert('Ocurrió un error al eliminar la persona')
  }
}

</script>
