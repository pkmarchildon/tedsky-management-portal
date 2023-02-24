import { useState, useReducer } from 'react';
import { itemReducer } from '@/providers/reducers';

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

  async function handleCreateItem() {
    setCreateItem(true);
  }

  function handleClose() {
    setModifyItem(false);
    setCreateItem(false);
    setItemData({});
  }

  async function createNewItem(newItem) {
    const res = await fetch('http://localhost:4002/api/items', {
      method: 'POST',
      body: JSON.stringify(newItem)
    });

    const { returnedCreatedItem } = await res.json();

    // Update client items list.
    dispatch({
      type: 'add',
      data: returnedCreatedItem
    });
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
          />
        </div>
      ) : null}
    </main>
  );
}
