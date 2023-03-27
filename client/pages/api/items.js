import axios from 'axios';

export default async function handler(req, res) {
  const { method } = req;

  switch (method) {
    case 'GET':
      const items = await getAllItems();
      return res.status(200).json({ items });

    case 'POST':
      let newItem = JSON.parse(req.body);

      const returnedCreatedItem = await createItem(newItem);

      return res.status(200).json({ returnedCreatedItem });

    case 'PUT':
      let updatedItem = JSON.parse(req.body);

      const returnedUpdatedItem = await updateItem(updatedItem);

      return res.status(200).json({ returnedUpdatedItem });

    case 'DELETE':
      let { itemId, category } = JSON.parse(req.body);

      await deleteItem(itemId, category);

      return res.status(200).json({ deletedId: itemId });

    default:
      throw new Error('Unknown method : ' + method);
  }
}

async function getAllItems() {
  const axiosConfig = {
    method: 'GET',
    headers: {},
    url: process.env.SERVER_URL
  };

  const res = await axios(axiosConfig);
  return res.data;
}

async function createItem(newItem) {
  let { category, ...body } = newItem;

  const axiosConfig = {
    method: 'post',
    url: `${process.env.SERVER_URL}?category=${newItem.category}`,
    data: body
  };

  const res = await axios(axiosConfig);

  return res.data;
}

async function updateItem(updatedItem) {
  let { category, ...body } = updatedItem;

  const axiosConfig = {
    method: 'put',
    url: `${process.env.SERVER_URL}?category=${updatedItem.category}`,
    data: body
  };

  const res = await axios(axiosConfig);

  return res.data;
}

async function deleteItem(itemId, category) {
  const axiosConfig = {
    method: 'delete',
    url: `${process.env.SERVER_URL}?itemId=${itemId}&category=${category}`
  };

  const res = await axios(axiosConfig);

  return res.data;
}
