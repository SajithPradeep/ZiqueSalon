function triggerModal() {
   var displayType = document.getElementById("modal").style.display;
   if(displayType === "" || displayType === "none") {
       document.getElementById("modal").style.display = "flex";
   }
   else {
       document.getElementById("modal").style.display = "none"
   }
}