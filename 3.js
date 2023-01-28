const addPrefix = (array, prefix) =>
{
    let result = [];
    for(let i = 0; i < array.length; i++){
        result[i] = prefix + " " + array[i];
    }
    return result;
}

let array = ["one", "two", "three"];
console.log(addPrefix(array,"MR"));

export default addPrefix;