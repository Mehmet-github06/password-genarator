const p = document.querySelector("p")
const reset = document.querySelector(".reset")
const genPas = document.querySelector(".generate-password")
const copy = document.querySelector(".copy")

const createPass = () => {
    let upper = ""
        for(let i = 65; i <= 90; i++) {
            upper += String.fromCharCode(i)
        }
        
    const upperCase = upper;
    const lowerCase = upper.toLowerCase();
    const numbers = "1234567890"
    const sembols = "!@#$%^&*()\\_+~|}{[]:;?><,./-=";
    const allChar = upperCase + lowerCase + numbers + sembols

    let pas = ""
    let password = ""

    pas += upperCase[Math.floor(Math.random() * upperCase.length)]
    pas += lowerCase[Math.floor(Math.random() * lowerCase.length)]

    for(i = 0; i < 3; i++) {
        pas += numbers[Math.floor(Math.random() * numbers.length)]
    }

    for(i = 0; i < 2; i++) {
        pas += sembols[Math.floor(Math.random() * sembols.length)]
    }

    for(i = 0; i < 3; i++) {
        pas += allChar[Math.floor(Math.random() * allChar.length)]
    }

    for(i = 0; i < 10; i++) {
        let random = pas[Math.floor(Math.random() * pas.length)]
        password += random
        pas = pas.replace(random, "")
    }
    return password
}

var currentPassword;

genPas.addEventListener("click", () => {
    currentPassword = createPass();
    p.textContent = currentPassword;
});

reset.addEventListener("click", () => {
    p.textContent = "**********";
    currentPassword = "**********";
});

copy.addEventListener("click", () => {
    navigator.clipboard.writeText(currentPassword);
    p.textContent = ""
    copied();

    setTimeout(() => {
        p.textContent = currentPassword;
    }, 1500);
});

const copied = () => {
    const i = document.createElement("i")
    const span = document.createElement("span")
    i.className = "fa-solid fa-check"
    span.textContent = "Copied"
    p.appendChild(i)
    p.appendChild(span)
}