function area() {
    var r = document.getElementById("num1").value
    if (r == "") {
        document.getElementById("span1").style.color = 'red'
        document.getElementById("span1").innerHTML = 'should not be empty'
        return false
    } else {
        var result = eval(3.14 * r * r)
        document.getElementById("div1").innerHTML = result
        return true
    }
}
function clearData() {
    var result = confirm('are you sure to delete?')
    if (result == true) {
        return true
    } else {
        return false
    }
}