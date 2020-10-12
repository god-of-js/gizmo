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
          noOfRooms: 0,
          location: "",
          reason: "",
          images: []
        },
        disabled: false
      };
    }
  });
  it("throw error if the forms fields are absent", async () => {
    await wrapper.find("button").trigger("click");
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
    expect(wrapper.vm.$data.disabled).to.equal(false);
    expect(wrapper.vm.$data.loading).to.equal(true);
    // check if action was triggered.
  });
});
