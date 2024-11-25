    
let navbar = document.querySelector('.header .flex .navbar');

document.querySelector('#menu-btn').onclick = () =>{
   navbar.classList.toggle('active');
}

let account = document.querySelector('.user-account');

document.querySelector('#user-btn').onclick = () =>{
   account.classList.add('active');
}

document.querySelector('#close-account').onclick = () =>{
   account.classList.remove('active');
}

let myOrders = document.querySelector('.my-orders');

document.querySelector('#order-btn').onclick = () =>{
   myOrders.classList.add('active');
}

document.querySelector('#close-orders').onclick = () =>{
   myOrders.classList.remove('active');
}

let cart = document.querySelector('.shopping-cart');

document.querySelector('#cart-btn').onclick = () =>{
   cart.classList.add('active');
}

document.querySelector('#close-cart').onclick = () =>{
   cart.classList.remove('active');
}

window.onscroll = () =>{
   navbar.classList.remove('active');
   myOrders.classList.remove('active');
   cart.classList.remove('active');
};
   

let slides = document.querySelectorAll('.home-bg .home .slide-container .slide');
let index = 0;

function next(){
   slides[index].classList.remove('active');
   index = (index + 1) % slides.length;
   slides[index].classList.add('active');
}

function prev(){
   slides[index].classList.remove('active');
   index = (index - 1 + slides.length) % slides.length;
   slides[index].classList.add('active');
}

let accordion = document.querySelectorAll('.faq .accordion-container .accordion');

accordion.forEach(acco =>{
   acco.onclick = () =>{
      accordion.forEach(remove => remove.classList.remove('active'));
      acco.classList.add('active');
   }
});

let signup = document.quaryselector('flex');
let signout = document.quaryselector('logged-in');

document.quaryselector('#login').onclick =() =>{
   signup.classList.remove('active');
   signout.classList.add('active');
}

document.quaryselector('#logout').onclick =() =>{
   signup.classList.add('active');
   signout.classList.remove('active');
}

    
        function showpwd(){
            var openid=document.getElementById("open");
            var closeid=document.getElementById("close");
            var pass=document.getElementById("pass");
            if(pass.type == "password"){
                pass.type = "text";
                closeid.style.display = "none";
                openid.style.display = "inline";
            }
            else if(pass.type == "text"){
                pass.type = "password";
                closeid.style.display = "inline";
                openid.style.display = "none";
            }
        }

        function showpd(){
            var openide=document.getElementById("opn");
            var closeide=document.getElementById("cls");
            var pas=document.getElementById("pas");
            if(pas.type == "password"){
                pas.type = "text";
                closeide.style.display = "none";
                openide.style.display = "inline";
            }
            else if(pas.type == "text"){
                pas.type = "password";
                closeide.style.display = "inline";
                openide.style.display = "none";
            }
        }

   function editText() {
      var text = document.getElementById("displayText").innerText;
         document.getElementById("editTextBox").value = text;
         document.querySelector(".edit-box").style.display = "block";
      }
   
   function saveText() {
      var newText = document.getElementById("editTextBox").value;
         document.getElementById("displayText").innerText = newText;
         document.querySelector(".edit-box").style.display = "none";
      }
   
   
   
   function editTextP() {
      var text = document.getElementById("displayTextP").innerText;
         document.getElementById("editTextBoxP").value = text;
         document.querySelector(".edit-boxP").style.display = "block";
      }
   
   function saveTextP() {
      var newText = document.getElementById("editTextBoxP").value;
         document.getElementById("displayTextP").innerText = newText;
         document.querySelector(".edit-boxP").style.display = "none";
      }
   
   
   
   function editTextE() {
      var text = document.getElementById("displayTextE").innerText;
         document.getElementById("editTextBoxE").value = text;
         document.querySelector(".edit-boxE").style.display = "block";
      }
   
   function saveTextE() {
      var newText = document.getElementById("editTextBoxE").value;
         document.getElementById("displayTextE").innerText = newText;
         document.querySelector(".edit-boxE").style.display = "none";
      }
   
   
   
   function editTextA() {
      var text = document.getElementById("displayTextA").innerText;
         document.getElementById("editTextBoxA").value = text;
         document.querySelector(".edit-boxA").style.display = "block";
      }
   
   function saveTextA() {
      var newText = document.getElementById("editTextBoxA").value;
         document.getElementById("displayTextA").innerText = newText;
         document.querySelector(".edit-boxA").style.display = "none";
      }

   
let list = document.querySelector('.boxcontainer');
let listCard = document.querySelector('.listCard');
let total = document.querySelector('.t-box');
let quantity = document.querySelector('.quantity');
let displayorder = document.querySelector('.display-orders');

let products = [
    {
        id: 1,
        name: 'pizza 1',
        image: 'pizza-1.jpg',
        price: 2
    },
    {
        id: 2,
        name: 'pizza 2',
        image: 'pizza-2.jpg',
        price: 4
    },
    {
        id: 3,
        name: 'pizza 3',
        image: 'pizza-3.jpg',
        price: 2
    },
    {
        id: 4,
        name: 'pizza 4',
        image: 'pizza-4.jpg',
        price: 3
    },
    {
        id: 5,
        name: 'pizza 5',
        image: 'pizza-5.jpg',
        price: 2
    },
    {
        id: 6,
        name: 'pizza 6',
        image: 'pizza-6.jpg',
        price: 4
    },
    {
        id: 7,
        name: 'pizza 7 ',
        image: 'pizza-7.jpg',
        price: 2
    },
    {
        id: 8,
        name: 'pizza 8',
        image: 'pizza-8.jpg',
        price: 3
    },
    {
        id: 9,
        name: 'pizza 9',
        image: 'pizza-9.jpg',
        price: 4
    }
];
let listCards  = [];
function initApp(){
    products.forEach((value, key) =>{
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML = `
            <div class="price">$${value.price.toLocaleString()}/-</div>
            <img src="images/${value.image}" alt="">
            <div class="name">${value.name}</div>
            <button onclick="addToCard(${key})" class="btn">Add To Card</button>`;
        list.appendChild(newDiv);
    })
}
initApp();
function addToCard(key){
    if(listCards[key] == null){
        // copy product form list to list card
        listCards[key] = JSON.parse(JSON.stringify(products[key]));
        listCards[key].quantity = 1;
    }
    reloadCard();
    reloadorder();
}

function reloadCard(){
    listCard.innerHTML = '';
    let count = 0;
    let totalPrice = 0;
    listCards.forEach((value, key)=>{
        totalPrice = totalPrice + value.price;
        count = count + value.quantity;
        if(value != null){
            let newDiv = document.createElement('li');
            newDiv.innerHTML = `
               <i class="fas fa-times" onclick='removeitem(${key})' ></i>
               <img src="images/${value.image}" alt="">
               <div class="content">
               <div class="p">${value.name}</span></div>
               <div class="btm">
               <div class="qty">
                  <button onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
                  <div class="count" min="1">${value.quantity}</div>
                  <button onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
               </div>
                  <div class="price">$${value.price.toLocaleString()}/-</div>
               </div>
               </div>`;
                listCard.appendChild(newDiv);
        }
    })
    total.innerText = totalPrice.toLocaleString();
    quantity.innerText = count;
}


function reloadorder(){
    displayorder.innerHTML = '';
    let count = 0;
    let totalPrice = 0;
    listCards.forEach((value, key)=>{
        totalPrice = totalPrice + value.price;
        count = count + value.quantity;
        if(value != null){
            let newDiv = document.createElement('li');
            newDiv.innerHTML = 
               `<div class="item">
               <p>${value.name} x ${value.quantity}<span>( $${value.price}/- )</span></p>
               <a class="fas fa-times" onclick='removeitem(${key})' ></a>
               </div>`;
               displayorder.appendChild(newDiv);
        }
    })
    total.innerText = totalPrice.toLocaleString();
    quantity.innerText = count;
}

function removeitem(key){
   delete listCards[key];
   reloadCard();
   reloadorder();
}

function changeQuantity(key, quantity){
    if(quantity == 0){
        delete listCards[key];
    }else{
        listCards[key].quantity = quantity;
        listCards[key].price = quantity * products[key].price;
    }
    reloadCard();
    reloadorder();
   }


function reloadorder(){
    displayorder.innerHTML = '';
    let count = 0;
    let totalPrice = 0;
    listCards.forEach((value, key)=>{
        totalPrice = totalPrice + value.price;
        count = count + value.quantity;
        if(value != null){
            let newDiv = document.createElement('li');
            newDiv.innerHTML = 
               `<div class="item">
               <p>${value.name} x ${value.quantity}<span>( $${value.price}/- )</span></p>
               <a class="fas fa-times" onclick='removeitem(${key})' ></a>
               </div>`;
               displayorder.appendChild(newDiv);
        }
    })
    total.innerText = totalPrice.toLocaleString();
    quantity.innerText = count;
}



   // Toggle between login and signup forms
   function toggleForm(formType) {
     if (formType === 'login') {
       document.getElementById('login-form').style.display = 'block';
       document.getElementById('signup-form').style.display = 'none';
     } else {
       document.getElementById('login-form').style.display = 'none';
       document.getElementById('signup-form').style.display = 'block';
     }
   }

   // Handle signup form submission
   function handleSignup(event) {
     event.preventDefault();  // Prevent form from refreshing page

     const name = document.getElementById('signupName').value;
     const mobile = document.getElementById('signupMobile').value;
     const email = document.getElementById('signupEmail').value;
     const password = document.getElementById('pas').value;
     const address = document.getElementById('signupAddress').value;

     // Basic validation
     if (name && mobile && email && password && address) {
       const user = {
         name: name,
         mobile: mobile,
         email: email,
         password: password,
         address: address,
         profileImage: null // Placeholder for image
       };

       // Store user in sessionStorage for demo (you can use a database for real apps)
       sessionStorage.setItem('user', JSON.stringify(user));

       alert('Sign Up successful!');
       showProfile(user);  // Show profile page
     } else {
       alert('Please fill all fields!');
     }
   }

   // Handle login form submission
   function handleLogin(event) {
     event.preventDefault();

     const loginEmail = document.getElementById('loginy').value;
     const loginPassword = document.getElementById('pass').value;

     // Retrieve user from sessionStorage
     const storedUser = JSON.parse(sessionStorage.getItem('user'));

     // Check if credentials match
     if (storedUser && storedUser.email === loginEmail && storedUser.password === loginPassword) {
       alert('Login successful!');
       showProfile(storedUser);  // Show profile page
     } else {
       alert('Invalid credentials!');
     }
   }

   // Show profile information
   function showProfile(user) {
     document.getElementById('login-form').style.display = 'none';
     document.getElementById('signup-form').style.display = 'none';
     document.getElementById('profile-container').style.display = 'block';

     // Populate profile details
     document.getElementById('profileName').textContent = user.name;
     document.getElementById('profileEmail').textContent = user.email;
     document.getElementById('profileMobile').textContent = user.mobile;
     document.getElementById('profileAddress').textContent = user.address;

     // Display profile image if it exists
     if (user.profileImage) {
       document.getElementById('profile-image').src = user.profileImage;
     } else {
       document.getElementById('profile-image').style.backgroundColor = '#ccc'; // Default image background
     }
   }

   // Handle profile image upload
   function uploadImage(event) {
     const file = event.target.files[0];
     if (file) {
       const reader = new FileReader();
       reader.onload = function(e) {
         const imageUrl = e.target.result;

         // Save image URL to sessionStorage and update profile image
         const storedUser = JSON.parse(sessionStorage.getItem('user'));
         storedUser.profileImage = imageUrl;
         sessionStorage.setItem('user', JSON.stringify(storedUser));

         document.getElementById('profile-image').src = imageUrl;
       };
       reader.readAsDataURL(file);
     }
   }

   // Handle logout
   function logout() {
     sessionStorage.removeItem('user');
     document.getElementById('profile-container').style.display = 'none';
     document.getElementById('login-form').style.display = 'block';
   }

