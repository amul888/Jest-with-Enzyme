import React from "react";
import Enzyme, { shallow } from "enzyme";
import EnzymeAdapter from "enzyme-adapter-react-16";

import App,{ UnconnectedApp } from "./App";
import { storeFactory } from "./test/testUtils";


const setup = (state={})=>{
    const store = storeFactory(state);
    const wrapper = shallow(<App store={store}/>).dive().dive();
    return wrapper;
}

describe("redux properties",()=>{
    test("has access to `success` state",()=>{
        const success = true;
        const wrapper = setup({ success });
        const sucessProp = wrapper.instance().props.success;
        expect(sucessProp).toBe(success);
    });
    test("has access to `secretWord` state",()=>{
        const secretWord ="party";
        const wrapper = setup({ secretWord });
        const secretWordProp = wrapper.instance().props.secretWord;
        expect(secretWordProp).toBe(secretWord);
    });
    test("has access to `guessedWords` state",()=>{
        const guessedWords =[{guessedWord:"train",letterMatchCount:3}];
        const wrapper = setup({ guessedWords});
        const guessedWordsProp = wrapper.instance().props.guessedWords;
        expect(guessedWordsProp).toBe(guessedWords)
    });
    test("`getSecretWord` action creator is a function on the props",()=>{
        const wrapper = setup();
        const getSecretWordProp = wrapper.instance().props.getSecretWord;
        expect(getSecretWordProp).toBeInstanceOf(Function);
    });
    test("`getSecretWord` runs on App mount",()=>{
        const getSecretWordMock = jest.fn();
        const props ={
            getSecretWord:getSecretWordMock,
            success:false,
            guessedWords:[]
        }
        //set up app componet with getSecretWordMock as the getSecretWord prop
        const wrapper = shallow(<UnconnectedApp {...props}/>)
        
        //run lifecycle method
        wrapper.instance().componentDidMount();
         
        //check to see if mock ran
        const getSecretWordCallCount = getSecretWordMock.mock.calls.length;
        expect(getSecretWordCallCount).toBe(1);

    })
})

//previous test ======================


// Enzyme.configure({ adapter: new EnzymeAdapter() });

// /**
//  * 
//  * Factory function to create a shallowWrapper for the App Component
//  * @function setup
//  * @param {object} props- Component props specific to this setup
//  * @param {object} state= Initial satte fro setup
//  * @return {shallawWrapper} 
//  */

// const setup = (props = {}, state = null) => {
//     const wrapper = shallow(<App {...props} />);
//     if(state) wrapper.setState(state);
//     return wrapper; 
// }

// /**
//  * 
//  * return ShallowWrapper conating node(s) with the given data-test value
//  * @param {ShallowWrapper} wrapper-Enyme shallow wrapper to search within
//  * @param {string} val -Value of data-test attribute for search.
//  * @return {ShallowWrapper}
//  */
// const findByTestAttr = (wrapper, val) => {
//     return wrapper.find(`[data-test="${val}"]`)
// }

// test("renders without error", () => {
//     const wrapper = setup();
//     const appComponent = findByTestAttr(wrapper,'component-app');
//     expect(appComponent.length).toBe(1);
// });


// test("renders increment button", () => {
//     const wrapper = setup();
//     const button = findByTestAttr(wrapper,'increment-button');
//     expect(button.length).toBe(1);
// });

// test("renders counter display", () => {
//     const wrapper = setup();
//     const counterDispaly = findByTestAttr(wrapper,'counter-display');
//     expect(counterDispaly.length).toBe(1);
// });

// test("counter start at 0", () => {
//     const wrapper = setup();
//     const initialCounterState = wrapper.state('counter');
//     expect(initialCounterState).toBe(0);
// });

// test("clicking button increments counter display", () => {
//     const counter = 7;
//     const wrapper = setup(null,{counter});

//     //find button and click
//     const button = findByTestAttr(wrapper,'increment-button');
//     button.simulate('click');
    
//     //find display and test value
//     const counterDispaly = findByTestAttr(wrapper,'counter-display');
//     expect(counterDispaly.text()).toContain(counter +1)
// });


