import exrpress from 'express';
import Product from '../models/productModel.js';
import data from '../data.js';

const seedRouter = exrpress.Router();

seedRouter.get('/', async (req, res) => {
  await Product.remove({});
  const createdProducts = await Product.insertMany(data.products);
  res.send({ createdProducts });
});
export default seedRouter;
