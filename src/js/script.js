
function insereValor(num) {
    const input = document.getElementById('display').value
    document.getElementById('display').value =  input + num;
    
}

function resultado() {
    const input = document.getElementById('display').value
    document.getElementById('display').value = eval(input);
    
}

function apagar() {
    document.getElementById('display').value ="";
}

function invertValores() {
    resultado()
    const input = document.getElementById('display').value
    document.getElementById('display').value = input * -1;
}

function percentCalc() {
    if(document.getElementById('display').value == '') {
        document.getElementById('display').value = '0';
    } else{
        resultado()
        resultPercentCalc = document.getElementById('display').value / 100
        document.getElementById('display').value = resultPercentCalc;
    }
}