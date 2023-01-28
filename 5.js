const calculateSum = (array) =>
{
    let result = 0;
    if(array.length < 1){
        return null;
    }
    else{
    for(let i = 0; i < array.length; i++){
        if(array[i] % 3 === 0){
            result = result + array[i];
        }
    }
    return result;
}
}
let array = [ 2,0,17,3,9,15,4 ];
console.log(calculateSum(array));

export default calculateSum;