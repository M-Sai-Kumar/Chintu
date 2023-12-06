function avg(){
    var n1,n2,n3,average;
    n1=eval(document.getElementById('num1').value)
    n2=eval(document.getElementById('num2').value)
    n3=eval(document.getElementById('num3').value)

    average=(n1+n2+n3)/3;

    alert('Average of Numbers is'+average)
}
function cleardata() {
    document.getElementById("num1").value="";
    document.getElementById("num2").value="";
    document.getElementById("num3").value="";
}