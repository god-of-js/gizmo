<template>
  <div class="notification__box pa-5">
    <div class="d-flex align-center">
      <v-icon color="#FFBC44" class="v__icon mr-3">mdi-bell</v-icon>
      <span class="font__xx__md">Notifications</span>
    </div>
    <div class="notifications">
      <div class="notification pt-7 d-flex align-center" v-for="(notification, index) in 5" :key="index">
        <v-avatar color="#FFBC44" size="40" class="font__sm">
          <span class="white--text headline">HE</span>
        </v-avatar>
        <div class="pl-3">
            <div class="not__text font__bold">John Doe added your house to favorites</div>
            <div class="not__time font__x__sm">10 mins ago</div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.notification__box {
  border: 1px solid #e0e0e0;
  box-sizing: border-box;
  border-radius: 10px;
  height: 74vh;
  .v__icon {
    font-size: 1.3em;
  }
  .not__text{
      font-size: 0.8em;
  }
  .not__time{
      color: #A1A1A1;
  }
}
</style>