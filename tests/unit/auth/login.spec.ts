import { shallowMount, createLocalVue } from "@vue/test-utils";
import chai from "chai";
import spies from "chai-spies";
import Vuex from "vuex";
import login from "@/views/auth/login.vue";
import { expect } from "chai";
const localVue = createLocalVue();
chai.use(spies);
localVue.use(Vuex);
describe("Login.vue", () => {
  let actions: any;
  let store;
  beforeEach(() => {
    actions = {
      login: chai.spy()
    };
    store = new Vuex.Store({
      actions
    });
  });
  const wrapper: any = shallowMount(login, { store, localVue });
  wrapper.setData({
    body: {
      email: "henryeze019@gmail.com",
      password: "mmmmmmmm"
    }
  });
  afterEach(() => {
    wrapper.destroy();
  });
  it("Component name equals Login", async () => {
    chai.expect(wrapper.name()).to.equal("Login");
  });
  it("Activated function", async () => {
    await wrapper.find("button").trigger("click");
    wrapper.vm.$emit("load", true);
    expect(wrapper.emitted().load[0][0]).to.equal(true);
  });
  it("stop loader", () => {
    wrapper.vm.$emit("load", false);
    expect(wrapper.emitted().load[1][0]).to.equal(false);
  });
});
