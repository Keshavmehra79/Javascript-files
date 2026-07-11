const nestedArray = [1, 2, [3, 4, [5, 6], 7], 8, 9, 10];
function flateenArray(array){
    let flatendArray=[];
    for(const element of array){
        if(Array.isArray(element)){
            flatendArray.push(...flateenArray(element))
        }

        else{
            flatendArray.push(element);
        }
    }
    return flatendArray;        
    
}
console.log(flateenArray(nestedArray));
