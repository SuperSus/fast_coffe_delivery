import styled from 'styled-components';

export const StyledItem = styled.div`
 flex: 1 1 0;
 display: flex;
 flex-direction: column;
 align-items: center;
 padding: 0 20px;
 
 &:hover {
   opacity: 0.9;
   transform: scale(0.98);
 }
`;

export const StyledCircleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 48px;
  width: 48px;
  background-color: #FFF;
  border-radius: 50%;
`;

export const StyledContentBlock = styled.div`
 flex: 5 1 0;
 padding: 0 20px;
`;

export const StyledNav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 3rem;
`;

export const StyledHeader = styled.header`
  padding: 40px 0;
  background-color: #000000;
  color: #ffffff;
  font-size: 2rem;
`;
