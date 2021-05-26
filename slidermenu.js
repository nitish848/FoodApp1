console.log("hello");
let headermenu = document.getElementById("headermenu");
let headerUl=document.getElementById("ulul");
let menubtn = document.getElementById("menubtn");
let menucross = document.getElementById("menucross");
let limenu = document.getElementById("limenu");
function boggle(){
    headermenu.style.height="400px";
    headerUl.style.marginTop="142px";
    headerUl.style.paddingTop="40px";
    menucross.style.display="block";
    menubtn.innerHTML=``;
    limenu.style.marginTop="19px";

}
function change(){
    headermenu.style.height="50px";
    headerUl.style.marginTop="-305px";
    headerUl.style.paddingTop="0px";    
    menubtn.innerHTML="Menu";
}
