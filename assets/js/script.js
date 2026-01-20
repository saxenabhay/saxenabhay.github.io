const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');
const modev = document.getElementById('modeic');

document.addEventListener("DOMContentLoaded", windowLoaded);
toggleSwitch.addEventListener('change', switchTheme, false);


function windowLoaded(){
    if (x=="light"){
        modev.style.transform="rotate(360deg)";
        toggleSwitch.checked = true;
    }


    // Apply fallback if `position: sticky` is not supported
    if (!CSS.supports("position", "sticky")) {
        stickyFallback(".sticky");
    }

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


function stickyFallback(selector) {
    var elements = document.querySelectorAll(selector);

    elements.forEach(function (el) {
        var placeholder = document.createElement("div");
        var offsetTop = el.offsetTop;

        placeholder.style.width = el.offsetWidth + "px";
        placeholder.style.height = el.offsetHeight + "px";
        placeholder.style.display = "none";
        
        el.parentNode.insertBefore(placeholder, el);

        window.addEventListener("scroll", function () {
            if (window.pageYOffset >= offsetTop) {
                if (!el.classList.contains("fixed")) {
                    el.classList.add("fixed");
                    el.style.position = "fixed";
                    el.style.top = "0px";
                    el.style.width = placeholder.style.width;
                    placeholder.style.display = "block";
                }
            } else {
                el.classList.remove("fixed");
                el.style.position = "";
                placeholder.style.display = "none";
            }
        });
    });
}