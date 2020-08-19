import { expect } from "chai";
import { shallowMount } from "@vue/test-utils";
import HelloWorld from "@/components/HelloWorld.vue";

describe("HelloWorld.vue", () => {
    it("renders props.msg when passed", () => {
        // Target object is deeply (but not strictly) equal to {a: 1}
        expect({ a: 1 }).to.eql({ a: 1 }).but.not.equal({ a: 1 });

        // Target array is deeply (but not strictly) equal to [1, 2]
        expect([1, 2]).to.eql([1, 2]).but.not.equal([1, 2]);


    });
});
