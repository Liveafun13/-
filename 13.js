const getDistance = (pointA, pointB) => {
  const xDistance = pointA[0] - pointB[0];
  const yDistance = pointA[1] - pointB[1];
  return Math.sqrt(Math.pow(xDistance, 2) + Math.pow(yDistance, 2));
};

const getTotalA = (locations, currentP) =>{
  let result;
  let result_point;
  let result_name;
  
  if(locations === null){
    return null;
  }
    
  else{
    for(let i = 0; i < locations.length; i++){
      let points = locations[i];
      let point = points[1];
      let name_l = points[0];
      
      result = getDistance(point, currentP);
      
      if(result < 99999999){
        result_name = name_l;
        result_point = point;
      }   
    }
  }
  return result_name;
};

let current = [5,5];
let arr = [
  ["Park",[10,5]],
  ["Sea",[1,3]],
  ["Museum",[8,4]],
];

console.log(getTotalA(arr, current))

export default getDistance;