const accesskey ="OUlPw06M_Y3JfluO7Sb1d1ng2d9q_pDO0-dMS7-lo1Q";

const searchform = document.querySelector(".search-form");
const searchbox = document.querySelector(".search-box");
const searchresult = document.querySelector(".search-result");
const showmore = document.querySelector(".show-more");
const searchbtn = document.querySelector(".search-btn");

let keyword = "";
let page = 1;

async function searchimages(){
    keyword = searchbox.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accesskey}&per_page=12`;
    
    const response = await fetch(url);
    const data = await response.json();
    
    console.log(data);

    const results = data.results;
    
    if(page===1){
        searchresult.innerHTML="";
    }

    results.map((result) =>{
        const image = document.createElement("img");
        image.src = result.urls.small;
        const imagelink = document.createElement("a");
        imagelink.src = result.links.html;
        imagelink.target = "_blank";

        imagelink.appendChild(image);
        searchresult.appendChild(imagelink);
    })
    showmore.style.display="block";
}

searchform.addEventListener("submit",(e)=>{
    e.preventDefault();
    page = 1;
    searchimages();
});

searchbtn.addEventListener("click",(e)=>{
    e.preventDefault();
    page = 1;
    searchimages();
});

showmore.addEventListener("click",()=>{
    page++;
    searchimages();
})