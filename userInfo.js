import {formatArrayStrings} from "./arrayManipulation.js";

let currentId= 1;
function createUserProfiles(nameToBeModified,number){
    const modifiedNames = formatArrayStrings(nameToBeModified, number)
    return nameToBeModified.map((name, index)=>{
        return{
            originalName: name,
            modifiedName : modifiedNames[index],
            Id : currentId++
        }
    })

}
createUserProfiles(['naan',"kkda"],[1,2,])