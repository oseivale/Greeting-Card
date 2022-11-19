import styled from 'styled-components';


export const FormLabel = styled.label`
    margin-bottom: 0.5rem;
    font-family: 'Abel', sans-serif;
    font-size: 1.2rem;
`

export const FormInput = styled.input`
    margin-right: 0.5rem;
    margin-left: 1rem;
`

export const FormHeader = styled.h4`
    margin: 1rem 0;
    font-family: 'Fuzzy Bubbles', cursive;
`

export const DownLoad = styled.input`
    margin: 1rem 0;
`

export const Submit = styled.input`
    border: none;
    padding: 0.5rem 2rem;
    border-radius: 4px;
    background-color: #876695;
    color: #ffffff;

    &:hover{
        filter: brightness(85%);
    }
`