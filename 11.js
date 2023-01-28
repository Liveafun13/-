const getSameParity = (arr) =>{
let result = [];

if(arr.length === 0){
  return arr;
}

else{
  for(let i = 0; i < arr.length; i++){
    if(arr[i] % 2 === arr[0] % 2)
    {
      result.push(arr[i]);
    }
  }
  return result;
}
};

let arr = [1,2,3];

console.log(getSameParity(arr))

export default getSameParity;