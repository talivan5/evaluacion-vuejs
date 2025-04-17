import { defineStore } from 'pinia';
import api from '../services/api'; 

export const usePersonaStore = defineStore('persona', {
  state: () => ({
    personas: [],
    persona: null,
  }),

  actions: {
    async fetchPersonas() {
      try {
        const response = await api.get('/');
        this.personas = response.data;
        console.log(this.personas);
        
      } catch (error) {
        console.error('Error fetching personas:', error);
      }
    },

    async fetchPersona(id:any) {
      try {
        const response = await api.get(`/${id}`);
        this.persona = response.data;
      } catch (error) {
        console.error('Error fetching persona:', error);
      }
    },

    async createPersona(data:any) {
      try {
        const response = await api.post('/', data);
        this.personas.push(response.data);  
      } catch (error) {
        console.error('Error creating persona:', error);
      }
    },

    async updatePersona(id:any, data:any) {
      try {
        const response = await api.put(`/${id}`, data);
        const index = this.personas.findIndex(persona => persona._id === id);
        if (index !== -1) {
          this.personas[index] = response.data;  
        }
      } catch (error) {
        console.error('Error updating persona:', error);
      }
    },

    async deletePersona(id:any) {
      try {
        await api.delete(`/${id}`);
        this.personas = this.personas.filter(persona => persona._id !== id);
      } catch (error) {
        console.error('Error deleting persona:', error);
      }
    },
  },
});
