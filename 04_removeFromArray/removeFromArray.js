const removeFromArray = (inputArray, ...args)=>{
    
    let inputArrCopy = [...inputArray];
    // console.log(inputArrCopy)
    
    
   args.forEach(argument => {
        
        inputArray.forEach(element => {
            
            if(argument === element){
                
                let indexOfArgInArr = inputArrCopy.indexOf(argument);
                
                inputArrCopy.splice(indexOfArgInArr,1)
               
            }
        });
   });
   return inputArrCopy;
}
console.log(removeFromArray([1, 2, 3, 4], 1, 2, 3, 4))
// Do not edit below this line
module.exports = removeFromArray;
