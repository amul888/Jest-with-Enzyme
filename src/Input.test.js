import React from "react";
import { shallow } from "enzyme";

import { findByTestArr, storeFactory } from "./test/testUtils";
import Input from "./Input";

const setup=(initialState={})=>{
    const store = storeFactory(initialState);
    const wrapper = shallow(<Input store={store}/>).dive().dive();
    //console.log(wrapper.debug());
    return wrapper;
}
setup();
describe("render",()=>{
    describe("word has not been guessed",()=>{
        test("renders componet without error",()=>{

        });
        test("render input box",()=>{

        });
        test("renders submit button ",()=>{

        });
    })
 
})
describe("update state",()=>{
    test("renders componet without error",()=>{

    });
    test("render input box",()=>{

    });
    test("does not render submit button",()=>{

    });
})
