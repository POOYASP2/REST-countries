<script setup lang="ts">
import type { CountryDetails } from 'src/types';
import ACountry from 'components/ACountry.vue';

interface CountriesListProps {
  listOfContries: Array<CountryDetails>;
}
const props = defineProps<CountriesListProps>();
const listOfContries = props.listOfContries;
console.log(listOfContries);
</script>

<template>
  <div>
    <div class="countries-wrapper__list" v-if="listOfContries.length > 0">
      <ACountry
        v-for="country in listOfContries"
        :key="country.cca3"
        :flag="country.flags.png"
        :name="country.name.official"
        :population="country.population"
        :region="country.region"
        :capital="country.capital"
        :code="country.cca3"
      />
    </div>
  </div>
</template>
<style lang="scss" scoped>
.countries-wrapper__list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  width: 100%;
  gap: 16px;
  justify-items: center;
}
</style>
