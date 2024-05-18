
function  processArray(arr){
    return arr.map((item)=>{
        if(item%2==0){
            console.log(item**2)
        }else{
            console.log( item*3)
        }
    })
}
processArray([1,2,4])

function formatArrayStrings(arrString,arr){
    return arrString.map((item,index)=>{
        if(arr[index]%2==0){
            console.log(item.toUpperCase())
        }else{
            console.log(item.toLowerCase())
        }
    })

}
formatArrayStrings(["Key","dabu","nein"],[1,2,4])

// console.log("hello world")
export { formatArrayStrings };
