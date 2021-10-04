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
saut2ligne()

//04 - Swap
console.log("04 - Swap \n")

function swap(str) {
    var result = 0
    var final  = ""
    for (var i = 0; i < str.length; i++) {
        if (str.charCodeAt(i) > 64 && str.charCodeAt(i) < 91) {
            result = str.charCodeAt(i) + 32
            final = final + String.fromCharCode(result)
        } else if (str.charCodeAt(i) > 96 && str.charCodeAt(i) < 123) {
            result = str.charCodeAt(i) - 32
            final = final + String.fromCharCode(result)
        } else {
            final = final + str[i]
        }
    }
    console.log(final)
}
swap("Hello World")
saut2ligne()

//Bonus
console.log("Bonus \n")

function makeItSpongeBob(str) {

    var mini = str.toLowerCase()
    var bob = ""

    for (var i = 0; i < mini.length; i++) {
        if (i % 2 == 0){
            bob = bob + mini[i].toUpperCase()
        } else {
            bob = bob + mini[i]
        }
    }
    console.log(bob)
}
makeItSpongeBob("JzfizjmafmZZFZzzefez")
saut2ligne()

//Bonus II
console.log("Bonus II \n")

function sortLetters(str) {
    var uno = str.split("")
    uno = uno.sort().join("")
    console.log(uno)
}
sortLetters("konAeBxiCoD")
saut2ligne()

//Bonus III
console.log("Bonus III \n")

function countEach(str) {
    var counto = 0
    var countx = 0
    var countX = 0
    var countO = 0
    var error = false
    
    for (var i = 0; i < str.length; i++) {
        if (str.charCodeAt(i) != 79 &&
            str.charCodeAt(i) != 88 &&
            str.charCodeAt(i) != 111 &&
            str.charCodeAt(i) != 120) {
                console.log("Error")
                error = true
                break
            } else {
                if (str[i] == "o") {
                    counto++
                }
                if (str[i] == "x") {
                    countx++
                }
                if (str[i] == "O") {
                    countO++
                }
                if (str[i] == "X") {
                    countX++
                }
            }
    }
    if (error == false) {
        console.log(counto + " de \"o\"")
        console.log(countx  + " de \"x\"")
        if (counto == countx) {
            console.log(true + " x = o")
        } else {
            console.log(false + " x != o")
        }
        console.log(countO + " de \"O\"")
        console.log(countX  + " de \"X\"")
    }
    saut2ligne()
}
countEach("xxxoooox1oxXO")
countEach("xoxoo")
saut2ligne()