import { defineStore } from 'pinia';
import { ref } from 'vue';
import axios from 'axios';

export const useUserStore = defineStore('users', () => {
  const users = ref([]);
  const loading = ref(false);
  const error = ref('');

  const fetchUsers = async () => {
    loading.value = true;
    try {
      const res = await axios.get('http://localhost:3000/users');
      users.value = res.data;
      console.log(users.value);
      
    } catch (err) {
      error.value = 'Error al obtener usuarios';
    } finally {
      loading.value = false;
    }
  };

  return { users, loading, error, fetchUsers };
});
