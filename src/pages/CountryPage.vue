<script setup lang="ts">
import { useRoute } from 'vue-router';
import { reactive, watch } from 'vue';
import { useTheme } from 'stores/theme';
import { api } from 'boot/axios';
import type { CountryDetails } from 'src/types';
import CountryDetail from 'components/CountryDetail.vue';
import { useQuasar } from 'quasar';
const $q = useQuasar();
const theme = useTheme();

const route = useRoute();
let slug = Array.isArray(route.params.countrySlug)
  ? route.params.countrySlug[0]
  : route.params.countrySlug;
watch(
  () => route.params.countrySlug,
  (newSlug) => {
    console.log('test');

    slug = Array.isArray(newSlug) ? newSlug[0] : newSlug;
    getCountryWithName(slug);
  }
);
const country = reactive<CountryDetails[]>([]);

const getCountryWithName = async (code: string) => {
  $q.loading.show();
  country.length = 0;
  country.push(...(await api.get(`/alpha/${code}`)).data);
  $q.loading.hide();
};
getCountryWithName(slug);

const backInHistory = () => {
  window.history.back();
};
</script>
<template>
  <q-page class="page">
    <button
      :class="`back-button ${theme.darkMode ? 'back-button--dark' : null}`"
      @click="backInHistory"
    >
      Back &larr;
    </button>
    <div v-if="country.length > 0">
      <CountryDetail :country="country[0]" />
    </div>
  </q-page>
</template>
<style lang="scss" scoped>
.back-button {
  margin-inline-end: auto;
  height: fit-content;
  &--dark {
    color: white;
    background: #000;
  }
}
</style>
