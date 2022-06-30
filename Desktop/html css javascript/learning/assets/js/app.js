const btns = document.querySelectorAll(".btn");
(function buttonClick(){
    btns.forEach((button)=>{
        button.addEventListener("click",()=>{
            btns.forEach((btn)=>btn.style.borderColor="blueviolet");
            const ss= button.getAttribute("data-color-btn");
            button.style.borderColor=ss;
        })
    })
})();