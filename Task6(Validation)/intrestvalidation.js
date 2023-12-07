function fun1() {

    var n1 = document.getElementById('id1').value
    if (n1 == "") {
        document.getElementById("div1").style.color = 'red'  
        document.getElementById('div1').innerHTML = '* n1 should not be empty'
        return false
    }

    var n2 = document.getElementById('id2').value
    if (n2 == "") {
        document.getElementById('div2').innerHTML = '* n2 should not be empty'
        return false
    }

    var n3 = document.getElementById('id3').value
    if (n3 == "") {
        document.getElementById('div3').innerHTML = '* n3 should not be empty'
        return false
    }

    else {
        var result = (eval(n1) + eval(n2) + eval(n3)) / 100
        document.getElementById('div4').innerHTML = 'Result is:' + result
        return true
    }
}
function eraseData() {
    var result = confirm('Are you sure to delete ?')
    if (result == true) {
        return true
    } else {
        return false
    }  
}