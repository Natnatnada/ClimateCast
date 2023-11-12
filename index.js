function getCity(){
    event.preventDefault();
    let searchInput= document.getElementById("inputSearch")
    let cityName= document.getElementById("city")
    cityName.innerHTML= searchInput.value  
}


let searchForm= document.getElementById("searchForm")
searchForm.addEventListener("submit",getCity)