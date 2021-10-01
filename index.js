function saut2ligne(){
    console.log("")
}

//01 - Alphabet
console.log("01 - Alphabet \n")

function sortLetters(str) {
    var uno = str.split("")
    var text = uno.sort()
    text = text.join("")
    console.log(text)
}
sortLetters("konexio")
saut2ligne()
