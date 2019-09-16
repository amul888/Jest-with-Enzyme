
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
