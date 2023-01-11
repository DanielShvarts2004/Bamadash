const Bamadash = {
    calc(operand1, operand2, operator) {
        try{
            if(typeof(operand1) != "number" && typeof(operand2) != "number") throw new Error("not valid parameters !");
            switch(operator){
                case "+":
                    return (operand1 + operand2).toFixed(5);
                case "-":
                    return (operand1 - operand2).toFixed(5);
                case "*":
                    return (operand1 * operand2).toFixed(5);    
                case "/":
                    return (operand1 / operand2).toFixed(5);   
                default:
                    throw new Error('Parameters are not valid !');      
            }
        }catch(error){
            console.log("NaN");
        }
        
    },

    compact(array){
        return array.filter((value) => {
            return value != null && value != 0 && value != NaN && value != undefined && value != "";
        });
    },

    intersection(array1,array2, isStrict){
        const retArray = [];
        switch(isStrict){
            case true:
                array1.forEach(element => {
                    if(array2.includes(element)) retArray.push(element);
                });
                return retArray;
            case false:
                array1.forEach(element1 => {
                    array2.forEach(element2 => {
                        if(element1 == element2) retArray.push(element1);
                    });
                });
                return retArray;
            default:
                throw new Error("isStrict parameter not bool");
        }
    },

    size(collection) { 
        if(collection == undefined) return 0;
        if(typeof(collection) == "object") return Object.keys(collection).length;
        return collection.length;
    },

    castArray(value) {
        if(Array.isArray(value)) return value;
        else return [value];
    }
}
export {Bamadash};