function animatedForm(){
    const arrows = document.querySelectorAll('.fa-arrow-down');
   arrows.forEach(arrow =>{
       arrow.addEventListener('click',()=>{
          const input = arrow.previousElementSibling;
          const parent = arrow.parentElement;
          const nextForm = parent.nextElementSibling;

// check for validation
if(input.type==="text" && validatorUser(input)){
   nextSlide(parent,nextForm);
}else if(input.type === 'email' && validatorEmail(input)){
    nextSlide(parent,nextForm);
}else if(input.type === "password" && validatorUser(input)){
    nextSlide('parent',nextForm);
}else{
     parent.style.animation ="shake 0.5s ease" ; 
}


// get rid of animation 
parrent.addEventListener("animationed",() =>{
    parent.style.animation ="";
})
       });
   });

}
function validatorUser(user){
    if (user.value.length < 6){
        console.log("not enough characters");
        error('rgb(189,87,87)');
    }else{
        error('rgb(87,189,130)');
        return true;
    }
}
function validatorEmail(email){
    const validation = /^[^\s@]+@[^\s@]+\.^\s@]+$/;
    if(validation.test(email.value)){
        error('rgb(189,87,87)');
        return true;
    }else{
        error("rgb(189,87,87)");
        return true;
    }
}

function nextSlide(parent,nextForm){
    parent.classList.add('innactive');
    parent.classList.remove('active');
    parent.classList.add('active');

}

function error(color){
    document.body.style.backgroundColor = color;
}




animatedForm();