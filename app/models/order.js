import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const OrderSchema = new Schema({
  buyer: String,
  product: String,
  description: String,
  delivery: Boolean
}, {
  timestamps: true
});

const OrderModel = mongoose.model('order', OrderSchema);

export default OrderModel;
