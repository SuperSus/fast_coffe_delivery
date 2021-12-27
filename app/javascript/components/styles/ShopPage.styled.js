import styled from 'styled-components';

export const LogoBox = styled.div`
  display: flex;
  margin: 12px 0px;
  justify-content: center;
  align-items: center;
`;

export const ShopInfoBox = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px;
  background: #F5F5F5;
  border-radius: 16px;
  margin: 12px 24px;
`;

export const ShopInfoItem = styled.div`
  display: flex;
  align-items: center;
  font-size: 16px;
  line-height: 24px;
  margin: 8px 0px;
`;

export const ShopInfoItemSpan = styled.span`
  margin-left: 8px
`;

export const MenuBox = styled.div`
  display: flex;
  flex-direction: column;
  margin: 12px 24px;
`;

export const MenuItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #595959;
  border-radius: 56px;
  padding: 10px 16px 10px 24px;
  margin: 8px 0px;
`;

export const MenuInfoItemSpan = styled.span`
  font-size: 20px;
  line-height: 28px;
  color: #FFF;
`;
