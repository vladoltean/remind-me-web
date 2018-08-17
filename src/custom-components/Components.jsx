import React from 'react';
import styled from 'styled-components'

/**
 * Generic button
 */
export const MyBtn = (props) => {

    const {className, text, otherProps} = {...props};
    const classNames = ['btn', className].join(' ');

    if (!text) {
        console.error("Every button must contain a text property!");
    }

    const StyledButton = styled.button`
        border: none;
        border-radius: unset;
        box-shadow: 2px 2px 5px gray;
    `;

    return <StyledButton className={classNames} {...otherProps}>{text}</StyledButton>

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

/**
 * Generic bootstrap row.
 */
export const MyRow = (props) => {

    const {className, otherProps} = {...props};
    const classNames = ['row', className].join(' ');

    return <div className={classNames} {...otherProps}>{props.children}</div>

};
