const loadData = async() => {
  const res = await fetch('https://openapi.programming-hero.com/api/phones?search=${searchText}')
  const data= await res.json();
  console.log(data);
}

loadData();