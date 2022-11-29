<template>
  <h1>test3e</h1>
  <Menu/>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Menu from "@/views/Menu.vue";

export default defineComponent({
  name: 'HomeView',
  components: {Menu},
});
</script>
