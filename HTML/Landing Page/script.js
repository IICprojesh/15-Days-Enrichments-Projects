let getText = document.getElementById('name');
let remainChar = document.querySelector('#remainchar');
let maxcount = getText.maxLength
function calculation() {
    let checktext = getText.value
    let countText = checktext.length
    let remain = maxcount - countText
    remainChar.textContent = remain
    console.log(remainChar)
    if (remain <= 10) {
        remainChar.style.color ='red';
    }
    else {
        remainChar.style.color ='black';
    }

}



getText.addEventListener('input', calculation)