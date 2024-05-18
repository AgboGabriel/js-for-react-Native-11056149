import {formatArrayStrings} from "./arrayManipulation.js";



function createUserProfiles(nameToBeModified,number){
    const modifiedNames = formatArrayStrings(nameToBeModified, number)
    return nameToBeModified.map((name, index)=>{
        return{
            originalName: name,
            modifiedName : modifiedNames[index]
        }
    })

}
createUserProfiles(['naan',"kkda"],[1,2,])