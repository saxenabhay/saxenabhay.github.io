var x = localStorage.getItem("theme");
console.log(x);
if (x=="light"){
    document.documentElement.setAttribute('data-theme', 'light');
}else if (x=="dark"){
    document.documentElement.setAttribute('data-theme', 'dark');
}else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    // dark mode preset
    document.documentElement.setAttribute('data-theme', 'dark');
    localStorage.setItem('theme', 'dark');
    x = localStorage.getItem("theme");
}else{
    document.documentElement.setAttribute('data-theme', 'light');
    localStorage.setItem('theme', 'light');
    x = localStorage.getItem("theme");
}
