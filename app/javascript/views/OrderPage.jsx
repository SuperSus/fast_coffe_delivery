import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import { BottomModal, ModalCloseTarget, ModalTitle } from 'react-spring-modal';
import {
  Clock, Home, ArrowRight, DollarSign, PlusCircle,
} from 'react-feather';
import CartContext from '../contexts/CartContext';
import useAuth from '../contexts/AuthContext';
import {
  Header, OrderButton, TotalPrice, HeaderContent,
} from '../components';
import {
  OrderBox, InfoBox, TipsBox, InfoTitleRow, InfoRow, InfoSpan, CommentArea,
} from '../components/styles/OrderPage.styled';
import { StyledOutlinedMainButton } from '../components/styles/OutlinedMainButton.styled';

const ConfirmModal = function ({ isOpen, setIsOpen }) {
  const staticModalStyles = { minWidth: '100%' };
  const text = 'Ок, жду';
  return (
    <BottomModal
      isOpen={isOpen}
      onDismiss={() => setIsOpen(false)}
      contentProps={{ style: staticModalStyles }}
    >
      <ModalCloseTarget>
        <ModalTitle>Заказ Принят!</ModalTitle>
        <StyledOutlinedMainButton>
          {text}
        </StyledOutlinedMainButton>
      </ModalCloseTarget>
    </BottomModal>
  );
};

const OrderPage = function () {
  const cartContext = useContext(CartContext);
  const { currentUser } = useAuth();
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const openModal = () => setModalIsOpen(true);
  return (
    <>
      <Header>
        <HeaderContent>Оплата</HeaderContent>
        <TotalPrice totalPrice={cartContext.getTotalPrice()} />
      </Header>
      <OrderBox>
        <InfoBox>
          <InfoTitleRow>
            <InfoSpan isFirst><Home size="25" /></InfoSpan>
            <InfoSpan isCentral>Адрес доставки</InfoSpan>
            <InfoSpan isLast><ArrowRight size="25" /></InfoSpan>
          </InfoTitleRow>
          <InfoRow>Иона Павла 2</InfoRow>
        </InfoBox>
        <InfoBox>
          <InfoTitleRow>
            <InfoSpan isFirst><Clock size="25" /></InfoSpan>
            <InfoSpan isCentral>Как можно скорее</InfoSpan>
            <InfoSpan isLast><ArrowRight size="25" /></InfoSpan>
          </InfoTitleRow>
        </InfoBox>
        <InfoBox>
          <InfoTitleRow>
            <InfoSpan isFirst><DollarSign size="25" /></InfoSpan>
            <InfoSpan isCentral>Наличные</InfoSpan>
          </InfoTitleRow>
          <InfoRow>Другие способы оплаты пока не доступны</InfoRow>
        </InfoBox>
        <CommentArea placeholder="Оставить комментарий..." />
        <TipsBox>
          Чаевые не обязательны, но им всегда рады
        </TipsBox>
      </OrderBox>
      <div
        role="link"
        tabIndex={0}
        onKeyDown={openModal}
        onClick={openModal}
      >
        <OrderButton
          link="/order"
          text="Оформить заказ"
          variant="dark"
        />
      </div>
      <ConfirmModal isOpen={modalIsOpen} setIsOpen={setModalIsOpen} />
    </>
  );
};
export default OrderPage;
