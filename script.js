// ==============================
// ELEMENTS
// ==============================

const rotateScreen = document.getElementById("rotateScreen");
const content = document.getElementById("content");

const intro = document.getElementById("introText");

const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");

const yesSection = document.getElementById("yesSection");

const dateButton = document.getElementById("dateButton");

const dateSection = document.getElementById("dateSection");

const confirmDate = document.getElementById("confirmDate");

const finalSection = document.getElementById("finalSection");

const selectedDate = document.getElementById("selectedDate");

const daySelect = document.getElementById("daySelect");

const hearts = document.getElementById("hearts");
const flowers = document.getElementById("flowers");
const confetti = document.getElementById("confetti");


// ==============================
// LANDSCAPE CHECK
// ==============================

function checkOrientation(){

    if(window.innerWidth > window.innerHeight){

        rotateScreen.style.display="none";
        content.style.display="flex";

    }

    else{

        rotateScreen.style.display="flex";
        content.style.display="none";

    }

}

window.addEventListener("resize",checkOrientation);

checkOrientation();


// ==============================
// DAY SELECTOR
// ==============================

for(let i=1;i<=31;i++){

    const option=document.createElement("option");

    option.value=i;

    option.textContent=i;

    daySelect.appendChild(option);

}


// ==============================
// INTRO
// ==============================

content.style.opacity="0";

setTimeout(()=>{

    content.style.opacity="1";

    content.classList.add("fadeIn");

},6000);


// ==============================
// NO BUTTON TELEPORT
// ==============================

function moveButton(){

    const x=Math.random()*(window.innerWidth-150);

    const y=Math.random()*(window.innerHeight-80);

    noBtn.style.position="fixed";

    noBtn.style.left=x+"px";

    noBtn.style.top=y+"px";

}

noBtn.addEventListener("mouseenter",moveButton);

noBtn.addEventListener("touchstart",(e)=>{

    e.preventDefault();

    moveButton();

});

noBtn.addEventListener("click",(e)=>{

    e.preventDefault();

    moveButton();

});


// ==============================
// YES
// ==============================

yesBtn.onclick=function(){

    document.getElementById("buttons").style.display="none";

    yesSection.style.display="block";

    yesSection.classList.add("fadeIn");

}


// ==============================
// DATE BUTTON
// ==============================

dateButton.onclick=function(){

    dateSection.style.display="block";

    dateSection.classList.add("fadeIn");

}


// ==============================
// DATE CONFIRM
// ==============================

confirmDate.onclick=function(){

    if(daySelect.value===""){

        alert("Pehle date choose karo 😌❤️");

        return;

    }

    selectedDate.textContent=daySelect.value;

    finalSection.style.display="block";

    finalSection.classList.add("celebrate");

    celebrate();

    console.log("Selected Date:",daySelect.value);

    alert("Selected Date : "+daySelect.value);

}
// ==============================
// CHERRY BLOSSOMS 🌸
// ==============================

const blossomIcons=["🌸","🌸","🌸","🌺"];

function createFlower(){

    const flower=document.createElement("div");

    flower.className="flower";

    flower.innerHTML=
    blossomIcons[Math.floor(Math.random()*blossomIcons.length)];

    flower.style.left=Math.random()*100+"vw";

    flower.style.fontSize=(18+Math.random()*20)+"px";

    flower.style.animationDuration=(5+Math.random()*5)+"s";

    flower.style.animationDelay=Math.random()*2+"s";

    flowers.appendChild(flower);

    flower.addEventListener("animationend",()=>{

        flower.remove();

    });

}

setInterval(createFlower,120);


// ==============================
// FLOATING HEARTS ❤️
// ==============================

const heartIcons=[
"❤️",
"💖",
"💕",
"💗",
"💝"
];

function createHeart(){

    const heart=document.createElement("div");

    heart.className="heart";

    heart.innerHTML=
    heartIcons[Math.floor(Math.random()*heartIcons.length)];

    heart.style.left=Math.random()*100+"vw";

    heart.style.fontSize=(16+Math.random()*22)+"px";

    heart.style.animationDuration=(5+Math.random()*4)+"s";

    hearts.appendChild(heart);

    heart.addEventListener("animationend",()=>{

        heart.remove();

    });

}

setInterval(createHeart,350);


// ==============================
// SPARKLES ✨
// ==============================

const sparkleIcons=[
"✨",
"⭐",
"💫"
];

function createSparkle(){

    const sparkle=document.createElement("div");

    sparkle.className="sparkle";

    sparkle.innerHTML=
    sparkleIcons[Math.floor(Math.random()*sparkleIcons.length)];

    sparkle.style.left=Math.random()*100+"vw";

    sparkle.style.top=Math.random()*100+"vh";

    sparkle.style.fontSize=(12+Math.random()*16)+"px";

    document.body.appendChild(sparkle);

    sparkle.addEventListener("animationend",()=>{

        sparkle.remove();

    });

}

setInterval(createSparkle,700);


// ==============================
// CONFETTI 🎉
// ==============================

const confettiIcons=[
"🎉",
"🎊",
"✨",
"💖",
"🌸"
];

function burstConfetti(){

    for(let i=0;i<180;i++){

        setTimeout(()=>{

            const piece=document.createElement("div");

            piece.className="confetti";

            piece.innerHTML=
            confettiIcons[Math.floor(Math.random()*confettiIcons.length)];

            piece.style.left=Math.random()*100+"vw";

            piece.style.fontSize=(18+Math.random()*16)+"px";

            piece.style.animationDuration=(3+Math.random()*2)+"s";

            confetti.appendChild(piece);

            piece.addEventListener("animationend",()=>{

                piece.remove();

            });

        },i*12);

    }

}


// ==============================
// EXTRA BLOSSOM BURST 🌸
// ==============================

function blossomBurst(){

    for(let i=0;i<120;i++){

        setTimeout(()=>{

            createFlower();

        },i*15);

    }

}


// ==============================
// CELEBRATION HELPER
// ==============================

function celebrate(){

    burstConfetti();

    blossomBurst();

}
// =======================================
// PART 3
// Final Logic & Finishing Touches
// =======================================


// Smooth appearance
function showElement(element){

    element.style.display="block";

    element.classList.remove("fadeIn");

    void element.offsetWidth;

    element.classList.add("fadeIn");

}


// YES button animation improvement
yesBtn.addEventListener("click",()=>{

    showElement(yesSection);

});


// DATE button animation improvement
dateButton.addEventListener("click",()=>{

    showElement(dateSection);

});


// Confirm Date
confirmDate.addEventListener("click",()=>{

    if(daySelect.value===""){

        alert("Pehle ek date choose karo ❤️");

        return;

    }

    selectedDate.textContent=daySelect.value;

    showElement(finalSection);

    finalSection.classList.add("celebrate");

    celebrate();

    console.clear();

    console.log(
        "%c❤️ MIMMI DATE BOOKED ❤️",
        "font-size:22px;color:#ff3f8e;font-weight:bold;"
    );

    console.log(
        "%cSelected Date : "+daySelect.value,
        "font-size:18px;color:#444;"
    );

    alert(
        "Yayyy! ❤️\n\nDate Booked : "+daySelect.value
    );

});


// Little button pop
document.querySelectorAll("button").forEach(button=>{

    button.addEventListener("click",()=>{

        button.classList.remove("pop");

        void button.offsetWidth;

        button.classList.add("pop");

    });

});


// Continuous blossoms
setInterval(()=>{

    for(let i=0;i<4;i++){

        createFlower();

    }

},700);


// Extra hearts
setInterval(()=>{

    createHeart();

},1000);


// Sparkles
setInterval(()=>{

    createSparkle();

},1200);


// Prevent dragging images
document.querySelectorAll("img").forEach(img=>{

    img.setAttribute("draggable","false");

});


// Disable right click
document.addEventListener("contextmenu",(e)=>{

    e.preventDefault();

});


// Prevent text selection
document.addEventListener("selectstart",(e)=>{

    e.preventDefault();

});


// Keep checking orientation
setInterval(checkOrientation,500);


// Greeting in console
console.log(
`
❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️

        FOR MY MIMMI

Made with love ❤️

❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️
`
);


// Tiny random title animation
const titles=[
"❤️ For My Mimmi ❤️",
"🌸 Love Loading...",
"💖 Just For You",
"🥹 Mimmi ❤️",
"💕 Forever?"
];

let titleIndex=0;

setInterval(()=>{

    document.title=titles[titleIndex];

    titleIndex++;

    if(titleIndex>=titles.length){

        titleIndex=0;

    }

},2500);


// End ❤️