import { shallowMount } from "@vue/test-utils";
import { expect } from 'chai';
import login from '@/views/auth/login.vue';
describe('Login.vue', () => {
    let wrapper: any;
    beforeEach(() => {
        wrapper = shallowMount(login);
    })
    it(' data contains email and password', () => {
        wrapper.setData({ email: 'henryeze019@gmail.com', password: 'mmmmmmmm' })
        console.log(wrapper.name(), 'name')
        expect(wrapper.name()).to.equal('Login')
    })
})