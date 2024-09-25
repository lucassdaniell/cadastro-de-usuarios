import styled from "styled-components";


export const Container = styled.div`

    background: rgb(1,0,60);
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    padding: 25px;
`

export const Title = styled.h2`

    color: #fff;
    margin-top: 25px;
    text-align: center;
    font-size: 33px;
    font-style: normal;
    font-weight: 600;

`

export const ContainerUsers = styled.div`

    display: grid;
    grid-template-columns: 1fr 1fr ;
    gap: 20px;
    margin: 45px;


    @media (max-width: 750px){
        grid-template-columns: 1fr
    }


`

export const CardUsers = styled.div`

    background-color: #191970;
    padding: 15px;
    border-radius: 25px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 10px;
    max-width: 350px;
    
    h3{
        color: #fff;
        font-size: 20px;
        margin-bottom: 5px;
        text-transform: capitalize;
    }


    p {
        color: #fff;
        font-size: 13px;
        margin-bottom: 3px;
        font-weight: 300;
    }

    @media (max-width: 750px){
    
      p{
        font-size: 16px;
      }
    }

`

export const Avatar = styled.img`

    height: 56px;

`

export const TrashIcon = styled.img`
cursor: pointer;
height: 31px;
padding-left: 40px;

&:hover {
    opacity: 0.8;
}

&:active {
    opacity: 0.5;
}
`

