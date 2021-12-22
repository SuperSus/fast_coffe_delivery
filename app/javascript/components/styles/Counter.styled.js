import styled from 'styled-components';

export const CounterBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CounterButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 21px;
  width: 21px;
  color: #FFF;
  background-color: #000;
  border-radius: 21px;
  margin-left: 8px;
  
  @keyframes bounce {
    0%{transform: scale(1);}
    100%{transform: scale(0.98);}
  }

  &:hover, &:active {
    animation: bounce 0.1s ease-out 1;
  }
`;

export const CounterValue = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 24px;
  color: #FFF;
  background-color: #000;
  border-radius: 24px;
  width: max-content;
  margin-left: 8px;
  padding: 0 8px;
`;
