import React from "react";
import { shallow } from "enzyme";

import {findByTestAttr, storeFactory } from "./test/testUtils";
import Input from "./Input";

const setup = (initialState = {}) => {
    const store = storeFactory(initialState);
    const wrapper = shallow(<Input store={store} />).dive().dive();
    //console.log(wrapper.debug());
    return wrapper;
}
setup();
describe("render", () => {
    describe("word has not been guessed", () => {
        test("renders componet without error", () => {

        });
        test("render input box", () => {

        });
        test("renders submit button ", () => {

        });
    });

    describe("word has been guessed", () => {
        let wrapper;
        beforeEach(() => {
            const initialState = { success: false };
            //wrapper = setup(initialState); // getting message : Unexpected key "success" found in preloadedState argument passed to createStore. Expected to find one of the known reducer keys instead: "sucessReducer". Unexpected keys will be ignored.
            wrapper = setup();

        })
        test("renders componet without error", () => {
            const componet =findByTestAttr(wrapper, "component-input");
            expect(componet.length).toBe(1);
        });
        test("does not render input box", () => {
            const inputBox =findByTestAttr(wrapper, "input-box");
            expect(inputBox.length).toBe(1);
        });
        test("does not render submit button", () => {
            const submitButton =findByTestAttr(wrapper, "submit-button");
            expect(submitButton.length).toBe(1);
        });
    });

});


describe("update state", () => {
    // test("renders componet without error", () => {

    // });
    // test("render input box", () => {

    // });
    // test("does not render submit button", () => {

    // });
})
