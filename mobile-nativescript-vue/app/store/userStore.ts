import { defineStore } from 'pinia';
import { ref } from 'vue'; 
import axios from 'axios';

export const useUserStore = defineStore('users', () => {
  const users = ref([]);
  const loading = ref(false);

  const fetchUsers = async () => {
    loading.value = true;
    try {
      const res = await axios.get('http://10.0.2.2:3000/users');
      users.value = res.data;
    } catch (e) {
      console.error('Error al cargar usuarios:', e);
    } finally {
      loading.value = false;
    }
  };

  return { users, loading, fetchUsers };
});
