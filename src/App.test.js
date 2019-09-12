import React from "react";
import ReactDOM from 'react-dom';
import Enzyme, { shallow } from "enzyme";
import EnzymeAdapter from "enzyme-adapter-react-16";

import App from "./App";
import { exportAllDeclaration } from "@babel/types";

Enzyme.configure({ adapter: new EnzymeAdapter() });

/**
 * 
 * Factory function to create a shallowWrapper for the App Component
 * @function setup
 * @param {object} props- Component props specific to this setup
 * @param {any} state= Initial satte fro setup
 * @return {shallawWrapper} 
 */

const setup = (props = {}, state = null) => {
    return shallow(<App {...props} />)
}

/**
 * 
 * return ShallowWrapper conating node(s) with the given data-test value
 * @param {ShallowWrapper} wrapper-Enyme shallow wrapper to search within
 * @param {string} val -Value of data-test attribute for search.
 * @return {ShallowWrapper}
 */
const findByTestAttr = (wrapper, val) => {
    return wrapper.find(`[data-test="${val}"]`)
}

test("renders without error", () => {
    const wrapper = setup();
    const appComponent = findByTestAttr(wrapper,'component-app');
    expect(appComponent.length).toBe(1);
});

test("renders increment button", () => {
    const wrapper = setup();
    const button = findByTestAttr(wrapper,'increment-button');
    expect(button.length).toBe(1);
});

test("renders counter display", () => {
    const wrapper = setup();
    const counterDispaly = findByTestAttr(wrapper,'counter-display');
    expect(counterDispaly.length).toBe(1);
});

test("counter start at 0", () => {

});

test("clicking button increments counter display", () => {

});


