function area() {
    var r=eval(document.getElementById("num1").value)
    var ar = 3.14 * r *r;
    alert("area of cicle is "+ar)
}
function cleardata(){
  document.getElementById('num1').value= ""
  document.getElementById('num2').value= ""
}