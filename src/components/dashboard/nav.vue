<template>
  <nav class="d-flex pt-4 pl-6 pr-6 justify-space-between align-center">
    <div class="font__purple font__sm font__bold">{{$router.history.current.name}}</div>
    <div>
      <v-avatar color="#FFBC44" size="45" class="font__sm">
        <span class="white--text headline">HE</span>
      </v-avatar>
    </div>
  </nav>
</template>
<style lang="scss" scoped>
nav {
  width: 100%;
}
</style>
