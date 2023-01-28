const get = (array, index, defaultvalue = null) =>
{
    if (index >= 0 && index < array.length) {
        return array[index];
    }
 
    else{
        return defaultvalue;
    }
}

let array = ["one", "two", "three"];
console.log(get(array,1));

export default get;