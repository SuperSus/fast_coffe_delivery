import styled from 'styled-components';

export const StubBox = styled.div`
  display: flex;
  padding: 44px;
  flex: 1;
  justify-content: flex-end;
`;

export const OutlinedMainButtonBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px;
  position:fixed;
  bottom:0;
  background: #FFFFFF;
  width: 100%;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.08);
`;

export const StyledOutlinedMainButton = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 10px 16px 10px 24px;
  border-radius: 56px;
  border: 2px solid #000;
  justify-content: space-between;
  width: 100%;
  font-size: 20px;
  line-height: 28px;
  background:${({ variant }) => (variant === 'dark' ? '#000' : '#fff')};
  color:${({ variant }) => (variant === 'dark' ? '#fff' : '#000')};
`;
