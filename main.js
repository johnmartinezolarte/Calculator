const tag=parameter=>document.getElementById(parameter)
const values=document.querySelectorAll('.valor');
const display=tag('display');
const operator=tag('operador');
const sum=tag('suma');
const subtraction=tag('resta');
const multiplication=tag('multi');
const division=tag('division');
const equals=tag('igual');
const deleteAC=tag('borrar');

sum.addEventListener('click', ()=>{
    operator.textContent='+';
    values[1].focus();
})
subtraction.addEventListener('click', ()=>{
    operator.textContent='-';
    values[1].focus();
})
multiplication.addEventListener('click', ()=>{
    operator.textContent='*';
    values[1].focus();
})
division.addEventListener('click', ()=>{
    operator.textContent='/';
    values[1].focus();
})

values[1].addEventListener("keyup", function(event){
    event.preventDefault();
    if(event.keyCode === 13){
        equals.click();
    }
});

equals.addEventListener('click', ()=>{
    let a=+values[0].value;
    let b=+values[1].value;
    if(operator.textContent==='+'){
        display.innerText=a+b;
    }else if(operator.textContent==='-'){
        display.innerText=a-b;
    }else if(operator.textContent==='*'){
        display.innerText=a*b;
    }else if(operator.textContent==='/'){
        display.innerText=a/b;
    }else{
        display.innerText='Error';
    }
});

deleteAC.addEventListener('click', ()=>{
    operator.textContent='';
    display.innerText='';
    values[0].value='';
    values[1].value='';
});