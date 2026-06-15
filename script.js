/* NAV */
function go(page){
    window.location.href = page;
}

/* SPLASH */
window.onload = ()=>{
    setTimeout(()=>{
        let s = document.getElementById("splash");
        if(s) s.style.display="none";
    },5000);
};

/* CV */
function openCV(file){
    window.open(file,"_blank");
}

/* DARK MODE */
function toggleDark(){
    document.body.classList.toggle("light");
}

/* LANG (FAKE SIMPLE) */
function changeLang(){
    alert("Langue changée (démo)");
}