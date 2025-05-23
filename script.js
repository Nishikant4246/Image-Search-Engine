const accessKey = "NPVOn6GWsw9yrTOI20sv1ORWjQraKUm-5IXr46tmob8"
const searchForm = document.getElementById("search-form");
const searchBox = document.getElementById("search-box");
const searchResult = document.getElementById("search-result");
const showMoreBtn = document.getElementById("show-more-btn");

let keyword = "";
let page = 1;

async function searchImages() {
  keyword = searchBox.value;
  const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accessKey}&per_page=12`;

  const responce = await fetch(url);
  const data = await responce.json();
  
   if(page === 1){
    searchResult.innerHTML = "";
   }
   const results = data.results;

  results.map((result) =>{
    const image = document.createElement("img");
    image.src = result.urls.small;
    const imageLink = document.createElement("a");
    imageLink.target = "_blank";
    
    imageLink.appendChild(image);
    searchResult.appendChild(imageLink);
    imageLink.href = result.links.html;

  })
  showMoreBtn.style.display = "block";
  showMoreBtn.style.marginTop = "40px";
}

searchForm.addEventListener("submit", (e) =>{
    e.preventDefault();
    page = 1;
    searchImages();
})

showMoreBtn.addEventListener("click", ()=>{
    page++;
    searchImages();
})

document.addEventListener("contextmenu", (e)=>{
    e.preventDefault();
},false);