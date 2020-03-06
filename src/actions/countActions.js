//Increment count function by 1
export const addCount = (number) => {
        //add 1 to the number and return for dispatch
        number = number + 1;
        return({
            type: "ADD_COUNT",
            payload: number
        });
    
}