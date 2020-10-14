<template>
  <div class="pa-6 pt-9">
    <v-row>
      <v-col cols="12" sm="12" md="8">
        <div class=""><b>Welcome,</b> John Doe</div>
        <v-row class="pt-6">
          <v-col v-for="(card, index) in cards" :key="index">
            <dashcard
              class="ma-3 ml-0 "
              :bgColor="card.bgColor"
              :bgImg="card.bgImg"
              :bgPos="card.bgPos"
              :bgSize="card.bgSize"
              :text="card.text"
            />
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="12" md="4" class="pt-0 pl-0 pr-0">
        <notification />
      </v-col>
    </v-row>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  name: "dashboard",
  components: {
    dashcard: () => import("@/components/dashboard/dashboardcards.vue"),
    notification: () => import("@/components/dashboard/notificationbox.vue")
  }
})
export default class Dashboard extends Vue {
  cards = [
    {
      bgColor: "#7CBFF1",
      bgImg: "/img/bluebackground.svg",
      bgPos: "",
      text: "Total number of properties"
    },
    {
      bgColor: "#CF5757",
      bgPos: "right top",
      bgImg: "/img/red-top-patterns.svg",
      bgSize: "150px 120px",
      text: "Number of sold properties"
    },
    {
      bgColor: "#BD93BD",
      bgImg: "/img/purple-top-patterns.svg",
      bgPos: "right top",
      bgSize: "120px 120px",
      text: "Number of bought properties"
    }
  ];
  get userName() {
    return this.$store.state.user.user.name;
  }
}
</script>
