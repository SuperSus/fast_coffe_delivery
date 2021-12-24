import styled from 'styled-components';

export const CheckBoxesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px 0px 24px;
`;

export const CheckBoxRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin: 8px 0px;
`;

export const CheckBox = styled.div`
  display: flex;
  justify-content: center;
  padding: 2px;
  background: ${({ checked }) => (checked ? '#1F2029' : '#FFF')};
  width: 24px;
  height: 24px;
  border-radius: 5px;
  border: 2px solid #1F2029;
  margin-right: 12px;
`;

export const Label = styled.div`
  display: flex;
  flex: 1 1 0;
  font-size: 20px;
  line-height: 28px;
`;

export const Price = styled.div`
  display: flex;
  align-items: flex-end;
  font-weight: 500;
  font-size: 20px;
  line-height: 28px;
  margin-left: 12px;
`;

export const Divider = styled.div`
  height: 0px;
  width: 100%;
  border: 1px solid #F0F0F0;
  margin: 12px 0px;
`;
