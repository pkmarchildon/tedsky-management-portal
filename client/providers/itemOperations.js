export async function createItem(newItem, dispatch) {
  const res = await fetch('http://localhost:4002/api/items', {
    method: 'POST',
    body: JSON.stringify(newItem)
  });

  const { returnedCreatedItem } = await res.json();
  console.log('returned: ', returnedCreatedItem);

  // Update client items list.
  dispatch({
    type: 'add',
    data: returnedCreatedItem
  });
}

export async function updateItem(updatedItem, dispatch) {
  //console.log(updatedItem);
  /*
  const res = await fetch('http://localhost:4002/api/items', {
    method: 'PUT',
    body: JSON.stringify(updatedItem)
  });

  const { returnedUpdatedItem } = await res.json();

  // Update client items list.
  dispatch({
    type: 'update',
    data: returnedUpdatedItem
  });
  */
}
