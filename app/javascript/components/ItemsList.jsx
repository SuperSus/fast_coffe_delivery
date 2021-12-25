import React, { useState } from 'react';
import { ItemsWrapper } from './styles/Item.styled';
import Item from './Item';
import EditItemModal from './EditItemModal';

const ItemsList = function ({ products, cartMode }) {
  const [editModalState, setEditModalState] = useState({ isOpen: false, product: {} });
  return (
    <>
      <ItemsWrapper>
        {products.map((item, idx) => (
          <Item
            key={`item_${item.id}_${idx}`}
            product={item}
            setEditModalState={setEditModalState}
            cartMode={cartMode}
          />
        ))}
      </ItemsWrapper>
      <EditItemModal state={editModalState} setState={setEditModalState} />
    </>
  );
};

export default ItemsList;
