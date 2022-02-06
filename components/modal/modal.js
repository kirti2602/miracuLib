// Javascript for modal functionality 
    
const showModalBtn = document.getElementById("showModal");
const modal = document.getElementById("modal")
const closeBtn1 = document.getElementById("closeModal1")
const closeBtn2 = document.getElementById("closeModal2")

const homepage = document.getElementById("homepage")

showModalBtn.addEventListener("click", ()=>{
    modal.style.display = "flex";
    document.body.style.overflow = "hidden";
})


/*closes modal on click*/

const closeModal = () => {
    modal.style.display = "none";
    document.body.style.overflow = "visible";
}


closeBtn1.addEventListener("click", closeModal)

closeBtn2.addEventListener("click", closeModal)

// document.body.addEventListener("click", closeModal)





