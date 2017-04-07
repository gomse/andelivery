import BaseController from './base.controller';
import Order from '../models/order';

class OrdersController extends BaseController {

  whitelist = [
    'buyer',
    'product',
    'description',
  ];

  list = async (req, res) => {
    try {
      const orders = await Order.find({});
      res.json(orders);
    } catch (err) {
      next(err);
    }
  }

  add = async (req,res) => {
    const params = this.filterParams(req.body, this.whitelist);
    const order = new Order({
      ...params
    });

    try {
      res.json(await order.save());
    } catch (err) {
      next(err);
    }
  }

}

export default new OrdersController();
