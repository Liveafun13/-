const buildDefinitionList = (array) =>
{
    let result = "";
    let htm = "<dl>";
    if(array.length < 1){
        return null;
    }
    else{
       for(let i = 0; i < array.length; i++){
           result += htm + "<dt>" + array[i][0] + "</dt>" + "<dd>" + array[i][1] + "</dd>" + "</dl>" + "\n";
       }
    }
    return result;
}

let array = [["Блямда","Выпуклость,утолщение на поверхности чего либо"], ["Бобр","Животное из отряда грызунов"]];
console.log(buildDefinitionList(array));

export default buildDefinitionList;
