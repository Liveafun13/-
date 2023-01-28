const makeCensored = (text, censored) => {
    let result = "";
    let opa = "#$%@";
    let textArr = text.split(" ");
    for(let i = 0; i < textArr.length; i++) {
        if(censored.includes(textArr[i])) {
            textArr[i] = opa;
        }
        result += textArr[i] + " ";
    }
return result;
}

let text = "Я получил силу, которая и не снилась моему отцу";
console.log(makeCensored(text, "отцу"));

export default makeCensored;