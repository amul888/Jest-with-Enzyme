import React from "react";
import Enzyme, { shallow } from "enzyme";
import EnzymeAdapter from "enzyme-adapter-react-16";

import { findByTestAttr } from "./test/testUtils";
import Congrats from "./Congrats";


Enzyme.configure({adapter:new EnzymeAdapter()});

const setup = (props={})=>{
    // props = {success: true}
    return shallow(<Congrats {...props}/>)
}
test("renders without error", ()=>{
 const wrapper = setup();
 const component = findByTestAttr(wrapper,'component-congrats');
 expect(component.length).toBe(1);
})

test("renders no text when `success` props is false", ()=>{
 const wrapper = setup({success:false});
 const component = findByTestAttr(wrapper,'component-congrats');
 expect(component.text().length).toBe(0);

})

test("renders non-reply congrtas message when `success` props is true", ()=>{
    const wrapper = setup({success:true});
    const message = findByTestAttr(wrapper,'congrats-message');
    expect(message.text()).not.toBe(0);
    
})
