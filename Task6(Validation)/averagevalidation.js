function avg() {
    var n1 = document.getElementById('num1').value
    if (n1 == "") {
        document.getElementById('s1').innerHTML = 'this field is required'
        return false
    }

    var n2 = document.getElementById("num2").value
    if (n2 == "") {
        document.getElementById('s2').innerHTML = 'this field is required'
        return false
    }

    var n3 = document.getElementById('num3').value
    if (n3 == "") {
        document.getElementById('s3').innerHTML = 'this field is required'
        return false
    } else {
        var result = (eval(n1) +eval(n2) +eval(n3)) / 3
        document.getElementById('div1').innerHTML = 'Average is :' + result
    }
}

function cleardata() {
    var re = confirm('delete this')
    if (re == true) {
        return true
    } else {
        return false
    }
}