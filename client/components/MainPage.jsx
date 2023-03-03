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
  const [selectedSearchItemId, setSelectedSearchItemId] = useState('');

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

  function _removePreviouslySelectedItem(itemId) {
    if (selectedSearchItemId) {
      let previouslySelectedDOMItem = document.getElementById(
        `tr-${selectedSearchItemId}`
      );

      previouslySelectedDOMItem.classList.remove('itemsTable-searchedRow');
    }

    setSelectedSearchItemId(itemId);
  }

  function handleSelectedSearchItem(item) {
    _removePreviouslySelectedItem(item.itemId);

    let selectedDOMItem = document.getElementById(`tr-${item.itemId}`);
    selectedDOMItem.scrollIntoView();
  }

  function handledSelectedRow(item) {
    _removePreviouslySelectedItem(item.itemId);

    let selectedDOMItem = document.getElementById(`tr-${item.itemId}`);
    selectedDOMItem.classList.add('itemsTable-searchedRow');
  }

  return (
    <main>
      <NavBar
        handleCreateItem={handleCreateItem}
        items={items}
        handleSelectedSearchItem={handleSelectedSearchItem}
      />
      <ItemsTable
        items={items}
        handleModifyItem={handleModifyItem}
        selectedSearchItemId={selectedSearchItemId}
        handledSelectedRow={handledSelectedRow}
      />

      {createItem ? (
        <div className='modifyItem-container'>
          <CreateUpdateForm
            isCreatingItem={true}
            itemData={itemData}
            closeForm={handleClose}
            itemsDispatch={dispatch}
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
