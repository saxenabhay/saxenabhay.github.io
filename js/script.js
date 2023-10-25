const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');
const modev = document.getElementById('mode');
const menub = document.querySelector('#menub input[type="button"]');
const closeb = document.querySelector('#closeich input[type="button"]');
let navborState = true; //false- border not visible

window.addEventListener("scroll", function(){
    scrollTest(false);
});
document.addEventListener("DOMContentLoaded", windowLoaded);

toggleSwitch.addEventListener('change', switchTheme, false);

menub.addEventListener('click', function(){
    menutog(true);
});
closeb.addEventListener('click', function(){
    menutog(false);
});



function windowLoaded(){
    
    scrollTest(true);
    
    document.getElementById("nav").style.display = "FLEX";
    if (x=="light"){
        modev.style.transform="rotate(360deg)";
        toggleSwitch.checked = true;
    }
    textEffect();
}

function switchTheme(e) {
    if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
        modev.style.transform="rotate(360deg)";
    }
    else {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
        modev.style.transform="rotate(0deg)";
    }    
}
function scrollTest(animate){
    const nav = document.getElementById('nav');
    if(!animate){
        nav.style.transition = "all 0s";
    }
    let scroll_y = window.scrollY;
    if((window.innerHeight + Math.round(window.scrollY)) >= document.body.offsetHeight){
        document.documentElement.style.backgroundColor="var(--footer)";
    }
    if (scroll_y == 0){
        if(navborState){
            nav.style.boxShadow = "none";
            nav.style.borderBottom = "1px solid rgba(0,0,0,0)";
            nav.style.backgroundColor = "var(--bg-a)";
            navborState = false;
            document.documentElement.style.backgroundColor="var(--bg-a)";
        }
    }else{
        if(!navborState){
            nav.style.boxShadow = "0 16px 32px -16px rgba(0,0,0,0.1)";
            nav.style.borderBottom = "1px solid var(--border)";
            nav.style.backgroundColor = "var(--bg-blur)";
            navborState = true;
        }
    }
    if(!animate){
        nav.style.transition = "border-bottom ease-in-out 0.18s, box-shadow ease-in-out 0.25s";
    }
}

function textEffect(){
    const title = document.getElementById("title");
    title.innerHTML = "";
    let bt = "HI, I'M ABHAY SAXENA";
    let i = 0;
    function loop(i){
        let timez = 50 + Math.floor(Math.random()*3)*100;
        setTimeout(function(){
            let textn = title.innerHTML.slice(0,i);
            title.innerHTML = textn + bt.charAt(i);
            i++; 
            if(i < bt.length){
                loop(i);
            }
        }, timez);
    }
    loop(i);
}

function menutog(opening){
    const menulst = document.getElementById('navrightchild');
    const mb = document.getElementById("menub");
    const cb = document.getElementById("closeich");
    if(opening){
        menulst.style.left="0vw";
        mb.style.transform = "rotate(360deg)";
        cb.style.transform = "rotate(0deg)";
    }else{
        menulst.style.left="-100vw";
        cb.style.transform = "rotate(360deg)";
        mb.style.transform = "rotate(0deg)";
    }
}