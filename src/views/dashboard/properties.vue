<template>
  <div class="pl-6 pt-10 pr-10">
    <section class="table text-left">
      <v-row class="font__sm border__bottom font__bold">
        <v-col>S/N</v-col>
        <v-col>PROPERTY TYPE</v-col>
        <v-col>DATE ADDED</v-col>
        <v-col>REACTIONS</v-col>
        <v-col>ACTIONS</v-col>
      </v-row>
      <v-row class=" border__bottom font__sm pt-2 pb-1" v-for="(property, index) in 5" :key="index">
        <v-col>{{index+1}}</v-col>
        <v-col>Duplex</v-col>
        <v-col class="date">08 Mar 2020</v-col>
        <v-col>
            <span class="mr-1"><v-icon color="#E45865" class="icon">mdi-heart</v-icon> <span>1</span></span>
            <span class="ml-1"><v-icon color="#fbb034" class="icon">mdi-chat</v-icon> <span>1</span></span>
          
          
        </v-col>
        <v-col>
          <button class="ml-1 mr-1"><v-icon class="icon">mdi-eye</v-icon></button>
          <button class="ml-1 mr-1"><v-icon class="icon">mdi-pencil</v-icon></button>
        </v-col>
      </v-row>
    </section>
  </div>
</template>
<style lang="scss" scoped>
.table {
  .border__bottom {
    border-bottom: 1px solid #e0e0e0;
  }
  .date {
    color: #7e7e7e;
  }
  .icon{
      font-size: 1.3em;
  }
}
</style>