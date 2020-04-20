// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

require("@rails/ujs").start()
require("turbolinks").start()
require("@rails/activestorage").start()
require("channels")


// Uncomment to copy all static images under ../images to the output folder and reference
// them with the image_pack_tag helper in views (e.g <%= image_pack_tag 'rails.png' %>)
// or the `imagePath` JavaScript helper below.
//
// const images = require.context('../images', true)
// const imagePath = (name) => images(name, true)


// ----------------------------------------------------
// Note(lewagon): ABOVE IS RAILS DEFAULT CONFIGURATION
// WRITE YOUR OWN JS STARTING FROM HERE 👇
// ----------------------------------------------------

// External imports
import "bootstrap";
import flatpickr from "flatpickr";

// Internal imports, e.g:
// import { initSelect2 } from '../components/init_select2';
import { flatpickrInit } from '../components/flatpickr';

document.addEventListener('turbolinks:load', () => {
  flatpickrInit();
  // Call your functions here, e.g:
  // initSelect2();
});


// button collapse dashbord orders

// const orders = document.querySelector('.dashboard-orders').childNodes;
// // const button = document.querySelector('.link-collapse');


// orders.forEach((order) => {
//   let collapseIcon = document.querySelector('#collapse-icon');
//   order.addEventListener('click', (event) => {
//     console.log(order);
//     if(collapseIcon.className == 'fas fa-chevron-up'){
//       collapseIcon.className = 'fas fa-chevron-down';
//       console.log(event);
//     } else if(collapseIcon.className == 'fas fa-chevron-down'){
//       collapseIcon.className = 'fas fa-chevron-up';
//       console.log(event);
//     };
//   });
// });


