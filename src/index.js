function handleSearchSubmit(event){
    event.preventDefault();
let searchInput=document.querySelector("#search-form-input");   
let cityElement=document.querySelector("#city");
cityElement.innerHTML=searchInput.value;
}
let searchformelement = document.querySelector("#search-form");
searchformelement.addEventListener("submit" ,handleSearchSubmit);