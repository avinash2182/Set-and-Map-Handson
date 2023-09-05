// "Problem:
// You are given a string (STR) of length N, consisting of only the lower case English alphabet.
// Your task is to remove all the duplicate occurrences of characters in the string.

// Input:
// abcadeecfb

// Output:
// abcdef"

let totalstr = "abcadeecfb"

let ans = new Set(totalstr)
ans=[...ans]
ans=ans.join('')
console.log(ans)






// "Problem:
// You are given a string (STR) of length N, you have to print the count of all alphabet.(using maps)

// Input:
// abcadeecfb

// Output:
// a=2
// b=2
// c=2
// d=1
// e=2
// f=1"

// 
let result = "abcadeecfb";
let finalresult = new Map();
for(let char of result){
    if(finalresult.has(char)){
        finalresult.set(char,finalresult.get(char)+1);
    }
    else{
        finalresult.set(char,1);
    }
}
for(let [key,value] of finalresult){
    console.log(`${key}=${value}`);
}
