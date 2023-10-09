function isEvenNumber(number){
    if (number === 0){
        return true;
    }
    else if (number === 1){
        return false;
    }
    else if ( number < 0){
        return isEvenNumber(-number);
    }
    else{
        return isEvenNumber(number-2);
    }
}
console.log(isEvenNumber(100));
console.log(isEvenNumber(30));