const reviews = [
    {
        id: 1,
        img: "images/user-2.png",
        name: "sara khan",
        info: "loreLorem ipsum dolor sit amet consectetur adipisicing elit. A, suscipit! Sed eum eaque et fugih haha hauha hauh jajs hsusy asgs "
    },
    {
        id:2,
        img:"images/user-3.png",
        name:" ali khan",
        info: "loreLorem ipsum dolor sit amet consectetur adipisicing elit. A, suscipit! Sed eum eaque et fugih haha hauha hauh jajs hsusy asgs "
    },
    {
        id: 3,
        img: "images/user-4.jpg",
        name: " hassan ali",
        info: "loreLorem ipsum dolor sit amet consectetur adipisicing elit. A, suscipit! Sed eum eaque et fugih haha hauha hauh jajs hsusy asgs "

    },
    {
        id:4,
        img:"images/user-5.jpg",
        name: "ali ahmed",
        info:"loreLorem ipsum dolor sit amet consectetur adipisicing elit. A, suscipit! Sed eum eaque et fugih haha hauha hauh jajs hsusy asgs "

    },
    {
        id:5,
        img:"images/user-1.png",
        name:"hussain ",
        info:"loreLorem ipsum dolor sit amet consectetur adipisicing elit. A, suscipit! Sed eum eaque et fugih haha hauha hauh jajs hsusy asgs "
    }


];

var img = document.querySelector("#person-img");
var user = document.querySelector("#name");
var info = document.querySelector("#info");
const next = document.querySelector("#next");
const prev = document.querySelector("#prev");

//starting items
let curItem=0;

// for load initialy 
window.addEventListener('DOMContentLoaded',function()
{
    showperson(curItem);
   
});

function showperson(person)
{
    const item=reviews[person];
    img.src = item.img;
    user.textContent= item.name;
    info.textContent=item.info;
};

//next 

next.addEventListener('click',function()
{
    curItem++;
    if(curItem > reviews.length-1)
    {
        curItem=0;
    }
    showperson(curItem);
});

//prev
prev.addEventListener('click',function()
{
    curItem--;
    if(curItem < 0)
    {
        curItem=4;
    }
    showperson(curItem);
})

