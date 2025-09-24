import { renderOrderSummary } from "./chekout/orderSummary.js";
import { renderPaymentSummary } from "./chekout/paymentSummary.js";
import { loadProducts } from "../data/products.js";
// import '../data/backend-practice.js';
// import '../data/cart-class.js'

loadProducts( () => {
  renderOrderSummary();
  renderPaymentSummary();
 });
