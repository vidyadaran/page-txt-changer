alert("click ok then type any key and see the magic");
const keyHandler = (event)=> {
     document.querySelector(".content").innerHTML=event.key
}


  document.addEventListener("keydown",keyHandler);
