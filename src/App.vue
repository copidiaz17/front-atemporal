<script setup>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import { useAuthStore } from '@/stores/authStore'
import { onMounted } from 'vue';

onMounted( async () => {

  const store = useAuthStore();
  await store.get_user();

  console.log('USER', store.user);
});

</script>

<template>
  <Header />

  <RouterView />
  <Footer />
</template>

<style scoped></style>
