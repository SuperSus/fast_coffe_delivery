import styled from 'styled-components';

export const ItemsWrapper = styled.div`
  height: auto;
  display: flex;
  flex-direction: column;
  background-color: '#ffffff';
  box-sizing: content-box;
`;

export const ItemBox = styled.div`
  border: 1px solid #F0F0F0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 10px;
`;

export const ContentBox = styled.div`
  flex: ${({ flex }) => flex || '1 1 0'};
  padding: 8px 10px;
  display: flex;
  flex-direction: column;
  align-items: ${({ alignItems }) => alignItems || 'flex-start'};
`;

export const Image = styled.img`
  width: 64px;
  height: 64px;
  background: #FFFFFF;
  border: 2px solid #F5F5F5;
  box-sizing: border-box;
  border-radius: 50%;
`;

export const BoldText = styled.span`
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 28px;
`;

export const Description = styled.span`
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
`;
