import { renderOrderSummary } from "./chekout/orderSummary.js";
import { renderPaymentSummary } from "./chekout/paymentSummary.js";
import { loadProducts } from "../data/products.js";
import { loadCart } from "../data/cart.js";
// import '../data/backend-practice.js';
// import '../data/cart-class.js'

Promise.all([
  new Promise((resolve) => {
    loadProducts( () => {
      resolve(); // if we wanna add something to pass to then like variables or something we need it go here inside resolve ()
    });
  }),
  new Promise( (resolve) => {
    loadCart(() => {
      resolve(); // if we wanna add something to pass to then like variables or something we need it go here inside resolve ()
    });
  })

]).then( () => { // if we added a parameter into then () it will show us an array of all the parameter passed inside the resolves ()
  renderOrderSummary();
  renderPaymentSummary();
});

/*
new Promise((resolve) => {
  loadProducts( () => {
    resolve('value1');
  });
}).then((value) => {
  console.log(value);
  return new Promise( (resolve) => {
    loadCart(() => {
      resolve()
    });
  });
}).then(()=> {
    renderOrderSummary();
    renderPaymentSummary();
  })
*/
/*
loadProducts( () => {
  loadCart(() => {
    renderOrderSummary();
    renderPaymentSummary();
  });
 });
*/
