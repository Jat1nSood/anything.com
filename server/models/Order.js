const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    user : {type : String, required : true},
    addedProduct: [
        {
          id: { type: String, required: true },
          title: { type: String, required: true },
          url: { type: String, required: true },
          price: { type: Number, required: true },
          quantity: { type: Number, required: true },
          totalProductPrice: { type: Number, required: true },
        },
      ],
});

const Order = mongoose.model('Order', orderSchema);
module.exports = Order;