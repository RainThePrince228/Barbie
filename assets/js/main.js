let navigation = [
    {
        "image": "assets/img/Vector (1).png",
        "text": "Home",
    },

    {
        "image": "assets/img/Vector (2).png",
        "text": "Accessories",
    },

    {
        "image": "assets/img/Vector (3).png",
        "text": "Gallery",
    },

    {
        "image": "assets/img/Vector (4).png",
        "text": "Shop",
    },

    {
        "image": "assets/img/Vector (5).png",
        "text": "Support",
    }
];

let li = document.getElementsByClassName("with_img");

console.log(navigation);
for (let index = 0; index < navigation.length; index++) {
    console.log(li[index]);
    
    let li_img = li[index].getElementsByTagName("img");
        li_img[0].src = navigation[index].image;

    let li_span = li[index].getElementsByTagName("span");
        li_span[0].textContent = navigation[index].text;
}

let barbie_images = [
    "assets/img/girls/barbie_doll (1).png",
    "assets/img/girls/barbie_doll (2).png",
    "assets/img/girls/barbie_doll (3).png",
    "assets/img/girls/barbie_doll (4).png",
    "assets/img/girls/barbie_doll (5).png",
    "assets/img/girls/barbie_doll (6).png",
    "assets/img/girls/barbie_doll (7).png",
    "assets/img/girls/barbie_doll (8).png",
];

console.log(barbie_images);
  
let start = 0;
  
let img = document.querySelectorAll(".items .item img");
console.log(img);
function slider(start) {
    for (let index = 0; index < 4; index++) {
        // console.log(img[index]);
        img[index].src = barbie_images[index + start];
    }
}
  
slider(start);
  
let arrow_button = document.getElementsByClassName("arrow");
console.log(arrow_button);
arrow_button[0].addEventListener("mousedown", function () {
    start++;
    if (start >  4) {
        start = 0;
    }
slider(start);
});
  
let model_window = document.getElementById("model");
let close_button = model_window.querySelector(".close");
  
close_button.addEventListener("mousedown", function () {
    model_window.style.display = "none";
});
  
let sections = document.getElementsByClassName("item");
  
for (let i = 0; i < sections.length; i++) {
    sections[i].addEventListener("click", function () {
        let clickedImage = this.querySelector("img");
        let modelImage = model_window.querySelector("img");
    
        modelImage.src = clickedImage.src;
        model_window.style.display = "block";
    });
}
