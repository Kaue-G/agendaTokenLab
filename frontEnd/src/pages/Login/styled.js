import styled from 'styled-components';

export const AreaLogin = styled.div`
    background-color: #fff;
    padding: 30px;
    max-width: 300px;
    margin: auto;
    margin-top: 20px;
    text-align: center;
    border-radius: 5px;
    box-shadow: 0px 0px 10px #ccc;

    h1 {
        font-size: 24px;
    }

    .form-imput {
        text-align: left;

        label {
            display: block;
        }

        input {
            margin-bottom: 20px;
            padding: 10px;
            font-size: 16px;
            outline: none;
            border: 1px solid, #ccc;
            border-radius: 5px;
            width: 100%;
            transition: 0.3s;

            &:hover {
                border: 1px solid #3361DE;
            }
        }
    }
`;