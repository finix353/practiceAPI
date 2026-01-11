const loadData = async() => {
  const res = await fetch('https://openapi.programming-hero.com/api/phones?search=${searchText}')
  const data= await res.json();
  const phones= data.data;
  console.log(phones);
  display(phones);
}

const display = phones =>{
  console.log(phones);
  const phoneContainer= document.getElementById('phone-container');
  
  phones.forEach( phone=> {
    console.log(phone);
    const phoneCard= document.createElement('div');
    phoneCard.classList=`card bg-base-100 w-96 shadow-sm`;
    phoneCard.innerHTML=`<figure><img
                        src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                        alt="Shoes" />
                </figure>
                <div class="card-body">
                        <h2 class="card-title">${phone.phone_name}</h2>
                        <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                    <div class="card-actions justify-end">
                        <button class="btn btn-primary">Buy Now</button>
                    </div>
                </div>`;
    
    phoneContainer.appendChild(phoneCard);
  
  });

}

loadData();