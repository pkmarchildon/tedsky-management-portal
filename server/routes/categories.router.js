import express from 'express';

import {
  httpGetCategories,
  httpCreateCategories,
  httpUpdateCategories,
  httpDeleteCategories
} from './categories.controler.js';

const categoriesRouter = express.Router();

categoriesRouter.get('/', httpGetCategories);
categoriesRouter.post('/', httpCreateCategories);
categoriesRouter.put('/', httpUpdateCategories);
categoriesRouter.delete('/', httpDeleteCategories);

export default categoriesRouter;
