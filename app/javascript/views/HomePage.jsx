import React from 'react';
import { Link } from 'react-router-dom';
import {
  Clock, ShoppingBag, Coffee, Folder, Heart, Home,
} from 'react-feather';
import ShopLogo from 'images/IndustrialCoffee.png';
import {
  LogoBox, ShopInfoBox, ShopInfoItem, ShopInfoItemSpan, MenuBox, MenuItem, MenuInfoItemSpan,
} from '../components/styles/ShopPage.styled';

const ShopInfo = function () {
  const { title, address, deliveryInfo } = {
    title: 'Кофе, сендвичи, десерты',
    address: 'Ионна Павла 2, 10K3',
    deliveryInfo: 'Доставка 5-15 минут или забрать самому',
  };
  return (
    <ShopInfoBox>
      <ShopInfoItem>
        <ShoppingBag size="25" />
        <ShopInfoItemSpan>{title}</ShopInfoItemSpan>
      </ShopInfoItem>
      <ShopInfoItem>
        <Home size="25" />
        <ShopInfoItemSpan>{address}</ShopInfoItemSpan>
      </ShopInfoItem>
      <ShopInfoItem>
        <Clock size="25" />
        <ShopInfoItemSpan>{deliveryInfo}</ShopInfoItemSpan>
      </ShopInfoItem>
    </ShopInfoBox>
  );
};

const MainMenu = function () {
  return (
    <MenuBox>
      <Link to="menu/coffee">
        <MenuItem>
          <MenuInfoItemSpan>Кофе</MenuInfoItemSpan>
          <Coffee color="white" size="26" />
        </MenuItem>
      </Link>
      <Link to="menu/mainDishes">
        <MenuItem>
          <MenuInfoItemSpan>Основное Меню</MenuInfoItemSpan>
          <Folder color="white" size="26" />
        </MenuItem>
      </Link>
      <Link to="menu/deserts">
        <MenuItem>
          <MenuInfoItemSpan>Десерты</MenuInfoItemSpan>
          <Heart color="white" size="26" />
        </MenuItem>
      </Link>
    </MenuBox>
  );
};

const HomePage = function () {
  return (
    <>
      <LogoBox>
        <img src={ShopLogo} alt="shop's logo" />
      </LogoBox>
      <ShopInfo />
      <MainMenu />
    </>
  );
};
export default HomePage;
