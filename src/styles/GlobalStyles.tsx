import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root {
        font-size: 62.5%;
    }

    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        font-family: 'Montserrat Alternates', sans-serif;
        
    }

    a {
        color: inherit;
        text-decoration: none;
    }

    a:hover{
        cursor: pointer;
    }

    .my-scroll::-webkit-scrollbar {
        -webkit-appearance: none;
    }

    .my-scroll::-webkit-scrollbar:vertical {
        width:8px;
    }

    .my-scroll::-webkit-scrollbar-button:increment,.contenedor::-webkit-scrollbar-button {
        display: none;
    } 

    .my-scroll::-webkit-scrollbar:horizontal {
        height: 8px;
    }

    .my-scroll::-webkit-scrollbar-thumb {
        background-color: #b4afaf;
        border-radius: 20px;
        border: 2px solid #f1f2f3;
    }

    .my-scroll::-webkit-scrollbar-track {
        border-radius: 8px;  
    }
`;

export const Container = styled.div`
  display: flex;

  @media (min-width: 1620px) {
    && .home-subcontainer {
      width: 1140px;
      margin: 0 calc(calc(100% - 480px - 1140px) / 2);
    }
  }
`;

export const Subcontainer = styled.div`
  width: 100%;
  min-width: 320px;
  padding-bottom: 48px;

  && .restaurants-title {
    width: 95%;
    margin: 24px auto 0;
    display: flex;
    align-items: flex-end;
    font-size: 2.8rem;
  }

  && .restaurants-title > span {
    display: inline-block;
    width: 35px;
    height: 35px;
    margin-left: 8px;
    background-image: url("icons/burger_icon.svg");
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
  }

  @media (min-width: 1300px) {
    width: calc(100% - 480px);
  }
`;
