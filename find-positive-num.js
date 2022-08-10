

function findPositiveNum(numbers){
    let positiveNumber = [];
    for(let i = 0 ; i <= numbers.length ; i++){
        const number = numbers[i];
        if(number >= 0){
            positiveNumber.push(number);
        }
        else{
            break;
        }
    }
    return positiveNumber;
}
const numbers = [10,80,30,50,66,87,99,-12,110,103,-5,105];
const result = findPositiveNum(numbers);
console.log(result);