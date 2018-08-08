import React from 'react';

/**
 * Generic button
 */
export const MyBtn = (props) => {

    const {className, text, otherProps} = {...props};
    const classNames = ['btn', 'my-button', className].join(' ');

    if (!text) {
        console.error("Every button must contain a text property!");
    }

    return <button className={classNames} {...otherProps}>{text}</button>

};

/**
 * Generic Form input.
 */
export const FormInputGroup = (props) => {
    const {placeholder, otherProps} = {...props};
    return (
        <div className="form-group">
            <input type="text" className="form-control" placeholder={placeholder} {...otherProps}/>
        </div>)
};