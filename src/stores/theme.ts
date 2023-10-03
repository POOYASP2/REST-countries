import { defineStore } from 'pinia';

export const useTheme = defineStore('counter', {
  state: () => ({
    darkMode: localStorage.theme === 'dark' ? true : false,
  }),

  actions: {
    ToggleTheme() {
      this.darkMode = !this.darkMode;
      localStorage.theme = this.darkMode ? 'dark' : 'light';
    },
  },
});
