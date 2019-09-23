import CheckPropTypes from "check-prop-types";
import { createStore } from "redux";

import rootReducer from "../../src/reducers";

export const storeFactory =(initialState) =>{
    return createStore(rootReducer,initialState);
}
/**
 * 
 * return ShallowWrapper conating node(s) with the given data-test value
 * @param {ShallowWrapper} wrapper-Enyme shallow wrapper to search within
 * @param {string} val -Value of data-test attribute for search.
 * @return {ShallowWrapper}
 */
export const findByTestAttr = (wrapper, val) => {
    return wrapper.find(`[data-test="${val}"]`)
}

export const checkProps =(component, conformingProps)=>{
    const propError = CheckPropTypes(
        component.propTypes,
        conformingProps,
        'prop',
        component.name)
        expect(propError).toBeUndefined();
}
