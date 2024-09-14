const passwordBox = document.getElementById("password");

const length = 12;

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbols = "!@#$%^&*()_-+{}[]<>|\/";

const allChars = upperCase+lowerCase+number+symbols;

function createPassword(){
    let password = "";
    password +=upperCase[Math.floor(Math.random()*upperCase.length)];
    password +=lowerCase[Math.floor(Math.random()*lowerCase.length)];
    password +=number[Math.floor(Math.random()*number.length)];
    password +=symbols[Math.floor(Math.random()*symbols.length)];

    while(length > password.length){
        password +=allChars[Math.floor(Math.random()*allChars.length)];
    }
    passwordBox.value = password;
}

function copyPassword(){
    passwordBox.select();
    document.execCommand("copy");
}

let imgBox = document.getElementById("imgBox");
let qrImage = document.getElementById("qrImage");
let qrText = document.getElementById("qrText");

function generateQR(){
    if(qrText.value.length > 0){
        url = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="

        qrImage.src = url + qrText.value;
        imgBox.classList.add("show-img");
    }else{
        qrText.classList.add('error')
        setTimeout(()=>{
            qrText.classList.remove("error");
        },1000);
    }

}


function showRandPass(){
    document.getElementsByClassName('workarea').style.display.innerHTML = 'block';
}