function saut2ligne(){
    console.log("")
}

//01 - Alphabet
console.log("01 - Alphabet \n")

function sortLetters(str) {
    var uno = str.split("")
    uno = uno.sort().join("")
    console.log(uno)
}
sortLetters("konexio")
saut2ligne()

//02 - XOXO
console.log("02 - XOXO \n")

function countEach(str) {
    var countO = 0
    var countX = 0
    for (var i = 0; i < str.length; i++) {
        if (str[i] == "o") {
            countO++
        } else {
            countX++
        }
    }
    console.log(countO)
    console.log(countX)
    if (countO == countX) {
        console.log(true)
    } else {
        console.log(false)
    }
}
countEach("xxxooooxox")
countEach("xoxoo")
saut2ligne()

//03 - Palindrome
console.log("03 - Palindrome \n")

function checkPal(str) {
    var i = 0
    var length = str.length - 1
    var palindrome = true
    
    while ( i < str.length / 2) {
        if (str[i] != str[length] ) {
            console.log(str[i], str[length])
            palindrome = false
            break
        }
        if (str[i] == str[length]){
            console.log(str[i], str[length])
            i++
            length--
        }
    }
    console.log(palindrome)
}
checkPal("racecar")