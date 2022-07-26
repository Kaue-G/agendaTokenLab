import styled from "styled-components";

export const BtnDeFault = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px;
    width: 100%;
    border-radius: 2px;
    border: 0;
    outline: none;
    font-size: 16px;
    font-weight: bold;
    margin: 15px 0;
    transition: 0.4s;

    &:hover {
        background-color: #3361DE;
        color: white;
    }
`;
