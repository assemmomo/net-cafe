let pc = document.getElementsByClassName("pc");
const pcArray = Array.from(pc);
let rightclickMenu = document.querySelector(".rightclickMenu");
let pcNum = document.querySelector(".pcNum");
let ipPrice = document.querySelector(".ipPrice");
let pcTime = document.querySelectorAll(".pcTime");
let boardTime = document.querySelector(".time");
let endDiv = document.querySelector(".endDiv");
let endBtn = document.querySelector(".endBtn");
let cancelBtn = document.querySelector(".cancelBtn");
let endPcNum = document.querySelector(".endPcNum");
let endPcTime = document.querySelector(".endPcTime");
let endPcPrice = document.querySelector(".endPcPrice");
let timeOne = document.querySelector(".timeOne");
let timeTwo = document.querySelector(".timeTwo");
let timeThree = document.querySelector(".timeThree");
let timeFore = document.querySelector(".timeFore");
let userBtn = document.querySelector(".userBtn");
let userPage = document.querySelector(".userPage");
let userName = document.querySelector(".userName");
let userNameIp = document.querySelector(".userNameIp");
let submit = document.querySelector(".submit");
let content = document.querySelector(".content");
let ipPriceSub = document.querySelector(".ipPriceSub");
let timeInt;
let timeCounterInt;


function openPc(){
    pcArray.forEach(function(element) {
            if(element.classList.contains("selected2")){
                element.classList.add("on");
                element.classList.remove("off");
                element.querySelector(".fa-desktop").style.color="green";
                let time = 0;
                timeInt = setInterval(function(){
                    time++;
                    element.querySelector("h2").innerHTML=time;
                },1000)
                boardTime.innerHTML=element.querySelector("h2").innerHTML;
                element.querySelector("h2").innerHTML=0;
            }
    });
};
function closePc(){
    pcArray.forEach(function(element) {
            if(element.classList.contains("selected2")){
                element.classList.add("off");
                element.classList.remove("on"); 
                if(element.classList.contains("on")){
                    element.querySelector(".fa-desktop").style.color="green";
                    let time = 0;
                    timeInt = setInterval(function(){
                        time++;
                        element.querySelector("h2").innerHTML=time;
                    },1000)
                    element.querySelector("h2").innerHTML=0;
                    boardTime.innerHTML=0;
                }else{
                    element.querySelector(".fa-desktop").style.color="blue";
                    clearInterval(timeInt);
                    endPcNum.innerHTML=element.querySelector("h1").innerHTML;
                    endPcTime.innerHTML="Time"+" "+":"+" "+element.querySelector("h2").innerHTML;
                    endPcPrice.innerHTML="Price"+" "+":"+" "+ (element.querySelector("h2").innerHTML * 0.16).toFixed(1)+" "+"LE";
                    endDiv.style.display="flex";
                    element.querySelector("h2").innerHTML="Closed";
                }
            }
        });
};

function turnOnPc(){
    pcArray.forEach(function(element) {
        if(element.classList.contains("selected2")){
        element.querySelector(".fa-desktop").style.color="blue";
        element.classList.add("online");
        element.classList.remove("offline");
        }
    });
};
function turnOffPc(){
    pcArray.forEach(function(element) {
        if(element.classList.contains("selected2")){
        element.querySelector(".fa-desktop").style.color="#ca331f";
        element.classList.remove("online");
        element.classList.add("offline");
        }
    });
};

pcArray.forEach(function(element) {
    element.addEventListener('dblclick', function() {
        element.classList.toggle("off");
        element.classList.toggle("on");
        element.classList.toggle("online");
        element.classList.toggle("offline");
        if(element.classList.contains("on")){
            element.querySelector(".fa-desktop").style.color="green";
            let time = 0;
            timeInt = setInterval(function(){
                time++;
                element.querySelector("h2").innerHTML=time;
            },1000)
            element.querySelector("h2").innerHTML=0;
            boardTime.innerHTML=0;
        }else{
            element.querySelector(".fa-desktop").style.color="blue";
            element.classList.add("online");
            element.classList.remove("offline");
            clearInterval(timeInt);
            endPcNum.innerHTML=element.querySelector("h1").innerHTML;
            endPcTime.innerHTML="Time"+" "+":"+" "+boardTime.innerHTML;
            endPcPrice.innerHTML="Price"+" "+":"+" "+ (boardTime.innerHTML * 0.16).toFixed(1)+" "+"LE";
            endDiv.style.display="flex";
            element.querySelector("h2").innerHTML="Closed";
        }
    });
    element.addEventListener('click',function(){
        pcArray.forEach(function(e){
            e.classList.remove("selected");
            e.classList.remove("time");
        })
        element.classList.add("selected");
        element.classList.add("time");
        pcNum.innerHTML=element.querySelector("h1").innerHTML;
        boardTime.innerHTML=element.querySelector("h2").innerHTML;
        // boardTime.innerHTML=element.querySelector("h2").innerHTML+" "+"sec";
        // if(element.classList.contains("selected")){
        //     timeCounterInt = setInterval(function(){boardTime.innerHTML=element.querySelector("h2").innerHTML+" "+"sec";},0)
        // }else{
        //     clearInterval(timeCounterInt);
        //     timeCounterInt = setInterval(function(){boardTime.innerHTML=element.querySelector("h2").innerHTML+" "+"sec";},0)
        // }
        // timeCounterInt = setInterval(function(){time.innerHTML=element.querySelector("h2").innerHTML;},0);
        // clearInterval(timeCounterInt);
        // timeCounterInt = setInterval(function(){time.innerHTML=element.querySelector("h2").innerHTML;},0);
        let time=0;
        timeOne.onclick=function(){
            element.classList.toggle("off");
            element.classList.toggle("on");
            if(element.classList.contains("on")){
                element.querySelector(".fa-desktop").style.color="green";
                //  time = 33 min;
                time += 33;
                timeInt = setInterval(function(){
                    time--;
                    element.querySelector("h2").innerHTML=time;
                    if(time==0){
                        // clearInterval(timeInt);
                        element.classList.toggle("off");
                        element.classList.toggle("on");
                        element.querySelector(".fa-desktop").style.color="blue";
                        element.querySelector(".fa-clock").style.display="none";
                        element.classList.add("online");
                        element.classList.remove("offline");
                        element.querySelector("h2").innerHTML="closed";
                    }
                },1000);
                element.querySelector("h2").innerHTML=time;
                boardTime.innerHTML=time;
                element.querySelector(".fa-clock").style.display="block";
            }
        }
        timeTwo.onclick=function(){
            element.classList.toggle("off");
            element.classList.toggle("on");
            if(element.classList.contains("on")){
                element.querySelector(".fa-desktop").style.color="green";
                // time = 67 min;
                time += 67;
                timeInt = setInterval(function(){
                    time--;
                    element.querySelector("h2").innerHTML=time;
                },1000);
                element.querySelector("h2").innerHTML=time;
                boardTime.innerHTML=time;
                element.querySelector(".fa-clock").style.display="block";
            }
        }
        timeThree.onclick=function(){
            element.classList.toggle("off");
            element.classList.toggle("on");
            if(element.classList.contains("on")){
                element.querySelector(".fa-desktop").style.color="green";
                // time = 134 min;
                time += 134;
                timeInt = setInterval(function(){
                    time--;
                    element.querySelector("h2").innerHTML=time;
                },1000);
                element.querySelector("h2").innerHTML=time;
                boardTime.innerHTML=time;
                element.querySelector(".fa-clock").style.display="block";
            }
        }
        timeFore.onclick=function(){
            element.classList.toggle("off");
            element.classList.toggle("on");
            if(element.classList.contains("on")){
                element.querySelector(".fa-desktop").style.color="green";
                // time = 201 min;
                time += 201;
                timeInt = setInterval(function(){
                    time--;
                    element.querySelector("h2").innerHTML=time;
                },1000);
                element.querySelector("h2").innerHTML=time;
                boardTime.innerHTML=time;
                element.querySelector(".fa-clock").style.display="block";
            }
        }
        })
    element.addEventListener('contextmenu', function(event) {
        event.preventDefault();
        rightclickMenu.style.display = 'block';
        rightclickMenu.style.left = `${event.pageX}px`;
        rightclickMenu.style.top = `${event.pageY}px`;
        pcArray.forEach(function(i){
            i.classList.remove("selected2");
        })
        element.classList.add("selected2");
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
endBtn.onclick=function(){
    endDiv.style.display="none";
    boardTime.innerHTML="Closed";
}
userBtn.onclick=function(){
    userPage.style.display="flex";
}
submit.onclick=function(){
    userName.innerHTML="cashier : " + userNameIp.value;
    userName.style.fontSize="22px !important";
    userPage.style.display="none";
    content.style.display="flex";
}
ipPriceSub.onclick=function(){
    if(ipPrice.value != ""){
        pcArray.forEach(function(element) {
            if(element.classList.contains("selected")){
                element.classList.add("on");
                element.classList.remove("off");
                element.querySelector(".fa-desktop").style.color="green";
                element.querySelector(".fa-clock").style.display="block";
                let time = (ipPrice.value/9)*60;
                timeInt = setInterval(function(){
                    time--;
                    element.querySelector("h2").innerHTML=time.toFixed(0);
                },1000)
                element.querySelector("h2").innerHTML=time.toFixed(0);
                boardTime.innerHTML=element.querySelector("h2").innerHTML;
                ipPrice.value=" ";
            }
        })
    }
}