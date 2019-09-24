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
describe("render", () => {
    describe("word has not been guessed", () => {
        let wrapper;
        beforeEach(() => {
            const initialState = { success: false };
            //wrapper = setup(initialState); // getting message :Unexpected key "success" found in preloadedState argument passed to createStore. Expected to find one of the known reducer keys instead: "sucessReducer". Unexpected keys will be ignored.
            wrapper = setup(initialState);

        })
        test("renders componet without error", () => {
            const componet =findByTestAttr(wrapper, "component-input");
            expect(componet.length).toBe(1);
        });
        test("render input box", () => {
            const inputBox =findByTestAttr(wrapper, "input-box");
            expect(inputBox.length).toBe(1);
        });
        test("render submit button", () => {
            const submitButton =findByTestAttr(wrapper, "submit-button");
            expect(submitButton.length).toBe(1);
        });
    });

    describe("word has been guessed", () => {
        let wrapper;
        beforeEach(() => {
            const initialState = { success: true };
            wrapper = setup(initialState);

        })
        test("renders componet without error", () => {
            const componet =findByTestAttr(wrapper, "component-input");
            expect(componet.length).toBe(1);
        });
        test("does not render input box", () => {
            const inputBox =findByTestAttr(wrapper, "input-box");
            expect(inputBox.length).toBe(0);
        });
        test("does not render submit button", () => {
            const submitButton =findByTestAttr(wrapper, "submit-button");
            expect(submitButton.length).toEqual(0);
        });
    });

});

describe('redux props',()=>{
    test("has success piece of state as props",()=>{
        const success = true;
        const wrapper = setup({ success });
        const sucessProp = wrapper.instance().props.success;
        expect(sucessProp).toBe(success);
    });
    test("`guessWord` action creator is a function prop",()=>{
        const wrapper= setup();
        const guessWordProp = wrapper.instance().props.guessWord;
        expect(guessWordProp).toBeInstanceOf(Function);
    })
})

describe("update state", () => {
    // test("renders componet without error", () => {

    // });
    // test("render input box", () => {

    // });
    // test("does not render submit button", () => {

    // });
})
