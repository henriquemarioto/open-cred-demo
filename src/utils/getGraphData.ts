import getRandomNumber from "./getRandomNumber"

const getGraphData = (min: number, max: number, loop: number) => {
    let arr: number[] = []
    
    for(let i = 0; i < loop; i++){
        arr.push(getRandomNumber(min, max));
    }

    return arr
}

export default getGraphData;