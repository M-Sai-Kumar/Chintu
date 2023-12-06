function intrest() {
    var p=eval(document.getElementById("num1").value)
    var t=eval(document.getElementById("num2").value)
    var r=eval(document.getElementById("num3").value)
    var result=(p*t*r)/100;
    alert("Simple intrest is"+result)
}
function cleardata(){
    document.getElementById('num1').value=" "
    document.getElementById('num2').value=" "
    document.getElementById('num3').value=" "
}