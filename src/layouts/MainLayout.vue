<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated class="bg-primary text-white">
      <q-toolbar class="header">
        <q-toolbar-title> Where in the world? </q-toolbar-title>
        <button>Dark theme toggle</button>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>
<style lang="scss" scoped>
.header {
  padding: 20px;
  background: white;
  color: black;
}
</style>
