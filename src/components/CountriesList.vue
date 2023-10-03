<script setup lang="ts">
import ACountry from 'components/ACountry.vue';
import { reactive } from 'vue';
import { api } from 'boot/axios';
import type { CountryDetails } from 'src/types';
const listOfContries = reactive<CountryDetails[]>([]);
const loadCountries = async () => {
  listOfContries.length = 0;
  listOfContries.push(...(await api.get('/all')).data);
};
loadCountries();
</script>

<template>
  <div class="countries-wrapper">
    <ACountry
      v-for="country in listOfContries"
      :key="country.name.official"
      :flag="country.flags.png"
      :name="country.name.official"
      :population="country.population"
      :region="country.region"
      :capital="country.capital"
    />
  </div>
</template>
<style lang="scss" scoped>
.countries-wrapper {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  width: 100%;
  gap: 16px;
  justify-items: center;
}
</style>
