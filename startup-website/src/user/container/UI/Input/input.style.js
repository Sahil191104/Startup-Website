import { styled } from "styled-components";

export const InputBox = styled.input`
    min-height: calc(1.5em + 0.75rem + 2px);
    background-color:${props => props.errorText ? 'rgb(237, 174, 174)' : '#EEF9FF'} ;
    padding-top: 1rem !important;
    padding-bottom: 1rem !important;
    padding-right: 1.5rem !important;
    padding-left: 1.5rem !important;
    border: ${props => props.errorText ? '1px solid red': '0'};
`;

export const InputError = styled.span`
    color: red;
    display: ${props => props.errorText ? 'inline-block' : 'none'};
`;