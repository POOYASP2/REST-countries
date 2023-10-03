<script setup lang="ts">
import { useRoute } from 'vue-router';
import { RouterLink } from 'vue-router';
import type { CountryDetails } from 'src/types';
import BorderCountry from './BorderCountry.vue';
interface CountryDetailProps {
  country: CountryDetails;
}
const props = defineProps<CountryDetailProps>();
const {
  name,
  flags,
  population,
  region,
  subregion,
  tld,
  currencies,
  languages,
  borders,
  capital,
} = props.country;
console.log(borders);
</script>
<template>
  <div class="country-details-page">
    <div class="flag_wrapper">
      <img :src="flags.png" alt="Country flags" />
    </div>
    <div class="country-details">
      <h3 class="name">{{ name?.official }}</h3>
      <div class="details">
        <div class="details__col1">
          <p>
            <span class="detail__title">Native Name:</span
            >{{ name.nativeName[Object.keys(name.nativeName)[0]].official }}
          </p>
          <p><span class="detail__title">Population:</span> {{ population }}</p>
          <p><span class="detail__title">Region:</span>{{ region }}</p>
          <p><span class="detail__title">Sub Region:</span>{{ subregion }}</p>
          <p v-if="capital">
            <span class="detail__title">Capital:</span>{{ capital[0] }}
          </p>
        </div>
        <div class="details__col2">
          <p>
            <span class="detail__title">Top Level Domain:</span
            ><span v-for="(item, index) in tld" :key="index">{{ item }}</span>
          </p>
          <p>
            <span class="detail__title">Currencies:</span
            ><span v-for="(item, index) in currencies" :key="index">{{
              item.name
            }}</span>
          </p>
          <p>
            <span class="detail__title">Languages:</span
            ><span v-for="(item, index) in languages" :key="index">{{
              item
            }}</span>
          </p>
        </div>
      </div>
      <div v-if="borders" class="border-countries">
        <span class="detail__title">Border Countries:</span>
        <BorderCountry :borders="borders" />
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
.detail__title {
  margin-inline-end: 1ch;
  font-weight: 600;
}
.country-details-page {
  display: flex;
  gap: 32px;
  .details {
    display: flex;
    gap: 24px;
  }
  @media (max-width: 768px) {
    flex-direction: column;
    .details {
      flex-direction: column;
    }
  }
  @media (min-width: 768px) {
    flex-direction: row;
  }
}
</style>
