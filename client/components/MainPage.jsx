import { useState } from 'react';

/* Components */
import NavBar from '@/components/NavBar';
import CreateItemForm from './CreateItemForm/CreateItemForm';
import UpdateForm from './UpdateForm';

import ItemsTable from './ItemsTable';

export default function MainPage() {
  const [modifyItem, setModifyItem] = useState(false);
  const [createItem, setCreateItem] = useState(false);
  const [itemData, setItemData] = useState({});

  function handleModifyItem(item) {
    setItemData(item);
    setModifyItem(true);
  }

  function handleCreateItem() {
    setCreateItem(true);
  }

  function handleClose() {
    setModifyItem(false);
    setCreateItem(false);
  }

  return (
    <main>
      <NavBar handleCreateItem={handleCreateItem} />
      <ItemsTable handleModifyItem={handleModifyItem} />

      {createItem ? (
        <div className='modifyItem-container'>
          <CreateItemForm closeForm={handleClose} />
        </div>
      ) : modifyItem ? (
        <div className='modifyItem-container'>
          <UpdateForm itemData={itemData} closeForm={handleClose} />
        </div>
      ) : null}
    </main>
  );
}
