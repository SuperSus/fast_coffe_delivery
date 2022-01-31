import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import { BottomModal, ModalCloseTarget } from 'react-spring-modal';
import {
  Clock, Home, ArrowRight, DollarSign,
} from 'react-feather';
import CartContext from '../contexts/CartContext';
import useAuth from '../contexts/AuthContext';
import {
  Header, OrderButton, TotalPrice, HeaderContent,
} from '../components';
import {
  OrderBox, InfoBox, TipsBox, InfoTitleRow, InfoRow, InfoSpan, CommentArea, ModalHeader, ModalInfo,
} from '../components/styles/OrderPage.styled';
import { StyledOutlinedMainButton } from '../components/styles/OutlinedMainButton.styled';
import { postData } from '../utils/Api';

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
        <ModalHeader>Заказ Принят!</ModalHeader>
        <ModalInfo>Еда будет у вас в ближайшее время</ModalInfo>
        <StyledOutlinedMainButton>
          {text}
        </StyledOutlinedMainButton>
      </ModalCloseTarget>
    </BottomModal>
  );
};

ConfirmModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  setIsOpen: PropTypes.func.isRequired,
};

const OrderPage = function () {
  const cartContext = useContext(CartContext);
  const { currentUser } = useAuth();
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const sendOrder = async function () {
    const items = cartContext.getOrderProducts();
    const address = { street: 'my_street' };
    const order = { items, address, comment: 'hello' };
    const result = await postData('/api/orders', order);
    return result.data;
  };
  const onOrder = () => {
    setModalIsOpen(true);
    sendOrder().then((data) => console.log(data));
  };

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
        onKeyDown={onOrder}
        onClick={onOrder}
      >
        <OrderButton
          link="/order"
          text="Оформить заказ"
          variant="dark"
          onClick={() => sendOrder()}
        />
      </div>
      <ConfirmModal isOpen={modalIsOpen} setIsOpen={setModalIsOpen} />
    </>
  );
};
export default OrderPage;
