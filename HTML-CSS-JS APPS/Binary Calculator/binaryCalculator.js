const res = document.querySelector('#res');
const btns = document.querySelector('#btns');

let displayValue = '';

btns.addEventListener('click',function(e) {
    const value = e.target.value;

    switch(e.target.value){
        case('+'):
        case('-'):
        case('*'):
        case('/'):
        case('1'):
        case('0'):
            operator(value);
            break
        case('='):
            calculate(value);
            break;
        case('C'):
            clear();
            break; 
    }

});

function operator(num) {
    displayValue += num;
    res.innerHTML = displayValue;        
}

function calculate () {
    let getBeforeOperator;
    let getAfterOperator;
    if(displayValue.includes('+')){
        getBeforeOperator = displayValue.slice(0, displayValue.indexOf('+')).split('').reverse();
        getAfterOperator = displayValue.slice(displayValue.indexOf('+')+1,).split('').reverse();   
        let beforeTotal = 0;
        for (let i=0; i<getBeforeOperator.length; i++ ){
            beforeTotal += getBeforeOperator[i]*Math.pow(2,i)
        }
        let afterTotal = 0;
        for (let i=0; i<getAfterOperator.length; i++ ){
            afterTotal += getAfterOperator[i]*Math.pow(2,i)
        }
        res.innerHTML = (beforeTotal+afterTotal).toString(2);
    } else if(displayValue.includes('-')){
        getBeforeOperator = displayValue.slice(0, displayValue.indexOf('-')).split('').reverse();
        getAfterOperator = displayValue.slice(displayValue.indexOf('-')+1,).split('').reverse();  
        let beforeTotal = 0;
        for (let i=0; i<getBeforeOperator.length; i++ ){
            beforeTotal += getBeforeOperator[i]*Math.pow(2,i)
        }
        let afterTotal = 0;
        for (let i=0; i<getAfterOperator.length; i++ ){
            afterTotal += getAfterOperator[i]*Math.pow(2,i)
        }
        res.innerHTML = (beforeTotal-afterTotal).toString(2); 
    } else if(displayValue.includes('*')){
        getBeforeOperator = displayValue.slice(0, displayValue.indexOf('*')).split('').reverse();
        getAfterOperator = displayValue.slice(displayValue.indexOf('*')+1,).split('').reverse();   
        let beforeTotal = 0;
        for (let i=0; i<getBeforeOperator.length; i++ ){
            beforeTotal += getBeforeOperator[i]*Math.pow(2,i)
        }
        let afterTotal = 0;
        for (let i=0; i<getAfterOperator.length; i++ ){
            afterTotal += getAfterOperator[i]*Math.pow(2,i)
        }
        res.innerHTML = (beforeTotal*afterTotal).toString(2);
    } else if(displayValue.includes('/')){
        getBeforeOperator = displayValue.slice(0, displayValue.indexOf('/')).split('').reverse();
        getAfterOperator = displayValue.slice(displayValue.indexOf('/')+1,).split('').reverse(); 
        let beforeTotal = 0;
        for (let i=0; i<getBeforeOperator.length; i++ ){
            beforeTotal += getBeforeOperator[i]*Math.pow(2,i)
        }
        let afterTotal = 0;
        for (let i=0; i<getAfterOperator.length; i++ ){
            afterTotal += getAfterOperator[i]*Math.pow(2,i)
        }
        res.innerHTML = (beforeTotal/afterTotal).toString(2);  
    }
    
    

}

function clear() {
   displayValue = ''; 
   res.innerHTML = displayValue;
}