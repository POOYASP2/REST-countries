<script setup lang="ts">
import { useTheme } from 'stores/theme';
const theme = useTheme();
</script>
<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated class="bg-primary text-white">
      <q-toolbar :class="`header ${theme.darkMode ? 'header--dark' : null}`">
        <q-toolbar-title> Where in the world? </q-toolbar-title>
        <button @click="theme.ToggleTheme">Dark theme toggle</button>
      </q-toolbar>
    </q-header>

    <q-page-container
      :class="`page-countainer ${
        theme.darkMode ? 'page-countainer--dark' : null
      }`"
    >
      <router-view />
    </q-page-container>
  </q-layout>
</template>
<style lang="scss" scoped>
.header {
  padding: 20px;
  background: white;
  color: black;
  button {
    border: none;
    outline: none;
    padding: 12px;
    border-radius: 14px;
  }
  &--dark {
    background: $dark-blue;
    color: white;
    button {
      background: $darker-blue;
      color: white;
    }
  }
}
</style>
