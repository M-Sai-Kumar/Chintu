function addition() {
    //get the data from id1 and assign to n1 variable
    var n1=eval(document.getElementById("num1").value)
    //get the data from id1 and assign to n1 variable
    var n2=eval(document.getElementById("num2").value)
    var result=n1+n2;
    alert("Addition is"+result)
}
function cleardata(){
    //set the data to id1 as empty string
    document.getElementById('num1').value= ""
    //set the data to id1 as empty string
    document.getElementById('num2').value= ""
}