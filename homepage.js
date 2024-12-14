let navbarStatus=false;
let navbar=document.getElementById('navbar')

function getNavbar(){
    if (navbarStatus) {
        navbar.style.display='block'
    }else{
        navbar.style.display='none'
    }
}

let changeNavStatus=()=>{
    navbarStatus=!navbarStatus;
    getNavbar();
}
