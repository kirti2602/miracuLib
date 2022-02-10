let ratingStar = document.querySelectorAll(".rating");

for(let i = 0; i<ratingStar.length; i++){
    ratingStar[i].addEventListener("click", ()=>{
        ratingStar[i].classList.toggle("active-rating");
    })
}