let open_btn = document.querySelector('.open-btn');
let cookies_box = document.querySelector('.cookies-box');
let close_btn = document.querySelector('.close-btn');

open_btn.addEventListener('click', () => {
    cookies_box.classList.toggle('active');
    if(open_btn.innerText === "Show PopUp"){
        open_btn.innerText = "Hide PopUp"
    }else{
        open_btn.innerText = "Show PopUp" 
    }
})

close_btn.addEventListener('click', () => {
    cookies_box.classList.remove('active');
    open_btn.innerText = "Show PopUp";
})