let pc = document.getElementsByClassName("pc");
const pcArray = Array.from(pc);
let rightclickMenu = document.querySelector(".rightclickMenu");
let pcNum = document.querySelector(".pcNum");
let ipPrice = document.querySelector(".ipPrice");



function openPc(){
    pcArray.forEach(function(element) {
            element.classList.remove("off");
            element.classList.add("on");
            if(element.classList.contains("on")){
                element.querySelector(".fa-desktop").style.color="green";
            }else{
                element.querySelector(".fa-desktop").style.color="#ca331f";
            }
            element.addEventListener('contextmenu', function(event) {
                event.preventDefault();
                rightclickMenu.style.display = 'block';
                rightclickMenu.style.left = `${event.pageX}px`;
                rightclickMenu.style.top = `${event.pageY}px`;
            });
        });
};
function closePc(){
    pcArray.forEach(function(element) {
            element.classList.remove("on");
            element.classList.add("off");
            if(element.classList.contains("on")){
                element.querySelector(".fa-desktop").style.color="green";
            }else{
                element.querySelector(".fa-desktop").style.color="#ca331f";
            }
            element.addEventListener('contextmenu', function(event) {
                event.preventDefault();
                rightclickMenu.style.display = 'block';
                rightclickMenu.style.left = `${event.pageX}px`;
                rightclickMenu.style.top = `${event.pageY}px`;
            });
        });
};


pcArray.forEach(function(element) {
    element.addEventListener('dblclick', function() {
        element.classList.toggle("off");
        element.classList.toggle("on");
        if(element.classList.contains("on")){
            element.querySelector(".fa-desktop").style.color="green";
        }else{
            element.querySelector(".fa-desktop").style.color="#ca331f";
        }
    });
    element.addEventListener('click',function(){
        pcArray.forEach(function(e){
            e.classList.remove("selected");
        })
        element.classList.add("selected");
        pcNum.innerHTML=element.querySelector("h1").innerHTML;
    })
    element.addEventListener('contextmenu', function(event) {
        event.preventDefault();
        rightclickMenu.style.display = 'block';
        rightclickMenu.style.left = `${event.pageX}px`;
        rightclickMenu.style.top = `${event.pageY}px`;
    });
}
);
document.addEventListener('contextmenu', function(event) {
    event.preventDefault();
});
document.addEventListener('click', function(event) {
    rightclickMenu.style.display = 'none';
});

function addTime(){
    ipPrice.focus();
}
