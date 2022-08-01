//1  repeat a given string for num of times(it is solved using recursion-facturial)
function repeatstr(str,num) {
    if(num==0){
        return ''
    }
     let name =  str + repeatstr(str, num-1)
     return name.toUpperCase()   
}
console.log(repeatstr('israel', 4));

//you are given two arrays and an index copy each element of the first array into the 
//second array in order

function franklinSplice(arr1,arr2,n) {
    let num = arr2
    num.splice(n, 0,arr1)
    return num;    
}
console.log(franklinSplice([1,2,3],[4,5], 2));


//convert a string to a spinal case
function SpinalCase(str) {
    let newarr = str.split(' ')
    let update =[]
    for (let index = 0; index < newarr.length; index++) {
        update.push(newarr[index].toLowerCase())    
    }
    return update.join('-')    
}
console.log(SpinalCase('This Is Spinal Tap'));


//return the provided string of each word capitalized and the rest of the word in lowercase
function titleCase(string) {
    let newarr  = string.split(' ')
    newcase =[]
    for (let i = 0; i < newarr.length; i++) {
        newcase.push(newarr[i].replace(newarr[i][0],newarr[i][0].toUpperCase()))
    }
    return newcase.join(' ')
}
console.log(titleCase("I'm a little tea pot" ))

//seek and destroy
function destroyer(arr, num) {
 let newarr = []
 let value =[] 
 for (let index = 0; index < arr.length; index++) {
       if (arr[index]==num) {
         value.push(arr[index])
    }else{
        newarr.push(arr[index])
    }   
 }
 console.log(value)
 return newarr     
}
console.log(destroyer([1,2,3,2,3, 1,2], 2))


//Given a positive integer num, return the sum of all fibonacci numbers that are less
// than or equal to num
function sumfib(num) {
    let sum=0;
    for (let index = 0; index <= num; index++) {
        if (index%2===0) {
            sum= sum+index;
            console.log(sum)
        }
            
    }  

    
}
console.log(sumfib(10))
