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
        disabled: true,
        loading: false
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
    console.log(wrapper.find(".add__button"))
    await wrapper.find(".add__button").trigger("click");
    expect(wrapper.vm.$data.disabled).to.equal(true);
    expect(wrapper.vm.$data.loading).to.equal(true);
    expect(typeof wrapper.vm.$data.body.noOfRooms).to.equal(typeof 0);
    expect(typeof wrapper.vm.$data.body.price).to.equal(typeof 0);
  });
});
