const bodyEl = document.querySelector("body")
console.log(bodyEl);
bodyEl.addEventListener("mousemove",(event)=>{
    bodyEl.style.background = "#000000";
    bodyEl.style.overflow = "hidden"
    const xpos =event.offsetX;
    const Ypos =event.offsetY;
    const spanEl =document.createElement("span");
    spanEl.style.left =`${xpos}px`;   
    spanEl.style.top =`${Ypos}px`;
    bodyEl.style.background =["#ffffff","#fe43ed","#4224ed"] ;
    const randomColor =Math.random();    
    const sizeHeart =Math.floor(Math.random()*200);
    spanEl.style.width =`${sizeHeart}px`;
    spanEl.style.height =`${sizeHeart}px`;
    bodyEl.appendChild(spanEl);
    setTimeout(() => {
        spanEl.remove();
    }, 3000);
});