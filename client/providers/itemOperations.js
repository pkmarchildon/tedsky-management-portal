export async function createNewItem(newItem, dispatch) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_CLIENT_URL}api/items`, {
    method: 'POST',
    body: JSON.stringify(newItem),
    headers: {
      'Access-Control-Allow-Origin': '*'
    }
  });

  const { returnedCreatedItem } = await res.json();

  // Update client items list.
  dispatch({
    type: 'add',
    data: returnedCreatedItem
  });
}

export async function updateItem(updatedItem, dispatch) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_CLIENT_URL}api/items`, {
    method: 'PUT',
    body: JSON.stringify(updatedItem),
    headers: {
      'Access-Control-Allow-Origin': '*'
    }
  });

  const { returnedUpdatedItem } = await res.json();

  // Update client items list.
  dispatch({
    type: 'update',
    data: returnedUpdatedItem
  });
}

export async function deleteItem(deleteItem, dispatch) {
  const { itemId, category } = deleteItem;

  const res = await fetch(`${process.env.NEXT_PUBLIC_CLIENT_URL}api/items`, {
    method: 'DELETE',
    body: JSON.stringify({ itemId, category }),
    headers: {
      'Access-Control-Allow-Origin': '*'
    }
  });

  const { deletedId } = await res.json();

  // Update client items list.
  dispatch({
    type: 'delete',
    data: deletedId
  });
}
