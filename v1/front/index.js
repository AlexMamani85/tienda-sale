// const { json } = require("stream/consumers");
// const BASE_URI = 'http://localhost:5001/api/v1/';
const BASE_URI = 'https://tienda-sale.onrender.com/api/v1/';

async function apiFetch(
  endpoint,
  { method, headers, body } = {}
) {


  if (body) {
    headers = {
      "Content-Type": "application/json",
      ...headers,
    };
  }

  const config = {
    method: method || (body ? "POST" : "GET"),
    headers,
    body: body ? JSON.stringify(body) : null,
  };

  const response = await fetch(BASE_URI + endpoint, config);
  
  let data;
  if (!response.ok) {
    try {
      data = await response.json();
    } catch (error) {
      throw new Error(response.statusText);
    }
    throw new Error(data.errors);
  }

  try {
    data = await response.json();
  } catch (error) {
    data = response.statusText;
  }
  
  return data;
}

const content = document.querySelector("#content");
const optionSelect = document.querySelector("#option");
const buscarInput = document.querySelector("#buscarInput");

async function getSelectOptions(){
  datas = await apiFetch("categories")
  datas.result.forEach(data => {
    let opt = document.createElement('option');
    opt.value = data.id;
    opt.innerHTML = data.name;
    optionSelect.appendChild(opt)
  });
}

getSelectOptions();

async function getProducts(){
  datas = await apiFetch("products")
  datas.result.forEach(data => {
    const cardEl = document.createElement('div');
    cardEl.classList.add('card');
    cardEl.innerHTML = `
        <img class="image" src=${data.url_image}>
        <div class="name" 
          data-namecate=${data.namecate}
          data-category=${data.category}
          data-discount=${data.discount}
          data-id=${data.id}
          data-price=${data.price}
        >
          ${data.name}
        </div>
        <div class="price">$${data.price}</div>


        <input class="quantity" type="number" value=${data.quantity ? data.quantity :''} >         
    `;
    content.appendChild(cardEl);
  });
};


getProducts();


function getDataFromCards() {
  let dataCards = content.querySelectorAll(".card");
  let data2=[];
  
  dataCards.forEach(data=>{
    const category = data.querySelector('.name').getAttribute('data-category');
    const discount = data.querySelector('.name').getAttribute('data-discount');
    const id = data.querySelector('.name').getAttribute('data-id');
    const name = data.querySelector('.name').innerHTML;
    const price = data.querySelector('.name').getAttribute('data-price');

    const url_image = data.querySelector('.image').getAttribute('src');
    const quantity = data.querySelector('.quantity').value

    data2.push({category, discount,id,url_image,name,price,quantity});

  });
  return data2;
}


function filtrarPorSelect(event) {
  event.preventDefault();
  let data2 = content.querySelectorAll(".card");
  data2.forEach(data => {
  category=data.querySelector('.name').getAttribute('data-category');

  if (category.indexOf(optionSelect.value) > -1) 
    {data.style.display = 'block';} 
  else 
    {data.style.display = 'none';}

  });
}

function filtrarPorInput(event) {
  let data2 = content.querySelectorAll(".card");
  data2.forEach(data => {
  const term = event.target.value.toUpperCase();
  const nameTag = data.querySelector('.name');
  const name = nameTag.innerText.toUpperCase();
  const namecate = nameTag.getAttribute('data-namecate').toUpperCase();
  if (name.indexOf(term) > -1 || namecate.indexOf(term) > -1 ) 
    {data.style.display = 'block';} 
  else 
    {data.style.display = 'none';}

  });

}


optionSelect.addEventListener('change', filtrarPorSelect);
buscarInput.addEventListener('input', filtrarPorInput);