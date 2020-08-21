import { shallowMount } from "@vue/test-utils";
import { expect } from "chai";
import login from "@/views/auth/login.vue";
describe("Login.vue", () => {
  const wrapper: any = shallowMount(login);
  it(" data contains email and password", async () => {
    expect(wrapper.name()).to.equal("Login");
  });
});
