<script setup lang="ts">
import { ref, reactive, watch } from 'vue';
import { useQuasar } from 'quasar';

import { api } from 'boot/axios';
import { useRoute, useRouter } from 'vue-router';
import CountriesList from './CountriesList.vue';
import type { CountryDetails } from 'src/types';

const $q = useQuasar();
const listOfContries = reactive<CountryDetails[]>([]);
const route = useRoute();
const router = useRouter();
const region = ref(
  (route.query.region as string) !== undefined
    ? (route.query.region as string)
    : ''
);
watch(region, async (newRegion) => {
  router.push({ query: { region: newRegion } });
  loadCountriesRegion();
});

const loadCountriesRegion = async () => {
  $q.loading.show();
  listOfContries.length = 0;
  listOfContries.push(...(await api.get(`/region/${region.value}`)).data);
  $q.loading.hide();
};
const loadCountries = async () => {
  $q.loading.show();
  listOfContries.length = 0;
  listOfContries.push(...(await api.get('/all')).data);
  $q.loading.hide();
};

if (region.value.length > 0) {
  loadCountriesRegion();
} else {
  loadCountries();
}
</script>
<template>
  <section class="countries-wrapper">
    <select v-model="region">
      <option disabled value="">Filter by region</option>
      <option value="Africa">Africa</option>
      <option value="America">America</option>
      <option value="Asia">Asia</option>
      <option value="Europe">Europe</option>
      <option value="Oceania">Oceania</option>
    </select>
    <CountriesList :listOfContries="listOfContries" />
  </section>
</template>
<style scoped lang="scss">
.countries-wrapper {
  max-width: 1375px;
  margin-inline: auto;
  width: 100%;
  padding: 16px;
  min-height: 100dvh;
  select {
    margin-block: 2rem;
    height: 2rem;
    border-radius: 5px;
    padding: 6px;
  }
}
</style>
