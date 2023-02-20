import { useState, useReducer } from 'react';
import { itemReducer } from '@/providers/reducers';

/* Components */
import NavBar from '@/components/NavBar';
import CreateItemForm from './CreateItemForm/CreateItemForm';
import UpdateForm from './UpdateForm';

import ItemsTable from './ItemsTable';

export default function MainPage({ initialItems }) {
  const [modifyItem, setModifyItem] = useState(false);
  const [createItem, setCreateItem] = useState(false);
  const [itemData, setItemData] = useState({});
  const [items, dispatch] = useReducer(itemReducer, initialItems);

  function handleModifyItem(item) {
    setItemData(item);
    setModifyItem(true);
  }

  async function handleCreateItem() {
    setCreateItem(true);
  }

  function handleClose() {
    setModifyItem(false);
    setCreateItem(false);
  }

  async function createNewItem(newItem) {
    const res = await fetch('http://localhost:4002/api/items', {
      method: 'POST',
      body: JSON.stringify(newItem)
    });

    const { createdItem } = await res.json();

    // Update client items list.
    dispatch({
      type: 'add',
      data: createdItem
    });
  }

  return (
    <main>
      <NavBar handleCreateItem={handleCreateItem} />
      <ItemsTable items={items} handleModifyItem={handleModifyItem} />

      {createItem ? (
        <div className='modifyItem-container'>
          <CreateItemForm
            closeForm={handleClose}
            createNewItem={createNewItem}
          />
        </div>
      ) : modifyItem ? (
        <div className='modifyItem-container'>
          <UpdateForm itemData={itemData} closeForm={handleClose} />
        </div>
      ) : null}
    </main>
  );
}
