
let arabicNumber = ""
let arrayArab = []


let romanNumber = ""
let arrayRoman = []

document.getElementById("submit").onclick = function () {
  if (document.getElementById("arabic").value > 4999) {
    alert("Number too large!")
  } else {
    romanToArab()
    arabToRoman()
  }
}

function arabToRoman() {


  let arab = document.getElementById("arabic").value
  let arabArray = arab.split("") // ny array med en siffra i varje
  let amountOfZeroes = 1
  let convToStandalones = 1
  let origLength = arabArray.length

  romanStandalones = [] // sparas till converteringen i slutet
  finishedConvertionAtR = [] //faktiska konverteringen

  for (let i = 0; i < origLength; i++) { // läser alla siffrorna


    amountOfZeroes = 1
    for (let j = 0; j < arabArray.length; j++) { // läser alla siffrorna
      amountOfZeroes = amountOfZeroes * 10
      convToStandalones = (amountOfZeroes * arabArray[0]) / 10
    }
    arabArray.shift()
    romanStandalones.push(convToStandalones) // sparar de konverterade siffrorna som standalones i en array

  }

  //konvertera  standalones till romerska siffror:
  for (let k = 0; k < romanStandalones.length; k++) {

    //1000-tal
    if (romanStandalones.includes(4000)) {
      finishedConvertionAtR.push('MMMM')
      romanStandalones.shift()
    }
    if (romanStandalones.includes(3000)) {
      finishedConvertionAtR.push('MMM')
      romanStandalones.shift()
    }

    if (romanStandalones.includes(2000)) {
      finishedConvertionAtR.push('MM')
      romanStandalones.shift()
    }

    if (romanStandalones.includes(1000)) {
      finishedConvertionAtR.push('M')
      romanStandalones.shift()
    }

    //100-tal
    if (romanStandalones.includes(900)) {
      finishedConvertionAtR.push('CM')
      romanStandalones.shift()
    }
    if (romanStandalones.includes(800)) {
      finishedConvertionAtR.push('DCCC')
      romanStandalones.shift()
    }

    if (romanStandalones.includes(700)) {
      finishedConvertionAtR.push('DCC')
      romanStandalones.shift()
    }

    if (romanStandalones.includes(600)) {
      finishedConvertionAtR.push('DC')
      romanStandalones.shift()
    }
    if (romanStandalones.includes(500)) {
      finishedConvertionAtR.push('D')
      romanStandalones.shift()
    }
    if (romanStandalones.includes(400)) {
      finishedConvertionAtR.push('CD')
      romanStandalones.shift()
    }

    if (romanStandalones.includes(300)) {
      finishedConvertionAtR.push('CCC')
      romanStandalones.shift()
    }

    if (romanStandalones.includes(200)) {
      finishedConvertionAtR.push('CC')
      romanStandalones.shift()
    }
    if (romanStandalones.includes(100)) {
      finishedConvertionAtR.push('C')
      romanStandalones.shift()
    }

    //10-tal
    if (romanStandalones.includes(90)) {
      finishedConvertionAtR.push('XC')
      romanStandalones.shift()
    }
    if (romanStandalones.includes(80)) {
      finishedConvertionAtR.push('LXXX')
      romanStandalones.shift()
    }

    if (romanStandalones.includes(70)) {
      finishedConvertionAtR.push('LXX')
      romanStandalones.shift()
    }

    if (romanStandalones.includes(60)) {
      finishedConvertionAtR.push('LX')
      romanStandalones.shift()
    }
    if (romanStandalones.includes(50)) {
      finishedConvertionAtR.push('L')
      romanStandalones.shift()
    }
    if (romanStandalones.includes(40)) {
      finishedConvertionAtR.push('XL')
      romanStandalones.shift()
    }

    if (romanStandalones.includes(30)) {
      finishedConvertionAtR.push('XXX')
      romanStandalones.shift()
    }

    if (romanStandalones.includes(20)) {
      finishedConvertionAtR.push('XX')
      romanStandalones.shift()
    }
    if (romanStandalones.includes(10)) {
      finishedConvertionAtR.push('X')
      romanStandalones.shift()
    }


    //1-tal
    if (romanStandalones.includes(9)) {
      finishedConvertionAtR.push('IX')
      romanStandalones.shift()
    }
    if (romanStandalones.includes(8)) {
      finishedConvertionAtR.push('VIII')
      romanStandalones.shift()
    }

    if (romanStandalones.includes(7)) {
      finishedConvertionAtR.push('VII')
      romanStandalones.shift()
    }

    if (romanStandalones.includes(6)) {
      finishedConvertionAtR.push('VI')
      romanStandalones.shift()
    }
    if (romanStandalones.includes(5)) {
      finishedConvertionAtR.push('V')
      romanStandalones.shift()
    }
    if (romanStandalones.includes(4)) {
      finishedConvertionAtR.push('IV')
      romanStandalones.shift()
    }

    if (romanStandalones.includes(3)) {
      finishedConvertionAtR.push('III')
      romanStandalones.shift()
    }

    if (romanStandalones.includes(2)) {
      finishedConvertionAtR.push('II')
      romanStandalones.shift()
    }
    if (romanStandalones.includes(1)) {
      finishedConvertionAtR.push('I')
      romanStandalones.shift()
    }

  }
  let tempLength = finishedConvertionAtR.length
  finishedConvertionAtR = finishedConvertionAtR.toString()
  for (let l = 0; l < tempLength; l++) {
    finishedConvertionAtR = finishedConvertionAtR.replace(',', '')
  }

  document.getElementById("arabruta").innerText = "Roman: " + finishedConvertionAtR

}




function romanToArab() {
  // Convert Roman to Arabic
  let roman = document.getElementById("roman").value.toUpperCase()
  let lengthRoman = roman.split("")
  arrayArab = []

  for (let index = 0; index < lengthRoman.length; index++) {
    //Looks for thousands: M
    if (roman.includes('MMMM')) {
      arrayArab.push(4000)
      roman = roman.replace('MMMM', '')
    }
    if (roman.includes('MMM')) {
      arrayArab.push(3000)
      roman = roman.replace('MMM', '')
    }
    if (roman.includes('MM')) {
      arrayArab.push(2000)
      roman = roman.replace('MM', '')
    }
    if (roman.includes('M')
      && (roman[roman.indexOf("M") + 1]) != "C" // 2000
      && (roman[roman.indexOf("M") + 2]) != "C" // 3000
      && (roman[roman.indexOf("M") + 3]) != "C" // 4000
      && (roman[roman.indexOf("M") - 1]) != "C") // 900
    {
      arrayArab.push(1000)
      roman = roman.replace('M', '')
    }


    if (roman.includes('CM')) {
      arrayArab.push(900)
      roman = roman.replace('XC', '')
    }

    //Looks for five hundreds: D
    if (roman.includes('DCCC')) {
      arrayArab.push(800)
      roman = roman.replace('DCCC', '')
    }
    if (roman.includes('DCC')) {
      arrayArab.push(700)
      roman = roman.replace('DCC', '')
    }
    if (roman.includes('DC')) {
      arrayArab.push(600)
      roman = roman.replace('DC', '')
    }
    if (roman.includes('C')
      && (roman[roman.indexOf("D") + 1]) != "C" // 600
      && (roman[roman.indexOf("D") + 1]) != "C" // 700
      && (roman[roman.indexOf("D") + 2]) != "C" // 800
      && (roman[roman.indexOf("D") - 1]) != "C") // 400
    {
      arrayArab.push(500)
      roman = roman.replace('D', '')
    }


    //Looks for hundreds: C
    if (roman.includes('CCC')) {
      arrayArab.push(300)
      roman = roman.replace('CCC', '')
    }
    if (roman.includes('CC')) {
      arrayArab.push(200)
      roman = roman.replace('CC', '')
    }
    if (roman.includes('CD')) {
      arrayArab.push(400)
      roman = roman.replace('CD', '')
    }
    if (roman.includes('XC')) {
      arrayArab.push(90)
      roman = roman.replace('XC', '')
    }
    if (roman.includes('C')
      && (roman[roman.indexOf("C") + 1]) != "D" // 400
      && (roman[roman.indexOf("C") + 1]) != "C" // 200
      && (roman[roman.indexOf("C") + 2]) != "C" // 300
      && (roman[roman.indexOf("C") - 1]) != "X") // 90
    {
      arrayArab.push(100)
      roman = roman.replace('C', '')
    }


    //Looks for fifties: L
    if (roman.includes('LXXX')) {
      arrayArab.push(80)
      roman = roman.replace('LXXX', '')
    }
    if (roman.includes('LXX')) {
      arrayArab.push(70)
      roman = roman.replace('LXX', '')
    }
    if (roman.includes('LX')) {
      arrayArab.push(60)
      roman = roman.replace('LX', '')
    }
    if (roman.includes('L')
      && (roman[roman.indexOf("L") + 1]) != "X" // 60
      && (roman[roman.indexOf("L") + 2]) != "X" // 70
      && (roman[roman.indexOf("L") + 3]) != "X" // 80
      && (roman[roman.indexOf("L") - 1]) != "X") // 40
    {
      arrayArab.push(50)
      roman = roman.replace('L', '')
    }


    //Looks for tens: X
    if (roman.includes('IX')) {
      arrayArab.push(9)
      roman = roman.replace('IX', '')
    }
    if (roman.includes('XIII')) {
      arrayArab.push(13)
      roman = roman.replace('XIII', '')
    }
    if (roman.includes('XII')) {
      arrayArab.push(12)
      roman = roman.replace('XII', '')
    }
    if (roman.includes('XI')) {
      arrayArab.push(11)
      roman = roman.replace('XI', '')
    }

    if (roman.includes('XXX')) {
      arrayArab.push(30)
      roman = roman.replace('XXX', '')
    }
    if (roman.includes('XX')) {
      arrayArab.push(20)
      roman = roman.replace('XX', '')
    }
    if (roman.includes('XL')) {
      arrayArab.push(40)
      roman = roman.replace('XL', '')
    }
    if (roman.includes('X')
      && (roman[roman.indexOf("X") + 1]) != "I" // 11
      && (roman[roman.indexOf("X") + 2]) != "I" // 12
      && (roman[roman.indexOf("X") + 3]) != "I" // 13 // Kommer den räkna XXVI fel i så fall?
      && (roman[roman.indexOf("X") - 1]) != "I" // 9
      && (roman[roman.indexOf("X") + 1]) != "XX" // 20
      && (roman[roman.indexOf("X") + 2]) != "XXX" // 30
      && (roman[roman.indexOf("X") + 1]) != "XL")// 40 
    {
      arrayArab.push(10)
      roman = roman.replace('X', '')
    }

    //Looks for Fives: V
    if (roman.includes('IV')) {
      arrayArab.push(4)
      roman = roman.replace('IV', '')
    }
    if (roman.includes('VIII')) {
      arrayArab.push(8)
      roman = roman.replace('VIII', '')
    }
    if (roman.includes('VII')) {
      arrayArab.push(7)
      roman = roman.replace('VII', '')
    }
    if (roman.includes('VI')) {
      arrayArab.push(6)
      roman = roman.replace('VI', '')
    }
    if (roman.includes('V')
      && (roman[roman.indexOf("V") + 1]) != "I"
      && (roman[roman.indexOf("V") + 2]) != "I"
      && (roman[roman.indexOf("V") + 3]) != "I"
      && (roman[roman.indexOf("V") - 1]) != "I") {
      arrayArab.push(5)
      roman = roman.replace('V', '')
    }

    if (roman.includes('III')) {
      arrayArab.push(3)
      roman = roman.replace('III', '')
    }
    if (roman.includes('II')) {
      arrayArab.push(2)
      roman = roman.replace('II', '')
    }
    if (roman.includes('I')) {
      arrayArab.push(1)
      roman = roman.replace('I', '')
    }


    let sum = 0
    for (let i = 0; i < arrayArab.length; i++) {
      sum += arrayArab[i]
    }

    document.getElementById("romanruta").innerText = sum
  }


}

