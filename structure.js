
// function addUpTo(n) {
//     let total = 0;
//     for (let i= 0; i < n; i++) {
//         total+=i
        
        
//     }
//     return total;
     
// }
// console.log(addUpTo(6));
// function countUp(n){
//     console.log('going up')
//     for (let index = 0; index < n; index++){
//         console.log(index)
//     } 
//     console.log('going down')
//     for (let j = n-1; j >0; j--) {
//         console.log(j);
    
        
//     }
// console.log('back down.bye!')
        
    
// }
// console.log(countUp(10));

// function double(array) {
//     let newarr =[]
//     for (let index = 0; index < array.length; index++) {
//         newarr.push(2*array[i])

        
//     }
//     return newarr;
// }
// console.log(double(1,2,3))

// var animals =['ant', 'bird','duck', 'dog', 'hen']
// console.log(animals.slice(2))
// console.log(animals.slice(2,4))
// console.log(animals.slice(2,5))

// const months =['jan', 'march', 'april']
// months.splice(1,0,'feb')

// console.log(months)
// months.splice(5,0,'july')
// console.log(months);
// months.splice(4,0,'june')
// console.log(months);

// function add(a,b) {
//     return a+b
// }
// console.log(add(10,2))

// function same(arr1,arr2) {
//     if(arr1.length !==arr2.length){
//         return false
//     }
//     for (let i = 0; i <arr1.length; i++) {
//         let correctIndex = arr2.indexOf(arr1[i] **2)
//         if (correctIndex ==-1) {
//             return false
            
//         }
//         arr2.splice(correctIndex,1)
//     }
//      return true       
// }
// console.log(same([1,2,3,2],[1,4,9,4]))

// function validanagram(first, second) {
//     if (first.length!==second.length) {
//         return false
//     }
//     const lookup ={};
//     for (let a = 0; a < first.length; a++) {
//         let letter = first[a];
//         lookup[letter] ? lookup[letter]+=1:lookup[letter]=1
        
//     }
//     for (let a = 0; a < second.length; a++) {
//         let letter = second[a];
//         if (!lookup[letter]) {
//             return false;
//         }
//         else{
//             lookup[letter]-=1
//         }

// }
// return true;

// }
// console.log(validanagram('anagram','nagaram'))
// // recusrion
// function countdown(number) {
//     if (number <=0) {
//         console.log('all done');
//         return;
//     }
//     console.log(number)
//     number--;
//     countdown(number)
// }
// countdown(5)
// const num = 10
// for (let i = num; i > 0; i--){
//     console.log(num)
    
// }

// 
// function countdown(num) {
//     if(num==10){
//         console.log('all done')
//         return;
//     }
//     console.log(num)
//     num++;
//     countdown(num)
    
// }
// console.log(countdown(0));

// function factorial(num) {
//     let total = 1
//     for (let i =num ; i>0; i--){
//         total*=i
//     }
//      return total      
// }
// console.log(factorial(3))
// //recursively
// function facturial(num) {
//     if (num==1) return 1;
//         return num +facturial(num-1)
        
    
    
// }
// console.log(facturial(4))

// function oddValues(array) {
//     let odd =[]
//     for (index of array) {
//         if(index%2!==0){
//             odd.push(index)
//         }
//     }
//     return odd
// }
// console.log(oddValues([1,3,4,5,6,8,7]))

// function sortarray(arr) {
//     let odd = []
//     let even =[]
//     for(i =0; i < arr.length; i++){
//         if (arr[i]%2!==0) {
//             odd.push(arr[i])
            
//         }else{
//             even.push(arr[i])
//         }
//     }
//     return odd.concat(even)
// }
// console.log(sortarray([1,2,3,6,8,9,7,5,4]))

// function checkstr(arr1, arr2) {
//     if (arr1.length!==arr2.length){
//         return false;
//     }
//     for (let index = 0; index < arr1.length; index++) {
//         let correctIndex=arr2.indexOf(arr1[i]**2)
//         if (correctIndex === -1) {
//             return  false;
            
//         }
//         arr2.splice(correctIndex,1)
            
//     }
//     return true;
// }
// console.log(checkstr([1,2,3,4],[9,4,6,1]))
// function word(arr1,arr2) {
//     if(arr1.length !==arr2.length){
//         return false;
//     }
//     let lookup = {}
//     for (let index = 0; index < arr1.length; index++) {
//         let first =arr1[index]
//         if (lookup[first]) {
//             lookup[first]+=1
            
//         }
//         else{
//             lookup[first]=1;
//         }    
//     }

//     for (let index = 0; index < arr2.length; index++) {
//         let first =arr2[index]
//         if (!lookup[first]) {
//             return false
            
//         }
//         else{
//             lookup[first]-=1;
//         }
//     }
//     return true
// }
// console.log(word('anagram','anagram'))

//duplicate 2,4,2,1,5,8,5

// function duplicateno(array) {
//     let constant ={}
//     let newarr=[]
//     for (let i = 0; i < array.length; i++) {
//         constant[array[i]] = constant[array[i]] + 1||1 
//     }    
    
//     for(let key in constant){
//         if (constant[key]!==1) {
//             newarr.push(Number(key))    
//         }
//     }
//     return newarr;
// }
// console.log(duplicateno([2,1,2,3,2,4,5,1,1]))

//multile pointers
// function sumZero(array) {
//     let left = 0;
//     let right = array.length-1;
//     while (left < right) {
//         let sum = array[left] + array[right]
//         if(sum===0){
//             return  [array[left], array[right]]
//         }
//         else if(sum > 0){
//             right--;
//         }else{
//             left ++;
//         }
//     }    
// }
// console.log(sumZero([-3,-2,-1,0,2,1,3]))
//another way of solving and returning two array=0
// function sumZero(arr) {
//     for (let index = 0; index < arr.length; index++) {
//         for (let j= index+1; j < arr.length; j++) {
//             if (arr[index] + arr[j]===0) {
//                 return [arr[index], arr[j]]
                
//             }
            
            
//         }
        
//     }
    
// }
// console.log(sumZero([-3,-2,-1,0,1,2,5]))

// function countUnique(ar) {
//    for (let index = 0; index < ar.length; index++) { 
//         for (let j =index+1 ; j < ar.length; j++) {
//             if (ar[index]=== ar[j]){
//                 index=1;
//                 ar[index] =ar[j]   
//             }else{
//                 index++
//             }
//             console.log(index,j)     
//         }
//         return index  +1;
//     }
// }
// console.log(countUnique([1,1,2,2,3,4,5]))

//single linked list
// class singlylist{
//     constructor(){
//         this.length = 0;
//         this.tail = null;
//         this.tail = null;
//     }
//     push(val){
//         var newnode = new Node(val);
//         if(!this.head){
//             this.head =newnode;
//             this.tail = this.head
//         }else{
//             this.tail.next = newnode;
//             this.tail = newnode;
//         }
//         this.length++;
//         return this;
//     }
// }


// var list = new singlylist()
// list.push('Hello');
// list.push('Goodbye')

// function longestString(str){
//     let words = str.split(' ');
//     let longest = '';
//     for(let word of words){
//         if (word.length >longest.length) {
//             longest = word
            
//         }
//         return longest;
//     }
    


// }
// console.log(longestString('kanyaka is where madam goes to work at noon'))

// function reverseString(string) {
//     return string.split('').reverse('').join('')
    
// }
// console.log(reverseString('hello'))

// function truncatestring(str, num) {
//    if (str.length > num) {
//     return str.slice(0, 8)+' ' +'...'
//    }else{
//     return str;
    
// }
// }
// console.log(truncatestring('A-tisket a-tasket A green and yellow basket', 100))

// function longestword(string){
//     let newarr = []
//     string=string.split(' ');
//     for (let i = 0; i < string.length; i++) {
//         newarr.push(string[i].length)
//     }
//     let max =Math.max(...newarr);
//     console.log(newarr)
//     console.log(...newarr)
//     return max;

// }
// console.log(longestword('The quick brown fox jumped over the lazy dog'))

// function factorial(num) {
//     if (num==1) {
//         return 1    
//     }
//     return num * factorial(num-1)
    
// }
// console.log(factorial(5))

// function largestFour(arr) {
//     let newarr =[]


// console.log(largestFour([[4,5,1,3],[13,27,18,26],[32,35,37,39],[1000,1001,857,1]]))


// function repeatstring(str, num) {
//     if (num < 1) {
//         return 0 
        
//     }else{
//         return str + repeatstring(str, num-1)
//     }
   
// }
// console.log(repeatstring('Awele', 4))

// function frankenSplice(arr1,arr2, num) {
//     let newarr = arr2
//     let b = newarr.splice(1, 0,...arr1)
//     console.log(b)
// }
// console.log(frankenSplice([4,5],[1,2,3],1))

// function titleCase(string) {
//     let newarr = string.split(' ')
//     let newcase = []
//     for (let i = 0; i <newarr.length; i++) {
//             // let updated = newarr[i][0].toUpperCase()
//             // newcase.push(updated)
//             let updated =newarr[i]
//             newcase.push(updated.replace(updated[0],updated[0].toUpperCase())) 
//      }
//      return newcase.join(' ')    
// }
// console.log(titleCase("I'm a little tea pot"))

// function spinalcase(str) {
//     let newarr = str.split(' ')
//     let update =[]
//     for (let index = 0; index < newarr.length; index++) {
//         update.push(newarr[index].toLowerCase())    
//     }
//     return update.join('-')    
// }
// console.log(spinalcase('This Is Spinal Tap'))

function sumfib(num) {
    let total = 0;
    for (let index = 0; index < num.length; index++) {
        let tmp =num[i]
        if(tmp %2 !==0) {
            console.log(tmp)
            total+=tmp    
        }    
    }
    return total;
}
console.log(sumfib(5))

