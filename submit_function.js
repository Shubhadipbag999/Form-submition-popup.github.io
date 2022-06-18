function submit(){
    
   setTimeout(()=>{
    var f_name = document.getElementById("f_name").value;
    var l_name = document.getElementById("l_name").value;
    var full_name = f_name+" "+l_name; 
    localStorage.setItem('Name',full_name.toUpperCase());
    var name=document.getElementById("fetch_name");
    console.log(full_name);
    var pop =document.getElementById("popup");
    name.innerText=full_name.toLocaleUpperCase();
    pop.classList.remove("hide");
    var sign =document.getElementById("signup");
    sign.classList.add("hide");
    console.log(sign)
   },2000);
}

function remove(){
    document.getElementById("f_name").value="";
    document.getElementById("l_name").value="";
    document.getElementById("email").value="";
    document.getElementById("password").value="";

    var pop =document.getElementById("popup");
    var sign =document.getElementById("signup");
    sign.classList.remove("hide");  
    pop.classList.add("hide");
}

function reset(){
    document.getElementById("f_name").value="";
    document.getElementById("l_name").value="";
    document.getElementById("email").value="";
    document.getElementById("password").value="";
}

// window.addEventListener("load",()=>{
//     document.getElementById("f_name").value="";
//     document.getElementById("l_name").value="";
//     document.getElementById("email").value="";
//     document.getElementById("password").value="";
// });