gino=Math.floor(0.234);
console.log(gino);
const button=document.querySelector('button')
const main=document.querySelector('main');

button.addEventListener('click',function(){
    main.innerHTML='';
 /*creo le 3 diverse difficoltà */
    let Input=document.querySelector('select');
    let difficulty=Input.value;
    let durata;
    
    if(difficulty=='facile'){
        durata=49;
        squareClass='box3';
       }else if(difficulty=='media'){
           durata=81;
           squareClass='box2';
       }else if(difficulty=='difficile'){
           durata=100;
           squareClass='box';
       }
       console.log(difficulty);

 /*creo griglia e box*/
const griglia=creaElemento('div','grid');

main.append(griglia);

let number=0;
for(let i=0;i<durata;i++){
    let square=creaElemento('div',squareClass);
    
       griglia.append(square);
    
       square.addEventListener('click',function(){
       
        square.classList.toggle('blu');
        console.log(i+1);

    });    
    
    number=number+1;
     square.append(number);
}
})


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
function randomDifferentNumber(minNum,maxNum,elementi){

}


   