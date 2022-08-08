import mongoose from 'mongoose';

const productSchema = new mongoose.Schema(
  {
    name: { type: String, requiredL: true, unique: true },
    slug: { type: String, requiredL: true, unique: true },
    image: { type: String, requiredL: true },
    brand: { type: String, requiredL: true },
    category: { type: String, requiredL: true },
    description: { type: String, requiredL: true },
    price: { type: Number, requiredL: true },
    countInStock: { type: Number, requiredL: true },
    rating: { type: Number, requiredL: true },
    numReviews: { type: Number, requiredL: true },
  },
  {
    timestamps: true,
  }
);

const Product = mongoose.model('Product', productSchema);
export default Product;
