import { useState, useReducer } from 'react';
import { itemReducer } from '@/providers/reducers';
import { createNewItem, updateItem } from '@/providers/itemOperations';

import { formatUpdatingItem } from '@/providers/formatters';

/* Components */
import NavBar from '@/components/NavBar';
import CreateUpdateForm from './CreateUpdateForm/CreateUpdateForm';

import ItemsTable from './ItemsTable';

export default function MainPage({ initialItems }) {
  const [modifyItem, setModifyItem] = useState(false);
  const [createItem, setCreateItem] = useState(false);
  const [itemData, setItemData] = useState({});
  const [items, dispatch] = useReducer(itemReducer, initialItems);

  function handleModifyItem(item) {
    let formatedItem = formatUpdatingItem(item);

    setItemData(formatedItem);
    setModifyItem(true);
  }

  function handleCreateItem() {
    setCreateItem(true);
  }

  function handleClose() {
    setModifyItem(false);
    setCreateItem(false);
    setItemData({});
  }

  return (
    <main>
      <NavBar handleCreateItem={handleCreateItem} />
      <ItemsTable items={items} handleModifyItem={handleModifyItem} />

      {createItem ? (
        <div className='modifyItem-container'>
          <CreateUpdateForm
            isCreatingItem={true}
            itemData={itemData}
            closeForm={handleClose}
            itemsDispatch={dispatch}
            createNewItem={createNewItem}
          />
        </div>
      ) : modifyItem ? (
        <div className='modifyItem-container'>
          <CreateUpdateForm
            isCreatingItem={false}
            itemData={itemData}
            closeForm={handleClose}
            itemsDispatch={dispatch}
            updateItem={updateItem}
          />
        </div>
      ) : null}
    </main>
  );
}
