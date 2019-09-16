import React from "react";

/**
 * 
 * Functional react component for congratulatory message.
 * @function
 * @param {object} props-React props.
 * @returns { JSX.Element }- Rendered component (or nul if `success` prop is)
 */

export default (props) => {
    if (props.success) {
        return (
            <div data-test="component-congrats">
                <span data-test="congrats-message">
                    Congratulations! You guessed the world!
                </span>
            </div>
        )
    } else {
        return (
            <div data-test="component-congrats"/>
        )
    }
}