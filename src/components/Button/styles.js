import styled from "styled-components";

export const Button = styled.button`

    border: ${ props => props.theme === 'primary' ? 'none' : ' 1px solid rgb(44,12,231)'} ;
    background: ${ props => props.theme === 'primary' ? 'rgb(44,12,231)' : 'transparent' };
    color: #ffff;
    padding: 15px 30px;
    width: fit-content;
    border-radius: 40px;
    cursor: pointer;


    &:hover {
        opacity: 0.8;

    }

    &:active {
        opacity: 0.5;
    }

`