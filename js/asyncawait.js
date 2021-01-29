// JavaScript Async Await
const products = [
   {
      id: 1,
      amount: 20,
      sold: 12,
      price: 'Rp. 3.500.000',
      product: 'Smart Phone',
   },
   {
      id: 2,
      amount: 27,
      sold: 10,
      price: 'Rp. 8.000.000',
      product: 'Laptop',
   },
   {
      id: 3,
      amount: 10,
      sold: 5,
      price: 'Rp. 5.500.000',
      product: 'Desktop PC',
   },
   {
      id: 4,
      amount: 30,
      sold: 20,
      price: 'Rp. 1.750.000',
      product: 'Smart Watch',
   },
];

const showProducts = document.getElementById('showProducts');

function getProducts() {
   setTimeout(() => {
      let output = '<h1 class="title title-larges">Get Products Data</h1>';

      products.forEach((product) => {
         output += `
            <div class="article">
               <table class="table">
                  <tr>
                     <th>Id</th>
                     <td>${product.id}</td>
                  </tr>
                  <tr>
                     <th>Product</th>
                     <td>${product.product}</td>
                  </tr>
                  <tr>
                     <th>Price</th>
                     <td>${product.price}</td>
                  </tr>
                  <tr>
                     <th>Amount</th>
                     <td>${product.amount}</td>
                  </tr>
                  <tr>
                     <th>Sold</th>
                     <td>${product.sold}</td>
                  </tr>
               </table>
            </div>
         `;
      });

      showProducts.innerHTML = output;
   }, 2000);
}

function createProduct(product) {
   return new Promise((resolve, reject) => {
      setTimeout(() => {
         products.push(product);

         const error = false;
         if (!error) {
            resolve();
         } else {
            reject('Error: Something went wrong!');
         }
      }, 3000);
   });
}

async function initialize() {
   await createProduct({
      id: 5,
      amount: 40,
      sold: 25,
      price: 'Rp. 1.000.000',
      product: 'Head Phone',
   });
   getProducts();
}

initialize();

// JavaScript Async Await with Fetch
const showUsers = document.getElementById('showUsers');

async function getUsers() {
   const response = await fetch('../data/users.json');
   const data = await response.json();

   setTimeout(() => {
      let output = '<h1 class="title title-larges">Get Users Data</h1>';

      data.forEach((user) => {
         output += `
         <ul class="article">
            <li>Id: ${user.id}</li>
            <li>Name: ${user.name}</li>
            <li>Email: ${user.email}</li>
            <li>Phone: ${user.phone}</li>
            <li>Website: ${user.website}</li>
         </ul>
      `;
      });

      showUsers.innerHTML = output;
   }, 3000);
}

getUsers();
