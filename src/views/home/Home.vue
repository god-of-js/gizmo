<template>
  <div class="home">
      <section class="home__first__layer d-flex align-center"> 
        <span class="font__white font__bold ml-12 font__x__md"> Properties</span>
      </section>
      <section class="d-flex mt-n7 justify-center"> 
        <search />
      </section>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  name: "home",
  components: {
    search: () => import("@/components/home/search.vue")
  }
})
export default class Home extends Vue {
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

<style> 
.home__first__layer{
  background-image: url("/img/homeimg.svg");
  height: 60vh;
  background-position: right;
  background-size: 800px 1700px;
  width: 100%;
  background-color: #1C528A;
}
</style>