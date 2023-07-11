import { styled } from "styled-components";

const BaseButton = styled.button`
    margin-left: 25px;
    border-radius: 50px;
    padding: 8px 25px;
    white-space: nowrap;
    transition: 0.3s;
    font-size: 14px;
    display: inline-block;
    border:none;
`;

export const PrimaryButton = styled(BaseButton)`
    background: ${props => props.disabled ? '#06A3DA' : "#FF6337"};
    color: #fff;
    border-radius: 2px;
    font-size: 1rem;
    font-weight: 600;

    &:hover {
        background: ${props => props.disabled ? '#06A3DA' : "#166ab5"};
        color: #fff;
    }
`;

export const SecondryButton = styled(BaseButton)`
    background: #f0f0f0;
    color: black;
    border-radius: 2px;
    font-size: 1rem;
    font-weight: 600;

    &:hover {
        background: #06A3DA;
        color: #fff;
    }
`;

export const OutlinedButton = styled(BaseButton)`
    background: #fff;
    color: black;
    border: 2px solid #06A3DA;
    border-radius: 2px;
    font-size: 1rem;
    font-weight: 600;

    &:hover {
        background: #06A3DA;
        color: #fff;
    }
`;