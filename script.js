
document.getElementById("signIn").addEventListener("click", function () {
    window.location.href = "signin.html";
  });

  function openNav(){
    document.getElementById("mysidebar").style.width="365px";
    document.getElementById("#main").style.marginLeft="365px";
  }

  function closeNav(){
    document.getElementById("mysidebar").style.width="0";
    document.getElementById("#main").style.marginLeft="0";
  }

  

function show_location() {
  const loc = document.querySelector(".location");
  const overlay = document.getElementById("overlay");

  loc.classList.add("Location");  
  overlay.style.display = "block"; 
}


function CLose_Location() {
  const loc = document.querySelector(".location");
  const overlay = document.getElementById("overlay");

  loc.classList.remove("Location");  
  overlay.style.display = "none"; 
}

let signin = document.getElementById("sign-in");
signin.addEventListener("click", function () {
    window.location.href = "signin.html";
  });

