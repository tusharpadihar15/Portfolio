
var flag=0;
const element = document.getElementById("mode");
const menuicon= document.getElementById("menuiconid");
const menuicondiv= document.getElementById("menuicondiv");
const navlight=document.getElementById("navbarlight");
const navfc1= document.getElementById("nav1");
const navfc2= document.getElementById("nav2");
const navfc3= document.getElementById("nav3");
const navfc4= document.getElementById("nav4");
const navfc5= document.getElementById("nav5");
const abouttitle=document.getElementById("abouttitle");
const projecttitle=document.getElementById("projecttitle");
const technicaltitle=document.getElementById("technicaltitle");
const contacttitle=document.getElementById("contact");
const copyright=document.getElementById("copyright");
const home=document.getElementById("home");

menuicon.addEventListener("click",()=>{
    if (menuicondiv.style.display === "block") {
        menuicondiv.style.display = "none";
        home.style.marginTop = "0px";
      } 
      else {
        menuicondiv.style.display = "block";
        home.style.marginTop = "250px";
      }
})


element.addEventListener("click", () => {
    if (flag==0)
    {
        document.body.style.backgroundColor = "black";
        document.body.classList.add("dark");
        navlight.classList.add("navdarkmode");
        navfc1.classList.add("navfontblack");
        navfc2.classList.add("navfontblack");
        navfc3.classList.add("navfontblack");
        navfc4.classList.add("navfontblack");
        navfc5.classList.add("navfontblack");
        abouttitle.classList.add("dark");
        projecttitle.classList.add("dark");
        technicaltitle.classList.add("dark");
        contacttitle.classList.add("dark");
        copyright.style.color="white";
        flag=1;
    }
    else
    {
        document.body.style.backgroundColor = "white";
        document.body.classList.remove("dark");
        navlight.classList.remove("navdarkmode");
        navfc1.classList.remove("navfontblack");
        navfc2.classList.remove("navfontblack");
        navfc3.classList.remove("navfontblack");
        navfc4.classList.remove("navfontblack");
        navfc5.classList.remove("navfontblack");
        abouttitle.classList.remove("dark");
        projecttitle.classList.remove("dark");
        technicaltitle.classList.remove("dark");
        contacttitle.classList.remove("dark");
        copyright.style.color="black";
        flag=0;
    }

  });


