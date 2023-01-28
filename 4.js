const reverse = (array) =>
{
    let result = [];
    let b = 0;
    
    for(let i = array.length-1; i >= 0; i--){
        result[b] = array[i];
        b++;
    }
    
     for(let i = 0; i < array.length; i++){
         array[i] = result[i];
     }
     
    return array;
}

let array = ["one", "two", "three"];
console.log(reverse(array));

export default reverse;