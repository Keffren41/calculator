const elem = {
    inp : document.querySelector('.input'),
    num : document.querySelectorAll('.num'),
    ac : document.querySelector('.ac'),
    pm : document.querySelector('.pm'),
    mod : document.querySelector('.mod'),
    dot : document.querySelector('.dot'),
    div : document.querySelector('.div'),
    mul : document.querySelector('.mul'),
    pls : document.querySelector('.pls'),
    min : document.querySelector('.min'),
    eql : document.querySelector('.eql')
}

let term1 = 0;
let term2 = 0;
let firstop = false;

elem.num.forEach(button => {button.addEventListener('click', () => {
    if(parseFloat(elem.inp.innerHTML)==0){//daca scrie 0 pe calculator adauga 7
        elem.inp.innerHTML = parseFloat(elem.inp.innerHTML)+parseFloat(button.innerHTML);
    } else if(elem.inp.innerHTML.includes('.')) {
        elem.inp.innerHTML += button.innerHTML;
    } else {
        elem.inp.innerHTML += button.innerHTML;
    }
})})

elem.pm.addEventListener('click', () => {
    if(!elem.inp.innerHTML.includes('-')){
        elem.inp.innerHTML = "-" + elem.inp.innerHTML
    } else if(elem.inp.innerHTML.includes('-')){
        elem.inp.innerHTML = elem.inp.innerHTML.replace('-', '')
    } 
})

elem.mod.addEventListener('click', () => {
    elem.inp.innerHTML = parseFloat(elem.inp.innerHTML) /100;
})

elem.dot.addEventListener('click', () => {
    if(!elem.inp.innerHTML.includes('.'))
    {
        elem.inp.innerHTML = elem.inp.innerHTML + '.';
    }
})

let cdiv=false;
let cmul=false;
let cmin=false;
let cpls=false;

elem.ac.addEventListener('click', () => {
    elem.inp.innerHTML = "0";

    term1=0;
    term2=0;

    cdiv=false;
    cmul=false;
    cmin=false;
    cpls=false;

    firstop = false;

    elem.div.style.color='white';
    elem.div.style.backgroundColor='orange';

    elem.mul.style.backgroundColor='orange';
    elem.mul.style.color='white';

    elem.min.style.backgroundColor='orange';
    elem.min.style.color='white';

    elem.pls.style.backgroundColor='orange';
    elem.pls.style.color='white';
})

elem.div.addEventListener('click', () => {
    cdiv=true;
    cmul=false;
    cmin=false;
    cpls=false;

    if(cdiv==true && term1==0){
        elem.div.style.color='orange';
        elem.div.style.backgroundColor='white';
        term1=elem.inp.innerHTML;
        elem.inp.innerHTML = 0;
    }
    if(cdiv==true && term1!=0){
        elem.div.style.color='orange';
        elem.div.style.backgroundColor='white';
        if(firstop==false){
            term2=elem.inp.innerHTML;
        } 
        else {
            elem.inp.innerHTML = 0;
        }
    }
    if(cmul==false){
        elem.mul.style.backgroundColor='orange';
        elem.mul.style.color='white';
    }
    if(cmin==false){
        elem.min.style.backgroundColor='orange';
        elem.min.style.color='white';
    }
    if(cpls==false){
        elem.pls.style.backgroundColor='orange';
        elem.pls.style.color='white';
    }
})

elem.mul.addEventListener('click', () => {
    cdiv=false;
    cmul=true;
    cmin=false;
    cpls=false;
    if(cdiv==false){
        elem.div.style.backgroundColor='orange';
        elem.div.style.color='white';
    }
    if(cmul==true && term1==0){
        elem.mul.style.color='orange';
        elem.mul.style.backgroundColor='white';
        term1=elem.inp.innerHTML;
        elem.inp.innerHTML = 0;
    }
    if(cmul==true && term1!=0){
        elem.mul.style.color='orange';
        elem.mul.style.backgroundColor='white';
        if(firstop==false){
            term2=elem.inp.innerHTML;
        } 
        else {
            elem.inp.innerHTML = 0;
        }
    }  
    if(cmin==false){
        elem.min.style.backgroundColor='orange';
        elem.min.style.color='white';
    }
    if(cpls==false){
        elem.pls.style.backgroundColor='orange';
        elem.pls.style.color='white';
    }

})

elem.min.addEventListener('click', () => {
    cdiv=false;
    cmul=false;
    cmin=true;
    cpls=false;
    if(cdiv==false){
        elem.div.style.backgroundColor='orange';
        elem.div.style.color='white';
    }
    if(cmul==false){
        elem.mul.style.backgroundColor='orange';
        elem.mul.style.color='white';
    }
    if(cmin==true && term1==0){
        elem.min.style.color='orange';
        elem.min.style.backgroundColor='white';
        term1=elem.inp.innerHTML;
        elem.inp.innerHTML = 0;
    }
    if(cmin==true && term1!=0){
        elem.min.style.color='orange';
        elem.min.style.backgroundColor='white';
        if(firstop==false){
            term2=elem.inp.innerHTML;
        } 
        else {
            elem.inp.innerHTML = 0;
        }
    }
    if(cpls==false){
        elem.pls.style.backgroundColor='orange';
        elem.pls.style.color='white';
    }
})

elem.pls.addEventListener('click', () => {
    cdiv=false;
    cmul=false;
    cmin=false;
    cpls=true;
    if(cdiv==false){
        elem.div.style.backgroundColor='orange';
        elem.div.style.color='white';
    }
    if(cmul==false){
        elem.mul.style.backgroundColor='orange';
        elem.mul.style.color='white';
    }
    if(cmin==false){
        elem.min.style.backgroundColor='orange';
        elem.min.style.color='white';
    }
    if(cpls==true && term1==0){
        elem.pls.style.color='orange';
        elem.pls.style.backgroundColor='white';
        term1=elem.inp.innerHTML;
        elem.inp.innerHTML = 0;
    }

    if(cpls==true && term1!=0){
        elem.pls.style.color='orange';
        elem.pls.style.backgroundColor='white';
        if(firstop==false){
            term2=elem.inp.innerHTML;
        } 
        else {
            elem.inp.innerHTML = 0;
        }
    }
})

elem.eql.addEventListener('click', () => {
    if(term2==0 || firstop==true){
        term2=elem.inp.innerHTML;
    }

    if(cdiv==true){
        elem.inp.innerHTML=term1/term2;
        firstop = true;
    }

    if(cmul==true){
        elem.inp.innerHTML=term1*term2;
        firstop = true;
    }

    if(cmin==true){
        elem.inp.innerHTML=parseFloat(term1)-parseFloat(term2);
        firstop = true;
    }

    if(cpls==true){
        elem.inp.innerHTML=parseFloat(term1)+parseFloat(term2);
        firstop = true;
    }

    if(firstop==true){
        term1=elem.inp.innerHTML;
        term2=0;
    
        cdiv=false;
        cmul=false;
        cmin=false;
        cpls=false;
    
        elem.div.style.color='white';
        elem.div.style.backgroundColor='orange';
    
        elem.mul.style.backgroundColor='orange';
        elem.mul.style.color='white';
    
        elem.min.style.backgroundColor='orange';
        elem.min.style.color='white';
    
        elem.pls.style.backgroundColor='orange';
        elem.pls.style.color='white';
    }
})










