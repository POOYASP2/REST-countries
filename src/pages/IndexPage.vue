<template>
  <q-page class="page">
    <CountriesWrapper />
  </q-page>
</template>

<script setup lang="ts">
import CountriesWrapper from 'components/CountriesWrapper.vue';
import { useTheme } from 'stores/theme';
const theme = useTheme();
</script>
