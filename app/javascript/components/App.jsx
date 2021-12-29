import '@reach/dialog/styles.css';
import 'react-spring-modal/styles.css';
import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import AppRoutes from '../routes/index';
import { CartContextProvider } from '../contexts/CartContext';
import { AuthProvider } from '../contexts/AuthContext';

const Styles = {
  Wrapper: styled.main`
    display: flex;
    flex-direction: column;
    height: 100vh;
  `,
};

const CSSReset = createGlobalStyle`
  *,
  *::before, 
  *::after {
    margin: 0; 
    padding: 0;
    box-sizing: inherit;
  }

  html {
    font-size: 62.5%; /*1rem = 10px*/
    box-sizing: border-box;    
  }  

  body {
    font-size: 1.4rem;
    font-family: Roboto;
    font-style: normal;
  }
  
  a {
    text-decoration: none;
  }
`;

const App = function () {
  return (
    <AuthProvider>
      <CartContextProvider>
        <Styles.Wrapper>
          <CSSReset />
          {AppRoutes}
        </Styles.Wrapper>
      </CartContextProvider>
    </AuthProvider>
  );
};
export default App;
