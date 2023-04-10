
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

// SECOND 
let sumbtn = document.querySelector('.sum');
let getnum = document.getElementById('num');
let getoutput = document.querySelector('.output');
function performsum() {
let getValue = getnum.value;
let total = 0;
for (let i = 0; i <=getValue; i++) {
total = total+i

}
getoutput.innerHTML = "The total is: "+total;
getoutput.style.display = "block";

}

sumbtn.addEventListener('click', performsum)

