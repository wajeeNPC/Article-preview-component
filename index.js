let btnEL=document.querySelector(".btn-el");
let display=0;

function show(){
        if(display==1){
                document.querySelector(".share").classList.add("hide");
                display=0;
                btnEL.blur();
        }
        else{
                document.querySelector(".share").classList.remove("hide");  
                display=1;  
        }
}