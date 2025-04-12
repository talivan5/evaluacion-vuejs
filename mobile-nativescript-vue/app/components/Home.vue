<template>
    <Page>
        <ActionBar title="Usuarios" />
        <ScrollView>
            <StackLayout>
                <!-- Muestra un indicador de carga -->
                <ActivityIndicator :busy="loading" row="0" />

                <!-- Lista de usuarios -->
                <ListView for="user in users" separatorColor="#ddd">
                    <v-template>
                        <StackLayout class="card">
                            <Image :src="user.avatar" width="100" height="100" stretch="aspectFill" />
                            <Label :text="user.nombre + ' ' + user.apellido" class="name" />
                            <Label :text="user.nacionalidad" class="country" />
                        </StackLayout>
                    </v-template>
                </ListView>
            </StackLayout>
        </ScrollView>
    </Page>
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue'; 
import { useUserStore } from '../store/userStore';

export default defineComponent({
    setup() {
        const store = useUserStore();
        onMounted(() => {
            store.fetchUsers();
        });

        return {
            users: store.users,
            loading: store.loading,
        };
    },
});
</script>

<style scoped>
.card {
    margin: 10;
    padding: 10;
    border-width: 1;
    border-color: #ccc;
    border-radius: 5;
    background-color: #fff;
}

.name {
    font-size: 18;
    font-weight: bold;
    margin-top: 10;
}

.country {
    font-size: 16;
    color: #666;
}
</style>
