let showSnackbarBtn = document.getElementById("btn");
let snackbar = document.getElementById("snackbar");
let closeSnackbarBtn = document.getElementById("close");


const hideSnackbar = ()=>{
    snackbar.style.display = "none"
}

const showSnackbar = ()=>{
    snackbar.style.display = "block";
    setTimeout( () => {
        snackbar.style.display = "none"
    }, 4000)
}



// doubt!!!!!
// document.body.addEventListener("click", ()=>{
//     document.body.style.backgroundColor = "black"
// })

showSnackbarBtn.addEventListener("click", showSnackbar)

closeSnackbarBtn.addEventListener("click", hideSnackbar)

