<script setup lang="ts">
import { RouterLink } from 'vue-router';
import type { CountryDetails } from 'src/types';
import { api } from 'boot/axios';
import { reactive } from 'vue';
interface borderListProps {
  name: CountryDetails['name'];
  cca3: CountryDetails['cca3'];
}

const borderList = reactive([{}] as Array<borderListProps>);
const props = defineProps<{ borders: string[] }>();
const getCountryWithName = async (codes: string[]) => {
  borderList.length = 0;
  borderList.push(
    ...(
      await api.get(
        `/alpha/?codes=${codes.map((code) => `${code}`)}&fields=name,cca3`
      )
    ).data
  );
};
getCountryWithName(props.borders);
</script>
<template>
  <div class="border-country-wrapper" v-if="borderList">
    <RouterLink
      class="border-country__link"
      v-for="(country, index) in borderList"
      :key="index"
      :to="country.cca3 ? country.cca3 : '/'"
    >
      {{ country?.name?.official }}
    </RouterLink>
  </div>
</template>
<style lang="scss" scoped>
.border-country-wrapper {
  margin-block: 8px;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  font-size: 10px;
  color: black;
}
.border-country__link {
  text-decoration: none;
  padding: 6px;
  border-radius: 8px;
  border: 1px solid black;
  background: hsl(0, 0%, 98%);
}
</style>
