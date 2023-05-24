gino=Math.floor(0.234);
console.log(gino);
const button=document.querySelector('button')
const main=document.querySelector('main');

button.addEventListener('click',function(){
    main.innerHTML='';
 /*creo le 3 diverse difficoltà */
    const Input=document.querySelector('select');
    let difficulty=Input.value;
    let durata;
    let bombe;
    if(difficulty=='facile'){
        durata=49;
        squareClass='box3';
        bombe=9;
       }else if(difficulty=='media'){
           durata=81;
           squareClass='box2';
           bombe=10;
       }else if(difficulty=='difficile'){
           durata=100;
           squareClass='box';
           bombe=16;
       }
       console.log(difficulty);

 /*creo griglia e box*/
const griglia=creaElemento('div','grid');

main.append(griglia);

let number=0;
let bomba=randomUnicNumber(1,durata,bombe);
console.log(bomba)   
for(let i=0;i<durata;i++){
    let square=creaElemento('div',squareClass);
    
       griglia.append(square);
     finePartita=false;
     if(finePartita=false){ square.addEventListener('click',function(){
        square.classList.toggle('blu');
        
        let indice=i+1;
        console.log(indice);

        if(bomba.includes(indice)){
            square.classList.toggle('red');
            square.classList.remove('blu');
            finePartita=true;
        }  
    });    
    number=number+1;
    square.append(number);
}
}})

      

/*funzioni */
function creaElemento(elementi,classe){
    let myElement=document.createElement(elementi);
    myElement.classList.add(classe);

    return myElement;
}

function randomNUmber(minNum,maxNum){
    let numberRandom=Math.floor(Math.random()*(maxNum-minNum)+minNum);

    return numberRandom;
}

/*faccio funzione per generare numeri diversi tra di loro*/
function randomUnicNumber(minNum,maxNum,elements){
 
    let ArrayRandom=[];

    while(ArrayRandom.length<elements){
       
        let generatedNumber=randomNUmber(minNum,maxNum)
        if(!(ArrayRandom.includes(generatedNumber))){
            ArrayRandom.push(generatedNumber);
        } 
    }
    return ArrayRandom;
}


   