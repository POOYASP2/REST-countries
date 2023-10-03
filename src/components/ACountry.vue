<script lang="ts" setup>
import type { CountryDetails } from 'src/types';
import { RouterLink } from 'vue-router';
import { useTheme } from 'stores/theme';
interface ACountryProps {
  name: CountryDetails['name']['official'];
  flag: CountryDetails['flags']['png'];
  population: CountryDetails['population'];
  region: CountryDetails['region'];
  capital?: CountryDetails['capital'];
  code: CountryDetails['cca3'];
}
const theme = useTheme();

const props = defineProps<ACountryProps>();
const { name, flag, population, region, capital, code } = props;
</script>

<template>
  <RouterLink
    :class="`country ${theme.darkMode ? 'country--dark' : null}`"
    :to="`country/${code}`"
  >
    <div class="country__flag-holder">
      <img :src="flag" alt="" />
    </div>
    <div class="country__descrption">
      <div class="country__descrption__name">
        {{ name }}
      </div>
      <div>
        <div class="country__descrption__pupilation">
          Population:
          <span>{{ population }}</span>
        </div>
        <div class="country__descrption__region">
          Region:
          <span>{{ region }}</span>
        </div>
        <div v-if="capital" class="country__descrption__capital">
          Capital:
          <span>{{ capital[0] }}</span>
        </div>
      </div>
    </div>
  </RouterLink>
</template>
<style scoped lang="scss">
.country {
  border-radius: 12px;
  background: white;
  color: black;
  width: fit-content;
  overflow: hidden;
  cursor: pointer;
  text-decoration: none;
  &__flag-holder {
    display: flex;

    aspect-ratio: 4/3 auto;
    & > img {
      width: 100%;
      object-fit: cover;
    }
  }
  .country__descrption {
    padding: 16px;
    &__name {
      font-size: 18px;
      font-weight: 600;
      margin-bottom: 8px;
    }
  }
  &--dark {
    background: $dark-blue;
    color: white;
    .country__descrption {
      &__name {
        color: white;
      }
      &__pupilation {
        color: white;
      }
      &__region {
        color: white;
      }
      &__capital {
        color: white;
      }
    }
  }
}
</style>
