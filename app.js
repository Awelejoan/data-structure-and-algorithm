const myName = 'Joan';
const myString = ' My name is' + myName +' and I am well'
console.log(myString);

const someAdjective ='senior dev Joan';
let myStr= 'Javascript is logical'
myStr += someAdjective;
console.log(myStr);

const LastName='Dev'
console.log(LastName[2])

const arr1 =['joan', 'eky', 'nmesi'];
arr1.pop()
console.log(arr1)

const myArray = [['John','23'], ['cat',2]]
const removedfromarray=myArray.pop()
console.log(myArray)
console.log(removedfromarray);


const myarray=[['dog', 3]]
myarray.unshift(['paul',35])
console.log(myarray)


function sortarray(arr) {
    let negarr=[];
    let posarr =[];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] >0){
            posarr.push(arr[i])

        }else{
            negarr.push(arr[i])
        }
        
    }
    return posarr.concat(negarr)
       
}
console.log(sortarray([1,-1,3,2,-7,-5,11,6]));




function functionWithArgs(a) {
    return a*5
    
}
console.log(functionWithArgs(5))

var myGlobal=10;
function fun1() {
 oopsglobal =5;   
}

function addfive(sum) {
    sum= sum + 5
    
}
addfive(3)

function foo(x) {
    if(x >0){
        console.log('true')

    }else{
        console.log('false')
    }
    
}

foo(5)


function multiple(value) {
    var answer=[]
    switch (value) {
        case 1:
            answer ='alpha' 
            break;
        case 2:
            answer='beta'
            break;

        case 3:
            answer = 'delta'
    
        
    }
    return answer;
} 
console.log(multiple(1))       

function switchofStuff(val) {
    var answer=[]
    switch (val) {
        case 'a':
            answer ='apple' 
            break;
        case 'b':
            answer='bird'
            break;

        case 'c':
            answer = 'cat'
        default:
            answer ='not a number'
            break;
        
    }
    return answer;
} 
console.log(switchofStuff(1))  

function SequentialSizes(no) {
    var answer=[]
    switch (no) {
        
        case 1:
            answer='low'
            case 2:
            answer='low'

            case 3:
            answer='low'
            break;
            case 4:
            answer='mid'
            case 5:
            answer='mid'
            break;
            case 6:
            answer='high'
            break;
    
        
    }
        return answer       
        }
console.log(SequentialSizes(1))


