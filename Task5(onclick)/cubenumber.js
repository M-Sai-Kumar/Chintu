function cube() {
    var n1=eval(document.getElementById("num1").value)
    
    var result=n1*n1*n1;
    alert("Cube of a number is"+result)
}
function cleardata(){
    document.getElementById('num1').value=" "
    document.getElementById('num2').value=" "
}