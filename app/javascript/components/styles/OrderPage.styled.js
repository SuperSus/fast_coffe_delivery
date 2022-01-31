import styled from 'styled-components';

export const OrderBox = styled.div`
  display: flex;
  flex-direction: column;
  margin: 24px;
`;

export const InfoBox = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px;
  background: #F5F5F5;
  border-radius: 16px;
  margin-bottom: 8px;
`;

export const TipsBox = styled.div`
 display: flex;
 line-height: 24px;
 padding: 16px 21px;
 margin-bottom: 8px;
`;

export const InfoTitleRow = styled.div`
  display: flex;
  font-weight: 500;
  font-size: 20px;
  line-height: 28px;
  margin: 8px 0px;
  width: 100%;
`;

export const InfoRow = styled.div`
  display: flex;
  line-height: 24px;
  width: 100%;
  padding-left: 34px;
`;

export const CommentArea = styled.textarea`
  padding: 16px 16px 20px;
  border: 2px solid #F0F0F0;
  box-sizing: border-box;
  border-radius: 16px;
  
  font-size: 16px;
  line-height: 24px;
  
  margin-bottom: 8px;
  
  &::-webkit-input-placeholder {
    color: #8C8C8C;
  }
  &:-moz-placeholder {
    color: #8C8C8C;
  }
`;

export const InfoSpan = styled.span`
  ${({ isFirst }) => (isFirst ? 'margin-right: 8px' : '')}
  ${({ isLast }) => (isLast ? 'justify-self: end;' : '')}
  ${({ isCentral }) => (isCentral ? 'flex: 1' : '')}
`;

export const ModalHeader = styled.div`
  font-weight: 500;
  font-size: 24px;
  line-height: 32px;
  margin: 8px 0px;
`;

export const ModalInfo = styled.div`
  line-height: 24px;
  margin: 8px 0px 32px 0px;
`;
