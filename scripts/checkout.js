import { renderOrderSummary } from "./chekout/orderSummary.js";
import { renderPaymentSummary } from "./chekout/paymentSummary.js";
import { loadProducts,loadProductsFetch } from "../data/products.js";
import { loadCart,loadCartFetch } from "../data/cart.js";
// import '../data/backend-practice.js';
// import '../data/cart-class.js'

// Same as down code but less code
// function loadPage() { return new Promise((resolve) => {console.log('load page');resolve();})}

await Promise.all([loadProductsFetch(),loadCartFetch()])


async function loadPage()
{
  try 
  { // we can groupe multiple promises in Promise.all and we move the await before it not before tthe two functions 
    await Promise.all([loadProductsFetch(),loadCartFetch()])
    // await loadProductsFetch();
    // await loadCartFetch();
    // same as loadProductsFetch().then(()=> { ..... });
    /*await new Promise( (resolve,reject) => { 
      loadCart( () => {
        // reject('error3')
        resolve(); 
      }) 
    });*/
    
  }
  catch (error)
  {
    console.log('Unexpexted error . Please try again later.')
  }
   renderOrderSummary();
   renderPaymentSummary();
}
loadPage()

/*
Promise.all([
  loadProductsFetch(),
  new Promise( (resolve) => {
    loadCart(() => {
      resolve(); // if we wanna add something to pass to then like variables or something we need it go here inside resolve ()
    });
  })

]).then( () => { // if we added a parameter into then () it will show us an array of all the parameter passed inside the resolves ()
  renderOrderSummary();
  renderPaymentSummary();
});
*/
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
