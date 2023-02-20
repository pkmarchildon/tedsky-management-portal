import axios from 'axios';

export default async function handler(req, res) {
  const { method } = req;

  switch (method) {
    case 'GET':
      const items = await getAllItems();
      return res.status(200).json({ items });

    case 'POST':
      let itemData = JSON.parse(req.body);

      const createdItem = await createItem(itemData);

      return res.status(200).json({ createdItem });

    default:
      throw new Error('Unknown method : ' + method);
  }
}

async function getAllItems() {
  const axiosConfig = {
    method: 'GET',
    headers: {},
    url: 'http://localhost:4001/'
  };

  const res = await axios(axiosConfig);
  return res.data;
}

async function createItem(newItem) {
  let { category, ...body } = newItem;

  const axiosConfig = {
    method: 'post',
    url: `http://localhost:4001?category=${newItem.category}`,
    data: body
  };

  const res = await axios(axiosConfig);

  return res.data;
}
