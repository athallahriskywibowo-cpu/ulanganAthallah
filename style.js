// loading animation

window.onload=function(){

    let loader=document.querySelector(".loader_bg");

    if(loader){

        loader.style.display="none";

    }

}



// efek muncul saat scroll

const boxes=document.querySelectorAll(
".service-box, .product-box, .for_box"
);


window.addEventListener("scroll",()=>{


boxes.forEach(box=>{


let posisi=box.getBoundingClientRect().top;


let layar=window.innerHeight;


if(posisi < layar-100){

box.style.opacity="1";
box.style.transform="translateY(0)";

}


});


});



// setting awal animasi

boxes.forEach(box=>{

box.style.opacity="0";

box.style.transform="translateY(50px)";

box.style.transition=".7s";

});