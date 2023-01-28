const swap = (array) =>
{
    let i = array.length-1;
    let result = [];
    
    if(i < 1)
    
    {
        return array;
    }
    
    result = array[0];
    array[0] = array[i];
    array[i] = result;
    
    return array;
}

let array = ["one", "two", "three"];
console.log(swap(array));

export default swap;
