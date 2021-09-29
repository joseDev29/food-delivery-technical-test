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
`;

export const Container = styled.div`
  display: flex;
`;

export const Subcontainer = styled.div`
  width: 100%;
  min-width: 320px;
`;
