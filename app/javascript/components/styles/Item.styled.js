import styled from 'styled-components';

export const ItemsWrapper = styled.div`
  height: auto;
  display: flex;
  flex-direction: column;
  background-color: '#ffffff';
  box-sizing: content-box;
`;

export const ItemBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: ${({ withBorder }) => (withBorder ? '0px 10px' : '0px')};
  ${({ withBorder }) => (withBorder ? 'border: 1px solid #F0F0F0;' : '')};
`;

export const MainContentBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%
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

export const ToppingsBox = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0px 10px;
  width: 100%;
`;

export const Topping = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 4px 8px;
  margin: 8px 0px;
  background: #F5F5F5;
  border-radius: 24px;
`;

export const ToppingTitle = styled.span`
  font-size: 16px;
  line-height: 24px;
`;

export const ToppingPrice = styled.span`
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
`;
