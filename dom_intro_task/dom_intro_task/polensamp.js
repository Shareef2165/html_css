let str1 = "racecar";
let str2 = "nitin";
let str3 = "Rama";

function isPalindrome(str) {
    let j = str.length - 1
    for (let i = 0; i < str.length / 2; i++) {
        if (str[i] != str[j]) {
            return false;
            const str1 =document.getElementById("polendrem").innerHTML=str
        }
        j--;
    }
    return true;
}



console.log(isPalindrome(str1));
console.log(isPalindrome(str2));
console.log(isPalindrome(str3));