import styled from "styled-components";


export const Container = styled.div`
    background: rgb(1,0,60);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    padding: 26px;
    height: 100vh;
`



export const Form = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    max-width: 500px;

`

export const Title = styled.h2`

    color: #fff;
    text-align: center;
    font-size: 33px;
    font-style: normal;
    font-weight: 600;

`

export const ContainerInputs = styled.div`
    display: flex;
    gap: 20px;

`

export const Input = styled.input`
    border-radius: 8px;
    border: 1px solid #d2dae2;
    background-color: #fff;
    padding: 10px 18px;
    outline: none;
    width: 100%;
`

export const InputLabel = styled.label`
    color: #fff;
    font-size: 13px;
    font-weight: 500;

    span {
        color: red;
    }

`
