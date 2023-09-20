


const words1 = ['Name1', 'Name2', 'Name3', 'Name4', 'Name5', 'Name6', 'Name7', 'Name8', 'Name9', 'Name10'];
const words2 = ['Name1', 'Name2', 'Name3', 'Name4', 'Name5', 'Name6', 'Name7', 'Name8', 'Name9', 'Name10'];

function RandomNames(arr1, arr2){
    const res = [];

    for(let i = 0; i < arr1.length; i++){
        for(let j = 0; j < arr2.length; j++){
            res.push(`${arr1[i]} ${arr2[j]}`);
        }
    }

    return res;
}

const allNames = RandomNames(words1, words2);
console.log(allNames);