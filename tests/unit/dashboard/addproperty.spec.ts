import addproperty from "@/views/dashboard/addproperty.vue";
import { shallowMount } from "@vue/test-utils";
import { expect } from "chai";
import sinon from "sinon"
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
          price: 0
        },
        disabled: true,
        loading: false
      };
    }
  });
  const spy = sinon.spy();
  it("button should be disabled when all compulsory fields are not filled", async () => {
      expect(wrapper.vm.$data.disabled).to.equal(true);
  });
  it("button should be abled when all compulsory fields are filled", async () => {
    await wrapper.setData({
      body: {
        type: "duplex",
        size: "40 acres",
        noOfRooms: 70,
        extra: "just a bit of information",
        location: "nsukka",
        state: "enugu,nsukka",
        landmark: "unn",
        images: [1, 2, 3, 4],
        price: 0,
      }
    })
      expect(wrapper.vm.$data.disabled).to.equal(false);
  });
  it("Check variables been passed in", async () => {
    wrapper.find("button.add__button").trigger("click");
    const clickSpy = sinon.spy(addproperty.component)

    console.log(wrapper.vm.$data.disabled)
    expect(wrapper.vm.$data.disabled).to.equal(true);
    expect(wrapper.vm.$data.loading).to.equal(true);
    expect(typeof wrapper.vm.$data.body.noOfRooms).to.equal(typeof 0);
    expect(typeof wrapper.vm.$data.body.price).to.equal(typeof 0);
  });
});
