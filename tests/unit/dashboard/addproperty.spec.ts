import addproperty from "@/views/dashboard/addproperty.vue";
import { shallowMount } from "@vue/test-utils";
import { expect } from "chai";
describe("addproperty", () => {
  const wrapper = shallowMount(addproperty, {
    data: () => {
      return {
        body: {
          type: "",
          size: "",
          noOfRooms: "",
          extra: "",
          location: "",
          state: "",
          landmark: "",
          images: [],
          price: 0,
          bargain: false
        },
        disabled: true
      };
    }
  });
  it("button should be disabled when all compulsory fields are not filled", () => {
    if (
      wrapper.vm.$data.body.type.length === 0 ||
      wrapper.vm.$data.body.size.length === 0 ||
      wrapper.vm.$data.body.images.length === 0
    )
      expect(wrapper.vm.$data.disabled).to.equal(true);
    else expect(wrapper.vm.$data.disabled).to.equal(false);
  });
  it("form submit", async () => {
    await wrapper.find("button").trigger("click");
    await expect(wrapper.vm.$data.disabled).to.equal(true);
    await expect(wrapper.vm.$data.loading).to.equal(true);
    await expect(typeof wrapper.vm.$data.body.noOfRooms).to.equal(typeof 0);
    console.log(typeof wrapper.vm.$data.body.noOfRooms)
    await expect(typeof wrapper.vm.$data.body.price).to.equal(typeof 0);
    console.log(typeof wrapper.vm.$data.body.price)
    console.log(wrapper.vm.$data.body.ownerId.length)
    await expect(wrapper.vm.$data.body.ownerId.length).to.not.equal(0);
  });
});
