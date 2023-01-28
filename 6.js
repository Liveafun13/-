const calculateSum = (array) =>
{
    let result = 0;
    if(array.length < 1){
        return null;
    }
    else{
    for(let i = 0; i < array.length; i++){
        result = result + array[i];
    }
    return result / array.length;
}
}
let array = [ 36,37.4,39,41,36.6 ];
console.log(calculateSum(array));

export default calculateSum;