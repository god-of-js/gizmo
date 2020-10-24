<template> 
    <div > 
        
        <div class="white__bg ml-4 pr-3 pl-2 font__purple font_x__sm">Property Specification</div>
        <div class="container grey__border pa-3 mt-n3 pt-4 pb-16">
            <div class="border__bottom pl-2 pr-2 pa-4 font__sm ma-3 d-flex justify-space-between" > 
                <span>Rooms available </span>
                <span>{{rooms? rooms: "Unanswered "}} </span>
             </div>
            <div class="border__bottom pl-2 pr-2 pa-4 font__sm ma-3 d-flex justify-space-between" > 
                <span>Size</span>
                <span>{{size? size: "Unanswered "}} </span>
             </div>
            <div class="border__bottom pl-2 pr-2 pa-4 font__sm ma-3 d-flex justify-space-between" > 
                <span>Furnitures</span>
                <span>{{furnitures? furnitures: "Unanswered "}} </span>
             </div>
            <div class="border__bottom pl-2 pr-2 pa-4 font__sm ma-3 mb-16 d-flex justify-space-between" > 
                <span>Bathrooms</span>
                <span>{{bathrooms? bathrooms: "Unanswered "}} </span>
             </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

@Component({
  name: "dashboard-card"
})
export default class DashboardCard extends Vue {
  @Prop() rooms!: string;
  @Prop() bathrooms!: string;
  @Prop() furnitures!: string;
  @Prop() size!: string;
  get userName() {
    return this.$store.state.user.user.name;
  }
}
</script>
<style> 
.grey__border{
    border: 0.5px solid #7E7E7E;
    border-radius: 10px;
}
.white__bg{
    background: white none repeat scroll 0 0;
    display: inline-block;
    padding: 0 2px;
}
</style>