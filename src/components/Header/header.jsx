import styled from "styled-components";

export const HeaderContainer = styled.div`
        background-color: #000000;
        display: flex;
        justify-content: space-around;
        align-items: center;
        width: 100%;
        height: 60px;
    @media screen and (min-width: 700px)  {
        background-color: #000000;
        padding: 1em 2em;
        color: #fff;
        display: flex;
        justify-content: space-between;
        align-items: center;
     
    }
`

export const HeaderMenu = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: end;
`

export const HeaderLogo = styled.div`
  display: flex;
  justify-content: end;
`

export const HeaderImagem = styled.img`
    width: 18%;
    margin-right: 6px;
`

export const HeaderMenuLinks = styled.div`
    width: 30%;
    height: 100vh;
    background-color: #000000c8;
    display: flex;
    font-size: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: center;
    @media screen and (min-width: 700px) {
        width: 100%;
        text-align: center;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    
`

export const HeaderCidade = styled.div`
    padding: 20px 0;
    display: flex;
    cursor: pointer;
    @media screen and (max-width: 0px) {
        width: 100%;
        text-align: center;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    
`

export const HeaderCidadeModal = styled.div`

    position: absolute;
    background-color: #f2f2f2;
    border-radius: 4px;
    box-shadow: 0 0 5px #cfcfcf;
    width: 30%;
    height: 58%;
    right: 0;
    top: 92px;

`