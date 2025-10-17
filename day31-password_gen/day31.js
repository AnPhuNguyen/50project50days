const resultEl = document.getElementById('result')
const lengthEl = document.getElementById('length')
const uppercaseEl = document.getElementById('upper')
const lowercaseEl = document.getElementById('lower')
const numbersEl = document.getElementById('number')
const symbolsEl = document.getElementById('symbol')
const generateEl = document.getElementById('generate')
const clipboardEl = document.getElementById('clipboard')


generateEl.addEventListener('click', () => {
    const passLen = lengthEl.value
    const hasLower = lowercaseEl.checked
    const hasUpper = uppercaseEl.checked
    const hasNumber = numbersEl.checked
    const hasSymbol = symbolsEl.checked

    // resultEl.innerText = generatePassword(hasLower, hasUpper, hasNumber, hasSymbol, length)

    if (passLen < 4 || passLen > 20){
        alert('Here, password must have length from 4 to 20 charater')
        return
    }


    const typeCount = hasLower + hasUpper + hasNumber + hasSymbol
    if (typeCount === 0){
        return
    }

    let password = ''
    // let passLen = 8
    while(password.length < passLen){
        let randChar = getRandomChar(hasLower, hasUpper, hasNumber, hasSymbol)
        password += randChar
    }
    
    // console.log(password)
    resultEl.innerHTML = password
})

function getRandomChar(hasLower, hasUpper, hasNumber, hasSymbol){
    
    let randChar = ''
        let choice = Math.floor(Math.random()*4)
        switch (choice) {
            case 0:
                randChar = (hasLower) ? getRandomLower() : ''
                break;
            case 1:
                randChar = (hasUpper) ? getRandomUpper() : ''
                break;
            case 2:
                randChar = (hasNumber) ? getRandomNumber() : ''
                break;
            default:
                randChar = (hasSymbol) ? getRandomSymbol() : ''
                break;
        }
    return randChar
}

function getRandomUpper(){
    const alphabet_upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const random = Math.floor(Math.random()*alphabet_upper.length)
    return alphabet_upper[random]
}

function getRandomLower(){
    const alphabet_upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const alphabet_lower = alphabet_upper.toLowerCase()
    const random = Math.floor(Math.random()*alphabet_lower.length)
    return alphabet_lower[random]
}

function getRandomNumber(){
    const random_num = Math.floor(Math.random()*10)
    return random_num.toString()
}

function getRandomSymbol() {
    const symbols = '!@#$%^&*(){}[]=<>/,.'
    return symbols[Math.floor(Math.random() * symbols.length)]
}